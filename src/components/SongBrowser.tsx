// ...existing code...
import { useState } from "react";
import { useSongGrouping, type FilterType } from "@/hooks/useSongGrouping";
import SongList from "@/components/SongList";
import FilterButton from "@/components/FilterButton";
import { songs } from "@/data/songs";

type Song = (typeof songs)[number];

interface SongBrowserProps {
  onSelect?: (song: Song) => void;
  className?: string;
}

{/* render song groups by either genre or artist with the filter button to switch*/}
export default function SongBrowser({ onSelect, className = "" }: SongBrowserProps) {
  const [filterType, setFilterType] = useState<FilterType>("genre");
  function toggleFilter() {
    setFilterType(p => (p === "genre" ? "artist" : "genre"));
  }

  const groupedSongs = useSongGrouping(filterType);

  return (
    <div className={["flex flex-col items-start w-full text-left", className].join(" ")}>
      <div className="self-end mb-4">
        <FilterButton
          onToggle={toggleFilter}
          nextFilter={filterType === "genre" ? "Artist" : "Genre"} //label showing what the next mode will be
          currentFilter={filterType}
        />
      </div>

      {/* Render one SongList per grouping bucket */}
      {Object.entries(groupedSongs).map(([category, categorySongs]) => (
        <SongList
          key={category}
          songs={categorySongs}
          category={category}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
