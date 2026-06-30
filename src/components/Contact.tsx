// Contact section: direct links instead of a form — nothing to break,
// and recruiters can reach out in one click.

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
    return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's talk
        </h2>
        <p className="mt-6 mx-auto max-w-xl text-lg text-muted">
            I'm open to software engineering and data science roles, and happy to chat about either. The fastest way to reach me is by email.
        </p>

        {/* Primary action: email. mailto: opens the visitor's email app. */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
            href="mailto:alejandro.marchesini12@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
        </a>
        <a
            href="https://www.linkedin.com/in/alejandro-marchesini/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            <LinkedinIcon className="h-5 w-5" />
        </a>
        <a
            href="https://github.com/Alejandromarchesini12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            <GithubIcon className="h-5 w-5" />
        </a>
        </div>

        {/* A plain-text email too, so it's copyable even without an email app set up */}
        <p className="mt-6 font-mono text-sm text-muted">
        alejandro.marchesini12@gmail.com
        </p>
    </section>
    );
}