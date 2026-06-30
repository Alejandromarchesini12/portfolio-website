// Simple footer to close out the page.

export default function Footer() {
    return (
    <footer className="border-t border-foreground/10 px-6 py-8 text-center">
        <p className="font-mono text-xs text-muted">
        Built with Next.js, TypeScript & Tailwind CSS · Deployed on Vercel
        </p>
        <p className="mt-2 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Alejandro Marchesini
        </p>
    </footer>
    );
}