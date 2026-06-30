// Client-side email actions: a prominent click-to-copy address, a "Copy email"
// button with a "Copied!" confirmation, and an "Email me" mailto fallback.
"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

const EMAIL = "alejandro.marchesini12@gmail.com";

export default function CopyEmail() {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API can be unavailable (e.g. insecure context).
            // The visible address and the mailto button still work.
        }
    }

    return (
        <div className="mt-8 flex flex-col items-center gap-6">
            {/* Prominent, click-to-copy address */}
            <button
                type="button"
                onClick={handleCopy}
                title="Click to copy"
                aria-label={`Copy email address ${EMAIL}`}
                className="rounded-sm font-mono text-lg text-foreground underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-xl"
            >
                {EMAIL}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email me
                </a>
                <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 font-medium transition hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                    ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
                </button>
            </div>
        </div>
    );
}
