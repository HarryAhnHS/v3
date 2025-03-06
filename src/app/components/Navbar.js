import Link from "next/link";
import LinkButton from "./LinkButton";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
        <li>
          <LinkButton href="/" isNextLink={true}>
            Home
          </LinkButton>
        </li>
        <li>
          <LinkButton href="/projects" isNextLink={true}>
            Projects
          </LinkButton>
        </li>
        <li>
          <LinkButton href="/skills" isNextLink={true}>
            Skills
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
