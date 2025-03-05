"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useTheme } from "./ThemeProvider";
import { Handshake, Heart, Moon, Sun } from "lucide-react";


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
        <header className="px-6 py-2 flex justify-between items-center border-b border-neutral-500 dark:border-neutral-400 ">
            <div className="text-lg text-gray-800 dark:text-white">
                Harry Ahn
            </div>

            <Navbar />

            <div className="flex items-center gap-2">
                <div className="relative gap-1 ">
                    <button onClick={handleClap} className="flex items-center cursor-pointer gap-1 hover:text-gray-600 dark:hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <Handshake className="h-4 w-4" />
                        <span className="font-semibold text-sm">{ claps }</span>
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