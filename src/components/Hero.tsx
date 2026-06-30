// This Component is to Show the Hero section of the webiste with: name, title, resume (download or view), GitHub and LinkedIn links
"use client";

import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { tracks } from "@/data/tracks";
import { useTrack } from "./TrackProvider";

export default function Hero() {
    const { track, setTrack } = useTrack();
    const current = tracks[track];

    return (
        <section id="home" className="relative overflow-hidden">
            {/* Gradient fallback background. Swap for a real image later by adding an <img>/bg here. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(157,85,96,0.16),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(157,85,96,0.06),transparent_50%)]"
            />
            {/* Subtle scrim so text stays readable over any future image */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/0 to-background"
            />

            <div className="mx-auto max-w-3xl px-6 py-32 text-center">
                <div className="inline-flex rounded-full border border-foreground/15 p-1 font-mono text-sm">
                    <button
                    onClick={() => setTrack("se")}
                    className={`rounded-full px-4 py-1.5 transition ${
                        track === "se"
                        ? "bg-accent text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                    >
                    Software
                    </button>
                    <button
                    onClick={() => setTrack("ds")}
                    className={`rounded-full px-4 py-1.5 transition ${
                        track === "ds"
                        ? "bg-accent text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                    >
                    Data
                    </button>
                </div>
                <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                    Alejandro Marchesini
                </h1>
                <p className="mt-3 font-mono text-sm uppercase tracking-widest text-accent">
                    {current.label}
                </p>
                <p className="mt-6 mx-auto max-w-xl text-lg text-muted">
                    {current.tagline}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a href={current.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        View Resume
                    </a>

                    <a href="https://github.com/Alejandromarchesini12"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <GithubIcon className="h-5 w-5" />
                    </a>

                    <a href="https://www.linkedin.com/in/alejandro-marchesini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
