// this file is for the my skills section for the portfolio
import Reveal from "./Reveal";

const skillGroups = [
    {
        name: "Programming Languages",
        items: ["Python", "JavaScript", "TypeScript", "SQL","C++",  "HTML", "LaTeX"],
    },
    {
        name: "Frontend",
        items: ["React", "React Native", "Tailwind CSS", "shadcn/ui", "Figma"],
    },
    {
        name: "Backend & Data",
        items: ["Supabase", "PostgreSQL", "REST APIs", "pandas", "NumPy", "Vercel"],
    },
    {
        name: "Machine Learning",
        items: ["scikit-learn", "XGBoost", "Matplotlib", "Tableau", "Monte Carlo", "Feature Engineering"],
    },
    {
        name: "Tools",
        items: ["Git & GitHub", "Vite", "Expo", "Jupyter", "VS Code", "Overleaf"],
    },
    {
        name: "Soft Skills",
        items: ["Team Leadership", "Agile & Scrum", "Communication", "Time Management & Prioritization", "Adaptability", "Mentoring & Coaching"],
    },
    {
        name: "Languages",
        items: ["English — Fluent", "Spanish — Fluent"],
    },
];

export default function Skills() {
    return(
        <section id="skills" className="mx-auto max-w-4xl px-6 py-12 text-center 2xl:py-20">
            <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
                Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Tools I work with
            </h2>

            {/* Centered skill groups in two columns to use the horizontal space */}
            <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {skillGroups.map((group, index) => {
                    // If there's an odd number of groups, let the last one span
                    // both columns so it's centered instead of orphaned.
                    const spanFull =
                        index === skillGroups.length - 1 &&
                        skillGroups.length % 2 === 1;
                    return (
                    <div key={group.name} className={spanFull ? "sm:col-span-2" : undefined}>
                        <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
                            {group.name}
                        </h3>
                        <ul className="mt-3 flex flex-wrap justify-center gap-2">
                            {group.items.map((item) => (
                                <li
                                key={item}
                                className="rounded-full border border-transparent bg-foreground/5 px-3 py-1.5 text-sm transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-foreground"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    );
                })}
            </div>
            </Reveal>
        </section>
    );
}