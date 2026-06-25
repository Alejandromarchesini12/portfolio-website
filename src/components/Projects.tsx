// this component is used to display the list of projects in the portfolio section of the website

import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <p className="font-mon text-sm uppercase tracking-widest text-accent">
                Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Things I've built
            </h2>
            {/* Creating the grid where the projects are going to be displayed */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <article
                    key={project.title}
                    className="flex flex-col rounded-xl border border-foreground/10 p-6 transition hover:border-foreground/25"
                    >
                        {/* Displaying the project title */}
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        {/* Displaying the project description */}
                        <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
                        {/* Displaying the project tech stack */}
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <li 
                                key={tech}
                                className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs text-muted"
                                >
                                    {tech}
                                </li>
                                ))}
                        </ul>
                        {/* Displaying the project links (GitHub and Demo) */}
                        <div className="mt-5 flex gap-4 font-mono text-sm">
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                        >
                            Github →
                        </a>
                        {project.demo && (
                            <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                            >
                                Demo →
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </section>
    );
}