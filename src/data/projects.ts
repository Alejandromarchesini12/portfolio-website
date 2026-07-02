// this file is to store the data of the projects that will be displayed on the portfolio page

export type Project = {
    title: string;
    category: "Web" | "Data & ML" | "Mobile" | "Systems"; // CHANGE CATEGORIES HERE WHEN ADDING PROJECTS
    description: string; 
    tech: string[]; 
    github: string;
    demo?: string; // STRING because it can be a link to a video, webssite, etc.
    image?: string; // e.g. "/projects/project-name.png" (optional)
    imageFit?: "cover" | "contain"; // "cover" (default) for ~16:9 shots; "contain" for tall/phone screenshots so they aren't cropped
};

// ------------- ADD HERE ALL THE PROJECTS DATA INTO VARIABLES ---------------
export const projects: Project[] = [
    {
        title: "FIFA 2026 World Cup ML Simulator", 
        category: "Data & ML",
        description: "End-to-end ML pipeline on ~47,000 historical matches. Engineered 7 features across 3 classifiers, reaching 59.18% accuracy with XGBoost, then ran 10,000 Monte Carlo bracket simulations.",
        tech: ["Python", "XGBoost", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
        github: "https://github.com/Alejandromarchesini12/fifa-worldcup-ml-simulation",
        image: "/fifa-world-cup-ml.png",
    }, 
    {
        title: "Class Registration Web App", 
        category: "Web",
        description: "UI lead on a 4-person Agile team. Built 30+ reusable components with real-time validation for conflicts, prerequisites, and seat availability on a live Supabase backend.",
        tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
        github: "https://github.com/Alexis-Vallin/Biola-Class-Navigation-Web-App",
        demo: "https://youtu.be/vD59J4xB0Ek", 
        image: "/class-registration-web-app.png",
    }, 
    {
        title: "FaithFinance", 
        category: "Mobile",
        description: "Mobile budget tracker with 9 screens and 35+ components for tracking income, spending, and charitable giving. Full CRUD persistence across transaction types and categories.",
        tech: ["React Native", "TypeScript", "Expo"],
        github: "https://github.com/Faith-Finance-App/FaithFinance",
        demo: "https://youtu.be/Q_MUt7LMhfg",
        image: "/faith-finance.png",
        imageFit: "contain",
    }, 
    {
        title: "Olympic Swimming Analysis",
        category: "Data & ML",
        description: "Interactive Tableau dashboard covering 50+ years of Olympic swimming data. Built a custom \u201C% Behind World Record\u201D metric to compare performance across strokes, distances, and eras.",
        tech: ["Tableau", "Excel"],
        github: "https://github.com/Alejandromarchesini12/olympic-swim-analysis",
        demo: "https://public.tableau.com/app/profile/alejandro.marchesini/viz/TableauProject-SwimmingperformanceOLY-WR/OlympicSwimmingPerformanceAnalysisof100mEvents19722024",
        image: "/olympic-swim-analysis.png", // ~16:9 screenshot — drop file here, then uncomment
    }, 
    {
        title: "Thread Scheduling Simulator", 
        category: "Systems",
        description: "Python tool for visualizing and comparing CPU scheduling algorithms, illustrating how different strategies affect process timing and throughput.",
        tech: ["Python", "Linux"],
        github: "https://github.com/matt-bowlby/thread_scheduling_simulator",
        image: "/thread-scheduling.png", // ~16:9 screenshot — drop file here, then uncomment
    }, 
    {
        title: "The Culebrita (Snake) Game", 
        category: "Systems",
        description: "Classic snake game for Windows in C++ with custom graphics \u2014 navigate, grow, and chase a high score.",
        tech: ["C++"],
        github: "https://github.com/Alejandromarchesini12/the-culebrita-game",
        image: "/culebrita-game.png",
    }
]
