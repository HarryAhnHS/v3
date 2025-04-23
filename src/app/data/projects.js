import Flexor from "../assets/projects/Flexor.png";
import V3 from "../assets/projects/V3.png";
import FileStorage from "../assets/projects/FileStorage.png";
import ResumeGenerator from "../assets/projects/ResumeGenerator.png";
import BattleShip from "../assets/projects/Battleship.png"
import ThingsToDo from "../assets/projects/ThingsToDo.png";
import TicTacToe from "../assets/projects/TicTacToe.png";
import InsidePDF from "../assets/projects/InsidePDF.png";
import TooLateAI from "../assets/projects/Toolate.png";
import TrackAnalyzer from "../assets/projects/TrackAnalyzer.png";
export const projects = [
  {
    title: "Semantic Music Tagger and Analyzer",
    href: "https://bridge-ml-client-production.up.railway.app/",
    description: "Built a scalable CLAP + TTMR++ hybrid pipeline for holistic music analysis, semantic tagging and similarity search using FMA datasets. Combined multi-vector joint FAISS embeddings with LLMs to generate human-quality descriptions and rich metadata from raw MP3 uploads. Supports text to music recommendation and artist discovery as the barebones of a recommendation algorithm. Built in 72 hours.",
    image: TrackAnalyzer,
    imageAlt: "Semantic Music Tagger and Analyzer",
    technologies: ["Python FastAPI", "CLAP", "TTMR++", "FAISS", "NextJS", "SentenceTransformers", "LLaMA2", "LLM", "Scripting", "Demucs", "FMA Dataset"],
    github: "https://github.com/HarryAhnHS/bridge-ml-api",
    demo: "https://bridge-ml-client-production.up.railway.app/"
  },
  {
    title: "TooLate.ai",
    href: "https://toolate.up.railway.app/",
    description: "RAG + LLM-powered platform that semantically compares AI startup ideas against a multi-source scraped corpus, offering GPT-backed positioning feedback and suggestions. Built in 72 hours.",
    image: TooLateAI,
    imageAlt: "TooLate.ai",
    technologies: ["Python FastAPI", "FAISS", "SentenceTransformers", "NextJS", "GraphQL", "LLM", "RAG", "Scripting", "Scraping"],
    github: "https://github.com/HarryAhnHS/toolate-api",
    demo: "https://toolate.up.railway.app/"
  },  
  {
    title: "InsidePDF",
    href: "https://inside-pdf.up.railway.app/",
    description: "An AI-enhanced PDF reader offering Text-to-Speech, AI Chat Assistant, and Smart Navigation for improved reading and comprehension.",
    image: InsidePDF,
    imageAlt: "InsidePDF",
    technologies: ["React", "Next.js", "GSAP", "TailwindCSS", "PDF.js", "TTS", "Llama"],
    github: "https://github.com/HarryAhnHS/inside-pdf",
    demo: "https://inside-pdf.up.railway.app/"
  },
  {
    title: "Flexor",
    href: "https://flexor-front-end-2c6r.vercel.app/",
    description: "An interactive real-time social media platform, allowing users to create/join communities and scaled to support 100,000+ posts.",
    image: Flexor,
    imageAlt: "Flexor",
    technologies: ["React", "Node.js", "Express.js", "PostGreSQL", "TailwindCSS", "RestAPI"],
    github: "https://github.com/HarryAhnHS/flexor-front-end",
    demo: "https://flexor-front-end-2c6r.vercel.app",
  },
  {
    title: "FileStorage",
    href: "https://file-storage-production.up.railway.app/",
    description: "A secure and easy-to-use online file storage solution. Start organizing and accessing your files from anywhere in the world.",
    image: FileStorage,
    imageAlt: "FileStorage",
    technologies: ["ExpressJS", "PostGreSQL", "Prisma", "TailwindCSS", "Cloudinary"],
    github: "https://github.com/HarryAhnHS/file-storage",
    demo: "https://file-storage-production.up.railway.app/",
  },
  {
    title: "Personal Landing Page",
    href: "/",
    description: "A sleek, interactive portfolio website with GSAP animations.",
    image: V3,
    imageAlt: "Personal portfolio website",
    technologies: ["React", "Next.js", "GSAP", "D3.js", "TailwindCSS"],
    github: "https://github.com/HarryAhnHS/v3",
    demo: "/",
  },
  {
    title: "ResumeGenerator",
    href: "https://superb-duckanoo-a223b4.netlify.app/",
    description: "Simple resume generator app, allowing customization and seamless export with consistent aspect ratio.",
    image: ResumeGenerator,
    imageAlt: "Resume Generator",
    technologies: ["React", "Bootstrap"],
    github: "https://github.com/HarryAhnHS/cv-builder",
    demo: "https://superb-duckanoo-a223b4.netlify.app/",
  },
  {
    title: "Battleship",
    href: "https://harryahnhs.github.io/battleship/",
    description: "PvC battleship game. Interactively drag, drop, and rotate ships, and battle an intelligent agent making computer decisions.",
    image: BattleShip,
    imageAlt: "Battleship",
    technologies: ["HTML", "CSS", "JS", "npm"],
    github: "https://github.com/HarryAhnHS/battleship",
    demo: "https://harryahnhs.github.io/battleship/",
  },
  {
    title: "ThingsToDo",
    href: "https://harryahnhs.github.io/thingsToDo/",
    description: "Todo list with fully customizable projects & todos. Automatically save content using localStorage API.",
    image: ThingsToDo,
    imageAlt: "Things to do",
    technologies: ["HTML", "CSS", "JS", "npm"],
    github: "https://github.com/HarryAhnHS/thingsToDo",
    demo: "https://harryahnhs.github.io/thingsToDo/",
  },
  {
    title: "TicTacToe",
    href: "https://harryahnhs.github.io/tictactoe/",
    description: "Interactive Tic-Tac-Toe game supporting PvP and PvC with ranging difficulty. Implemented minimax algorithm for computer decision-making.",
    image: TicTacToe,
    imageAlt: "Tic Tac Toe",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/HarryAhnHS/tictactoe",
    demo: "https://harryahnhs.github.io/tictactoe/",
  },
]; 