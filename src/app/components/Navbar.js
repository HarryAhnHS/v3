import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
        <li>
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-stone-900 dark:hover:text-stone-100 transition">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
