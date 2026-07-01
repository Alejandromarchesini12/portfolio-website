// Scroll-reveal wrapper: fades + rises its children into view once they enter
// the viewport. Drives the animation with inline styles (no dependency on a
// global stylesheet), reveals via IntersectionObserver, respects
// prefers-reduced-motion, and keeps the `reveal` class so the <noscript>
// override in layout.tsx can show content when JS is unavailable.
"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    /** Optional stagger delay in milliseconds (e.g. for a grid of cards). */
    delayMs?: number;
};

export default function Reveal({ children, className, delayMs }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        // Reduced motion: show immediately, no animation.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setAnimate(false);
            setVisible(true);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // reveal once, then stop observing
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const style: React.CSSProperties = {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(1.5rem)",
        transition: animate
            ? "opacity 0.6s ease-out, transform 0.6s ease-out"
            : "none",
        transitionDelay: animate && delayMs ? `${delayMs}ms` : undefined,
        willChange: "opacity, transform",
    };

    return (
        <div
            ref={ref}
            className={`reveal${className ? ` ${className}` : ""}`}
            style={style}
        >
            {children}
        </div>
    );
}
