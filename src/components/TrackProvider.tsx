// Shares the selected "track" (Software vs Data) across the app.
// The Hero toggle sets it; the Nav Resume button reads it so it always
// points at the resume matching whichever track the visitor selected.
"use client";

import { createContext, useContext, useState } from "react";
import type { Track } from "@/data/tracks";

type TrackContextValue = {
    track: Track;
    setTrack: (track: Track) => void;
};

const TrackContext = createContext<TrackContextValue | null>(null);

export function TrackProvider({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Track>("se");
    return (
        <TrackContext.Provider value={{ track, setTrack }}>
            {children}
        </TrackContext.Provider>
    );
}

export function useTrack() {
    const ctx = useContext(TrackContext);
    if (!ctx) {
        throw new Error("useTrack must be used within a TrackProvider");
    }
    return ctx;
}
