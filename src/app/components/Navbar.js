import Link from "next/link";
import LinkButton from "./LinkButton";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-3 sm:gap-6 font-base text-sm text-stone-600 dark:text-stone-400">
        <li>
          <LinkButton href="/" isNextLink={true} className="font-normal">
            Home
          </LinkButton>
        </li>
        <li>
          <LinkButton href="/projects" isNextLink={true} className="font-normal">
            Projects
          </LinkButton>
        </li>
        <li>
          <LinkButton href="/skills" isNextLink={true} className="font-normal">
            Skills
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
