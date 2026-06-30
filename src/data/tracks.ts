// Shared "track" definitions for the Software vs Data toggle.
// Lives here (not inside Hero) so both Hero and Nav can read the same
// labels, taglines, and resume paths from a single source of truth.

export type Track = "se" | "ds";

export const tracks: Record<
    Track,
    { label: string; tagline: string; resume: string }
> = {
    se: {
        label: "Software Engineer",
        tagline:
            "I build full-stack web and mobile apps with React, TypeScript, and a focus on clean, accessible UI.",
        resume: "/Alejandro-Marchesini-Resume-SE.pdf",
    },
    ds: {
        label: "Data Scientist / Data Analyst",
        tagline:
            "I turn data into decisions | ML pipelines, feature engineering, and analysis teams can act on.",
        resume: "/Alejandro-Marchesini-Resume-DS.pdf",
    },
};
