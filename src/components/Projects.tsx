// this component is used to display the list of projects in the portfolio section of the website
"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { useState } from "react";

const filters = ["All", "Web", "Data & ML", "Mobile", "Systems"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const visibleProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
            <p className="font-mon text-md uppercase tracking-widest text-accent">
                Projects
            </p>
            <h2 className="mt-2 text-md font-bold tracking-tight sm:text-4xl">
                Things I've built
            </h2>
            {/* Creating the filter buttons */}
            <div className="mt-8 flex flex-wrap gap-2 font-mon text-sm">
                {filters.map((filter) => (
                    < button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-md px-3 py-1.5 transition ${
                        activeFilter === filter
                        ? "bg-accent text-white"
                        : "border border-foreground/15 text-muted hover:text-foreground"
                    }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            {/* Creating the grid where the projects are going to be displayed */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {visibleProjects.map((project) => (
                    <article
                    key={project.title}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.02] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
                    >
                        {project.demo && (
                            <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute right-3 top-3 z-10 rounded-md border border-foreground/15 bg-background/80 px-3 py-1.5 font-mono text-xs backdrop-blur transition hover:border-accent hover:bg-accent hover:text-white"
                            >
                                Demo →
                            </a>
                        )}
                        {/* Displaying the project image or category if no image is provided */}
                        <div className="relative aspect-video overflow-hidden bg-foreground/5">
                            {project.image ? (
                                <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-with: 640px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover: scale-105"
                            />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                                        {project.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Displaying the project title */}
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-lg font-semibold transition group-hover:text-accent">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                                    {project.title}
                                </a>
                            </h3>

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
                            <div className="mt-5 font-mono text-sm">
                                <span className="text-muted transition group-hover:text-accent">
                                    View code →
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}