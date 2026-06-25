//this file is to display the experience section of the portfolio website
const experience = [
    {
        role: "Data Scientist",
        org: "Crowell+ Digital Marketing Group",
        location: "La Mirada, CA",
        period: "Sep 2025 – May 2026",
        points: [
        "Built a YouTube analytics pipeline with Google APIs and BigQuery; diagnosed credential blockers and pivoted to a reliable manual extraction workflow.",
        "Analyzed multi-year video performance and audience data, then delivered a strategic playbook with 7+ data-driven growth hypotheses.",
        ],
    },
    {
        role: "Math & Computer Science Intern",
        org: "Biola University",
        location: "La Mirada, CA",
        period: "Jun 2025 – Aug 2025",
        points: [
        "Prototyped LaTeX, MathJAX, and Overleaf tooling for mathematical content under the Endowed Chair of Computer Science.",
        "Led weekly scrum-style updates and built 6+ LaTeX documents over 45 hours, gaining strong proficiency from scratch.",
        ],
    },
    {
        role: "Swim Instructor",
        org: "Private & Group Lessons",
        location: "La Mirada, CA",
        period: "Jan 2024 – May 2026",
        points: [
        "Designed individualized lessons for 15+ students across age groups, improving technique and confidence.",
        "Maintained a zero-incident safety record across 150+ hours of instruction.",
        ],
    },
    ];

export default function Experience() {
    return(
        <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
            <p className="font-mon text-md uppercase tracking-widest text-accent">
                Experience
            </p>
            <h2 className="mt-2 text-md font-bold tracking-tight sm:text-4xl">
                Where I've worked
            </h2>

            {/* Creating the grid where the experience is going to be displayed */}
            <div className="mt-10 space-y-10">
                {experience.map((job) => (
                    <div 
                    key={job.role + job.org}
                    className="border-1-2 border-foreground/10 pl-6"
                    >
                        <p className="font-mono text-sx uppercase tracking-widest text-muted">
                            {job.period}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold"> {job.role}</h3>
                        <p className="text-muted">{job.org} · {job.location}</p>
                        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted">
                            {job.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}