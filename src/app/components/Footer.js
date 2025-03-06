import { Github, Linkedin, Mail, Code, FileText } from "lucide-react"; // Replace Music with FileText (for Resume)

export default function Footer() {
  const links = [
    { name: "GitHub", href: "https://github.com/HarryAhnHS", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/hongsuh-ahn-b7520a188/", icon: Linkedin },
    { name: "Email", href: "mailto:harryahn@usc.edu", icon: Mail },
    { name: "Resume", href: "/resume.pdf", icon: FileText },
    { name: "Source Code", href: "https://github.com/HarryAhnHS/v3", icon: Code }
  ];

  return (
    <footer className="flex flex-col gap-4 text-sm px-3 sm:px-0">
      <hr className="border-t border-neutral-500 dark:border-neutral-400" />
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 relative group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              {/* Tooltip text that appears on hover */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-nowrap text-neutral-200 dark:text-neutral-800 bg-neutral-800 dark:bg-neutral-200 text-white p-1 rounded">
                {link.name}
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} <b>HarryAhnHS</b>
        </p>
      </div>
    </footer>
  );
}
