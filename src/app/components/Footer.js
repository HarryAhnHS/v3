import { Github, Linkedin, Mail, Globe, Code } from "lucide-react";

export default function Footer({ className }) {
  const links = [
    { name: "GitHub", href: "https://github.com/yourgithub", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourlinkedin", icon: Linkedin },
    { name: "Email", href: "mailto:your@email.com", icon: Mail },
    { name: "Website", href: "https://yourwebsite.com", icon: Globe },
    { name: "Source Code", href: "https://github.com/yourrepo/portfolio", icon: Code }
  ];

  return (
    <footer className={`flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      <hr className="border-neutral-200 dark:border-neutral-800" />
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
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
