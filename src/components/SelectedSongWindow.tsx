import { useState, type ReactNode } from "react";
import SongCard from "./SongCard";

type Song = {
  title: string;
  artist: string;
  album: string;
  duration?: string;
  cover: string;
};

type ManagerProps = {
  children: (onSelect: (song: Song) => void) => ReactNode;
};

function durationToSeconds(d?: string) {
  if (!d) return undefined;
  const parts = d.split(":").map(Number);
  if (parts.length === 2 && parts.every(Number.isFinite)) {
    return parts[0] * 60 + parts[1];
  }
  return undefined;
}

export default function SelectedSongWindow({ children }: ManagerProps) {
  const [selected, setSelected] = useState<Song | null>(null);

  return (
    <>
      {children(setSelected)}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex justify-left bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} by ${selected.artist}`}
          onClick={() => setSelected(null)}
        >
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <SongCard
              title={selected.title}
              artist={selected.artist}
              album={selected.album}
              durationSec={durationToSeconds(selected.duration)}
              coverUrl={selected.cover}
              onClick={() => setSelected(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}