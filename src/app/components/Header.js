"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LinkButton from "./LinkButton";
import { useTheme } from "./ThemeProvider";
import { Hand, Moon, Sun } from "lucide-react";
import useModifierKey from "../hooks/useModifierKey";
import useMobileDevice from "../hooks/useMobileDevice";
import CurvedArrow from "./CurvedArrow";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [claps, setClaps] = useState(0);
    const [isMac, setIsMac] = useState(false);
    const [showArrow, setShowArrow] = useState(true);
    const isModifierPressed = useModifierKey();
    const isMobileDevice = useMobileDevice();

    //  Claps
    useEffect(() => {
        // Fetch initial claps
        fetch("/api/claps")
        .then((res) => res.json())
        .then((data) => setClaps(data.count))
        .catch((error) => console.error("Error fetching claps:", error));
    }, []);

    // Command Palette
    useEffect(() => {
        setIsMac(navigator.platform.toLowerCase().includes('mac'));
    
        // Listen for command palette opened event
        const handlePaletteOpened = () => setShowArrow(false);
        window.addEventListener('command-palette-opened', handlePaletteOpened);
        return () => window.removeEventListener('command-palette-opened', handlePaletteOpened);
      }, []);

      const openCommandPalette = () => {
        setShowArrow(false);
        window.dispatchEvent(new CustomEvent('open-command-palette'));
      };
    

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

                {/* Command Palette Toggle*/}
                {!isMobileDevice && (
                    <div className="relative">
                        {showArrow && <CurvedArrow className="hidden lg:block absolute -top-14 -right-14" />}
                        <button
                        onClick={openCommandPalette}
                        className="hidden sm:flex items-center cursor-pointer gap-1 text-xs text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-800 px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 transition-colors duration-200"
                        >
                        <span className={`flex items-center ${isModifierPressed ? 'opacity-0' : 'opacity-100'}`}>
                            <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 font-mono">
                            {isMac ? '⌘' : 'ctrl'}
                            </kbd>
                            <span>+</span>
                        </span>
                        <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 font-mono">
                            K
                        </kbd>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}