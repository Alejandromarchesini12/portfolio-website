// this file is for the my skills section for the portfolio
const skillGroups = [
    {
        name: "Languages",
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
];

export default function Skills() {
    return(
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
            <p className="font-mon text-md uppercase tracking-widest text-accent">
                Skills
            </p>
            <h2 className="mt-2 text-md font-bold tracking-tight sm:text-4xl">
                Tools I work with
            </h2>

            {/* Creating the grid where the skills are going to be displayed */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <div key={group.name}>
                        <h3 className="font-mono text-sm uppercase tracking-widest text-muted">
                            {group.name}
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                key={item}
                                className="rounded-md bg-foreground/5 px-3 py-1.5 text-sm"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}