"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-10 w-10" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                border
                border-blue-500/10

                bg-slate-900/50
                backdrop-blur-md

                transition-all
                duration-300

                hover:border-blue-500/40
                hover:bg-blue-950/20
                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
            "
        >
            {isDark ? (
                <Sun
                    className="
                        h-5
                        w-5
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:text-blue-400
                        group-hover:rotate-12
                    "
                />
            ) : (
                <Moon
                    className="
                        h-5
                        w-5
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:text-blue-400
                        group-hover:-rotate-12
                    "
                />
            )}
        </button>
    );
}