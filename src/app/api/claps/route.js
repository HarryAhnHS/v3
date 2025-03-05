import admin from "firebase-admin";

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
const clapsRef = db.collection("claps").doc("T0SncoUsa49Msd51p2Du");

export async function GET() {
  try {
    const docSnap = await clapsRef.get();

    if (!docSnap.exists) {
      await clapsRef.set({ count: 0 });
      return Response.json({ count: 0 });
    }

    return Response.json({ count: docSnap.data().count });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST() {
  try {
    await clapsRef.update({ count: admin.firestore.FieldValue.increment(1) });

    const updatedSnap = await clapsRef.get();
    return Response.json({ count: updatedSnap.data().count });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
