import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiFirebase, SiSwift, SiFlutter, SiCplusplus, SiPython, SiSelenium, SiRailway, SiFlask, SiFastapi, SiHuggingface } from "react-icons/si";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { DiJava, DiDocker, DiHeroku } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { RiSupabaseLine } from "react-icons/ri";
import { TbBrandPrisma } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import { AiOutlineNodeIndex } from "react-icons/ai";

export const nodes = [
  { id: "Me", group: "root" },
  { id: "Frontend", group: "category" },
  { id: "React", group: "tech" },
  { id: "NextJS", group: "tech" },
  { id: "Backend", group: "category" },
  { id: "Node.js", group: "tech" },
  { id: "Express", group: "tech" },
  { id: "Database", group: "category" },
  { id: "Firebase", group: "tech" },
  { id: "PostGreSQL", group: "tech" },
  { id: "MongoDB", group: "tech" },
  { id: "Prisma", group: "tech" },
  { id: "DevOps", group: "category" },
  { id: "Git", group: "tech" },
  { id: "Docker", group: "tech" },
  { id: "Selenium", group: "tech" },
  { id: "Railway", group: "tech" },
  { id: "Supabase", group: "tech" },
  { id: "Language", group: "category" },
  { id: "C++", group: "tech" },
  { id: "Python", group: "tech" },
  { id: "JavaScript", group: "tech" },
  { id: "SwiftUI", group: "tech" },
  { id: "Flutter", group: "tech" },
  { id: "Java", group: "tech" },
  { id: "AI/ML", group: "category" },
  { id: "FastAPI", group: "tech" },
  { id: "Flask", group: "tech" },
  { id: "FAISS", group: "tech" },
  { id: "Sentence Transformers", group: "tech" },
  { id: "Hugging Face", group: "tech" },
  { id: "LLM", group: "tech" },
];


export const links = [
  { source: "Me", target: "Frontend" },
  { source: "Me", target: "Backend" },
  { source: "Me", target: "Database" },
  { source: "Me", target: "DevOps" },
  { source: "Me", target: "Language" },
  { source: "Me", target: "AI/ML" },

  { source: "Frontend", target: "React" },
  { source: "Frontend", target: "NextJS" },

  { source: "Backend", target: "Node.js" },
  { source: "Backend", target: "Express" },
  { source: "Backend", target: "FastAPI" },
  { source: "Backend", target: "Flask" },

  { source: "Database", target: "Firebase" },
  { source: "Database", target: "Supabase" },
  { source: "Database", target: "PostGreSQL" },
  { source: "Database", target: "MongoDB" },
  { source: "Database", target: "Prisma" },

  { source: "DevOps", target: "Git" },
  { source: "DevOps", target: "Docker" },
  { source: "DevOps", target: "Selenium" },
  { source: "DevOps", target: "Railway" },

  { source: "Language", target: "C++" },
  { source: "Language", target: "Python" },
  { source: "Language", target: "JavaScript" },
  { source: "Language", target: "SwiftUI" },
  { source: "Language", target: "Flutter" },
  { source: "Language", target: "Java" },

  { source: "AI/ML", target: "FAISS" },
  { source: "AI/ML", target: "Sentence Transformers" },
  { source: "AI/ML", target: "Hugging Face" },
  { source: "AI/ML", target: "LLM" },
];

export const techIcons = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Firebase": SiFirebase,
  "PostGreSQL": SiPostgresql,
  "C++": SiCplusplus,
  "Python": SiPython,
  "JavaScript": MdJavascript,
  "Java": DiJava,
  "SwiftUI": SiSwift,
  "Flutter": SiFlutter,
  "Git": FaGit,
  "Docker": DiDocker,
  "Selenium": SiSelenium,
  "MongoDB": TbBrandMongodb,
  "NextJS": TbBrandNextjs,
  "Supabase": RiSupabaseLine,
  "Railway": SiRailway,
  "Heroku": DiHeroku,
  "Prisma": TbBrandPrisma,
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "FAISS": AiOutlineNodeIndex,
  "Sentence Transformers": SiHuggingface,
  "Hugging Face": SiHuggingface,
  "LLM": FaBrain,
};