//this file is to display the experience section of the portfolio website
import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import Reveal from "./Reveal";

type Job = {
    role: string;
    org: string;
    location: string;
    period: string;
    points: string[];
    url?: string; // company website (optional) — turns the company name into a link
    logo?: string; // e.g. "/logos/company-name.png" (optional) — shows the default mark when left out
};

const experience: Job[] = [
    {
        role: "Tier 1 IT Support Technician",
        org: "Creative Resources Technology Group",
        location: "Tustin, CA",
        logo: "/logos/crtechgroup_logo.jpg",
        period: "Sep 2026 – Present",
        url: "https://creativeresources.net",
        points: [
        "I work client tickets end to end for Mac-first businesses — VPN drops, email and account issues, printers, machines running slow — diagnosing each one remotely and getting people back to work.",
        "I also onboard new users and set up replacement computers so they're managed, monitored, and ready on day one. It's hands-on debugging with a real person on the other end, and it's made me much better at explaining fixes clearly.",
        ],
    },
    {
        role: "Student Intern",
        org: "Creative Resources Technology Group",
        location: "Tustin, CA",
        logo: "/logos/crtechgroup_logo.jpg",
        period: "Aug 2026 – Sep 2026",
        url: "https://creativeresources.net",
        points: [
        "I joined CRTG right after graduating and trained on the tools an IT team uses to support client businesses: ticketing, remote monitoring, documentation, and Apple device management.",
        "I learned the troubleshooting workflow by working tickets alongside senior technicians, and was promoted to Tier 1 after five weeks.",
        ],
    },
    {
        role: "Data Scientist",
        org: "Crowell+ Digital Marketing Group",
        location: "La Mirada, CA",
        logo: "/logos/crowell_plus_logo.jpg",
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
        logo: "/logos/biola_university_2.jpg",
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
        logo: "/logos/biola_university_2.jpg",
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
                        {/* Company logo (or the default mark if none was added) beside the job header */}
                        <div className="flex items-center gap-4">
                            {job.logo ? (
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-foreground/10 bg-white">
                                    <Image src={job.logo} alt="" fill sizes="64px" className="object-contain p-1.5" />
                                </div>
                            ) : (
                                <div
                                aria-hidden="true"
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-linear-to-br from-accent/25 to-accent/5 text-accent"
                                >
                                    <BriefcaseBusiness className="h-5 w-5" />
                                </div>
                            )}
                            <div>
                                <p className="font-mono text-sm uppercase tracking-widest text-accent">
                                    {job.period}
                                </p>
                                <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
                                <p className="text-base text-muted">
                                    {job.url ? (
                                        <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-sm underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                        >
                                            {job.org}
                                        </a>
                                    ) : job.org} · {job.location}
                                </p>
                            </div>
                        </div>
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