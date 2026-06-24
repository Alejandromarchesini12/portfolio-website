// This Component is to Show the Hero section of the webiste with: name, title, resume (download or view), GitHub and LinkedIn links

export default function Hero() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
                Software Engineer · Data Scientist
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                Alejandro Marchesini
            </h1>
            <p className="mt-6 mx-auto max-w-xl text-lg text-muted">
                I build data-driven software — from machine learning pipelines to full-stack web and mobile apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {/* Add a button to make download of the resume more evident */}
                <a href="/Alejandro-Marchesini-Resume-SE.pdf"
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