// This is file will contain the navigation bar the top of the portfolio
"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { tracks } from "@/data/tracks";
import { useTrack } from "./TrackProvider";

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Nav() {
    // Tracks whether the mobile dropdown menu is open. Starts closed.
    const [open, setOpen] = useState(false);
    // Tracks which section is currently in view, for the scroll-spy highlight.
    const [active, setActive] = useState("");
    // Resume button follows whichever track the Hero toggle has selected.
    const { track } = useTrack();
    const resume = tracks[track].resume;

    // Scroll-spy: highlight the nav link for the section crossing mid-viewport.
    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.href.slice(1)))
            .filter((el): el is HTMLElement => el !== null);
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        /* Look for the nav bar here */
        <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                {/* Logo / initials, links back to the top of the page */}
                <a
                    href="#home"
                    aria-label="Alejandro Marchesini — back to top"
                    className="whitespace-nowrap rounded-sm text-sm font-semibold tracking-tight transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    <span className="font-normal text-muted">Alejandro</span> Marchesini
                </a>
                {/* Loop to display all the options for the navigation bar */}
                <div className="hidden items-center gap-7 sm:flex">
                    {links.map((link) => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? "true" : undefined}
                                className={`relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:text-foreground ${
                                    isActive
                                        ? "text-foreground after:scale-x-100"
                                        : "text-muted after:scale-x-0"
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    {/* Always-visible resume button, tied to the Hero's track toggle */}
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        Resume
                    </a>
                </div>

                {/* HAMBURGER button: shown only on phones (sm:hidden). Flips the menu open/closed. */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="rounded-md p-1 text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </nav>
            {/* MOBILE dropdown: only rendered when open is true, only visible on phones. Tapping any link closes the menu via setOpen(false). */}
            {open && (
                <div className="border-t border-foreground/10 sm:hidden">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-2 text-sm text-muted transition hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                        {/* Resume option follows the selected track too */}
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90"
                        >
                            <FileText className="h-4 w-4" aria-hidden="true" />
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
