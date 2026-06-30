// this file is for the about section of the portfolio website
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-4xl px-6 py-12 2xl:py-20">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
                About
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                A bit about me
            </h2>

            {/* Two-column: portrait photo + intro copy */}
            <div className="mt-10 grid gap-8 sm:grid-cols-5 sm:items-center">
                {/* Portrait — drop your photo at public/portrait.jpg */}
                <div className="sm:col-span-2">
                    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-foreground/10 shadow-sm sm:max-w-none">
                        <Image
                            src="/portrait-v2.jpg"
                            alt="Portrait of Alejandro Marchesini"
                            fill
                            sizes="(max-width: 640px) 20rem, 40vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Main paragraphs about myself */}
                <div className="space-y-4 text-lg leading-relaxed sm:col-span-3">
                    <p>
                        I&apos;m a Computer Science graduate from Biola University (B.S.,
                        Data Science &amp; Information Systems, 3.97 GPA). I work across the
                        stack — building ML pipelines and data analyses on one side,
                        full-stack web and mobile apps on the other.
                    </p>
                    <p>
                        I&apos;m also an NCAA Division II swimmer, and that&apos;s where my
                        engineering habits come from: show up, do the reps, sweat the
                        details. I care about clean, accessible code and turning messy data
                        into things people can actually use.
                    </p>
                </div>
            </div>

            {/* Highlights / stat row */}
            <ul className="mt-10 flex flex-wrap justify-center gap-3 font-mono text-sm text-muted">
                <li className="rounded-full border border-foreground/15 px-4 py-1.5 transition-colors hover:border-accent/40 hover:text-foreground">
                    3.97 GPA
                </li>
                <li className="rounded-full border border-foreground/15 px-4 py-1.5 transition-colors hover:border-accent/40 hover:text-foreground">
                    Bilingual · EN/ES
                </li>
                <li className="rounded-full border border-foreground/15 px-4 py-1.5 transition-colors hover:border-accent/40 hover:text-foreground">
                    Elite 18 Award
                </li>
                <li className="rounded-full border border-foreground/15 px-4 py-1.5 transition-colors hover:border-accent/40 hover:text-foreground">
                    NCAA DII Swimming
                </li>
                <li className="rounded-full border border-foreground/15 px-4 py-1.5 transition-colors hover:border-accent/40 hover:text-foreground">
                    President&apos;s Scholarship
                </li>
            </ul>
        </section>
    );
}
