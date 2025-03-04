"use client";

import Navbar from "./Navbar";
import { useTheme } from "./ThemeProvider";
import { Handshake, Heart, Moon, Sun } from "lucide-react";


export default function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="px-6 py-2 flex justify-between items-center border-b border-neutral-500 dark:border-neutral-400 ">
            <div className="text-lg text-gray-800 dark:text-white">
                Harry Ahn
            </div>

            <Navbar />

            <div className="flex items-center gap-2">
                <div className="relative gap-1 ">
                    <button className="flex items-center gap-1 p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors">
                        <Handshake className="h-4 w-4" />
                        <span className="font-semibold text-sm">49</span>
                    </button>
                </div>
                <button onClick={toggleTheme}
                        className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                        aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
            </div>
        </header>
    );
}