// This Component is to Show the Hero section of the webiste with: name, title, resume (download or view), GitHub and LinkedIn links
"use client";

import { useState } from "react";

const tracks = {
    se: {
        label: "Software Engineer",
        tagline: "I build full-stack web and mobile apps with React, TypeScript, and a focus on clean, accessible UI.",
        resume: "/Alejandro-Marchesini-Resume-SE.pdf",
    }, 
    ds: {
        label: "Data Scientist / Data Analyst",
        tagline: "I turn data into decisions | ML pipelines, feature engineering, and analysis teams can act on.",
        resume: "/Alejandro-Marchesini-Resume-DS.pdf",
    }, 
}; 

export default function Hero() {
    const [track, setTrack] = useState<"se" | "ds">("se");
    const current = tracks[track];

    return (
        <section id="home" className="mx-auto max-w-3xl px-6 py-32 text-center">
            <div className="inline-flex rounded-lg border border-foreground/15 p-1 font-mono text-sm">
                <button
                onClick={() => setTrack("se")}
                className={`rounded-md px-4 py-1.5 transition ${
                    track === "se"
                    ? "bg-accent text-white"
                    : "text-muted hover:text-foreground"
                }`}
                >
                Software
                </button>
                <button
                onClick={() => setTrack("ds")}
                className={`rounded-md px-4 py-1.5 transition ${
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
                {/* Add a button to make download of the resume more evident */}
                <a href={current.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition hover:opacity-90">
                    View Resume
                </a>
                {/* Try here to add the github and linkedIn icons to smaller button*/}
                <a href="https://github.com/Alejandromarchesini12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-foreground/15 px-5 py-2.5 font-medium transition hover:border-foreground/40">
                    GitHub
                </a>
                
                <a href="https://www.linkedin.com/in/alejandro-marchesini/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-foreground/15 px-5 py-2.5 font-medium transition hover:border-foreground/40">
                    LinkedIn
                </a> 
            </div>
        </section>
    );
}