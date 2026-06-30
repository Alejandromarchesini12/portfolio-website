// This is file will contain the navigation bar the top of the portfolio
"use client";

import { useState } from "react";

const links = [
    { label: "About", href:"#about"}, 
    { label: "Projects", href:"#projects"}, 
    { label: "Skills", href:"#skills"}, 
    { label: "Experience", href:"#experience"}, 
    { label: "Contact", href:"#contact"}, 
]

export default function Nav() {
    // Tracks whether the mobile dropdown menu is open. Starts closed.
    const [open, setOpen] = useState(false); 

    return (
        /* Look for the nav bar here */
        <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                {/* Logo / initials, links back to the top of the page */}
                <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
                    AM
                </a>
            {/* Loop to display all the options for the navigation bar */}
            <div className="hidden items-center gap-6 sm:flex">
                {links.map((link) => (
                    <a 
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted transition hover:text-foreground"
                    >
                        {link.label}
                    </a>
                ))}
             {/* Always-visible resume button (currently points to the SE resume) */}
            <a 
                href="/Alejandro-Marchesini-Resume-SE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
                Resume
            </a>
            </div>

            {/* HAMBURGER button: shown only on phones (sm:hidden). Flips the menu open/closed. The icon swaps between an X and bars. */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-foreground sm:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                {open ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>
            </nav>
            {/* MOBILE dropdown: only rendered when open is true, only visible on phones. Tapping any link closes the menu via setOpen(false). */}
            { open && (
                <div className="border-t border-foreground/10 sm:hidden">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {links.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-2 text-sm text-muted transition hover:text-foreground">
                                    {link.label}
                                </a>
                        ))}
                        {/* Adding the Resume options for the viewers - Data Science*/}
                        <a  
                            href="/Alejandro-Marchesini-Resume-SE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-2 rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90">
                                Resume
                            </a>
                    </div> 
                </div>
            )}
        </header>
    )
}