// this file is for the about section of the portfolio website
export default function About() {
    return(
        <section id="about" className="mx-auto max-w-3xl px-6 py-24">
            <p className="font-mon text-md uppercase tracking-widest text-accent">
                About
            </p>
            <h2 className="mt-2 text-md font-bold tracking-tight sm:text-4xl">
                A bit about me
            </h2>

            {/* Main paragraph about myself*/}
            <div className="mt-8 space-y-4 text-lg leading-relaxed">
                <p>
                    I'm a Computer Science graduate from Biola University (B.S. in Data
                    Science and Information Systems, 3.97 GPA). I work across the stack —
                    building machine learning pipelines and data analyses on one side, and
                    full-stack web and mobile apps on the other.
                </p>
                <p>
                    I'm also an NCAA Division II swimmer, which is where I picked up the
                    habits I bring to engineering: show up, do the reps, and sweat the
                    details. I care about writing clean, accessible code and turning messy
                    data into things people can actually use.
                </p>    
            </div>

            <ul className="mt-8 flex flex-wrap gap-3 font-mono text-sm text-muted">
                <li className="rounded-md border border-foreground/15 px-3 py-1.5">3.97 GPA</li>
                <li className="rounded-md border border-foreground/15 px-3 py-1.5">Elite 18 Award</li>
                <li className="rounded-md border border-foreground/15 px-3 py-1.5">NCAA DII Swimming</li>
                <li className="rounded-md border border-foreground/15 px-3 py-1.5">President's Scholarship</li>
            </ul>
        </section>
    );
}