"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LinkButton from "./LinkButton";
import { useTheme } from "./ThemeProvider";
import { Clapperboard, Hand, Handshake, Heart, Moon, Sun } from "lucide-react";


export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [claps, setClaps] = useState(0);

    //  Claps
    useEffect(() => {
        // Fetch initial claps
        fetch("/api/claps")
        .then((res) => res.json())
        .then((data) => setClaps(data.count))
        .catch((error) => console.error("Error fetching claps:", error));
    }, []);

    const handleClap = async () => {
        // Send clap increment request
        const res = await fetch("/api/claps", { method: "POST" });
        const data = await res.json();
        setClaps(data.count);
    };

    return (
        <header className="px-4 sm:px-12 py-2 flex items-center">
            <div className="hidden sm:block flex-1">
                <LinkButton href="/" isNextLink={true} isHighlighted={false} className="text-base sm:text-lg font-normal">
                    Harry Ahn
                </LinkButton>
            </div>

            <div className="flex-1 sm:flex-initial">
                <Navbar />
            </div>

            <div className="flex items-center gap-2 flex-1 justify-end">
                <div className="relative gap-1">
                    <button onClick={handleClap} className="relative flex items-center cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <span className="absolute bottom-5 text-[10px] text-nowrap">high five!</span>
                        <div className="flex items-center gap-1">
                            <Hand className="h-4 w-4" />
                            <span className="font-semibold text-sm">{ claps }</span>
                        </div>
                    </button>
                </div>
                <button onClick={toggleTheme}
                        className="p-2 rounded-lg cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-transform duration-300 hover:scale-110"
                        aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
            </div>
        </header>
    );
}