import { Github, Linkedin, Mail, Code, Music } from "lucide-react";

export default function Footer({  }) {
  const links = [
    { name: "GitHub", href: "https://github.com/HarryAhnHS", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/hongsuh-ahn-b7520a188/", icon: Linkedin },
    { name: "Email", href: "mailto:harryahn@usc.edu", icon: Mail },
    { name: "Music", href: "https://soundcloud.com/hhypno", icon: Music },
    { name: "Source Code", href: "https://github.com/HarryAhnHS/v3", icon: Code }
  ];

  return (
    <footer className={`flex flex-col gap-4 text-sm`}>
      <hr className="border-t border-neutral-500 dark:border-neutral-400" />
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            </a>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Harry Ahn
        </p>
      </div>
    </footer>
  );
}
