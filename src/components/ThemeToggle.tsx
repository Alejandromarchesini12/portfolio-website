// Floating light/dark theme toggle (bottom-right). Toggles the `.dark` class on
// <html> (which flips the design tokens) and remembers the choice in localStorage.
// A no-flash inline script in layout.tsx applies the saved theme before paint.
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Sync state with whatever the pre-paint script already applied.
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
            localStorage.setItem("theme", next);
        } catch {
            // localStorage may be unavailable (private mode); ignore.
        }
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground shadow-md backdrop-blur transition hover:border-foreground/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
            )}
        </button>
    );
}
