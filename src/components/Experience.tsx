//this file is to display the experience section of the portfolio website
import Reveal from "./Reveal";

const experience = [
    {
        role: "Data Scientist",
        org: "Crowell+ Digital Marketing Group",
        location: "La Mirada, CA",
        period: "Sep 2025 – May 2026",
        points: [
        "I set out to automate a YouTube analytics pipeline with Google's APIs and BigQuery — and when credential issues blocked that path, I found a manual workflow that got us the same data reliably.",
        "From there I dug into years of video and audience data and turned what I found into a playbook of growth ideas the marketing team could actually act on.",
        ],
    },
    {
        role: "Math & Computer Science Intern",
        org: "Biola University",
        location: "La Mirada, CA",
        period: "Jun 2025 – Aug 2025",
        points: [
        "I worked directly with the Endowed Chair of Computer Science, prototyping better ways to present math content with LaTeX, MathJax, and Overleaf.",
        "I'd never touched LaTeX before this — by the end I was building full documents from scratch and walking my professor through them in weekly check-ins.",
        ],
    },
    {
        role: "Swim Instructor",
        org: "Private & Group Lessons",
        location: "La Mirada, CA",
        period: "Jan 2024 – May 2026",
        points: [
        "I've taught swimming to everyone from nervous kids to adults, building each student a plan that fits how they learn.",
        "It's also where I learned to explain hard things simply — a skill I use constantly when talking through technical work.",
        ],
    },
    ];

export default function Experience() {
    return(
        <section id="experience" className="mx-auto max-w-3xl px-6 py-12 2xl:py-20">
            <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
                Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Where I've worked
            </h2>

            {/* Creating the grid where the experience is going to be displayed */}
            <div className="mt-10 space-y-10">
                {experience.map((job) => (
                    <div
                    key={job.role + job.org}
                    className="relative border-l-2 border-accent/30 pl-6"
                    >
                        {/* Dusty-rose node dot sitting on the timeline line */}
                        <span
                            aria-hidden="true"
                            className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent ring-2 ring-background"
                        />
                        <p className="font-mono text-sm uppercase tracking-widest text-accent">
                            {job.period}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
                        <p className="text-base text-muted">{job.org} · {job.location}</p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-base text-muted">
                            {job.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            </Reveal>
        </section>
    );
}