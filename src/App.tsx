import { useState } from "react";
import "./App.css";
import "tailwindcss";
import SongList from "./components/SongList";
import SelectedSongWindow from "./components/SelectedSongWindow";
import FilterButton from "./components/FilterButton";
import { songs } from "./data/songs";

type FilterType = "genre" | "artist";

function App() {
  const [filterType, setFilterType] = useState<FilterType>("genre");

  // Group songs by the selected filter type
  const groupedSongs = songs.reduce((acc, song) => {
    const key = filterType === "genre" ? song.genre : song.artist;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(song);
    return acc;
  }, {} as Record<string, typeof songs>);

  const toggleFilter = () => {
    setFilterType((prev) => (prev === "genre" ? "artist" : "genre"));
  };

  return (
    <div className="flex flex-col bg-[#121415]">
      <div className="flex flex-col bg-[#121415] w-full">
        <div className="w-full text-2xl">
          <h1 className="pt-3 text-[#FFF6DF] text-center font-bold leading-none">
            TUNESDAY
          </h1>

          {/* Filter Button */}
          <div className="flex justify-center mt-4">
            <FilterButton
              onToggle={toggleFilter}
              nextFilter={filterType === "genre" ? "Artist" : "Genre"}
            />
          </div>
        </div>

        <div className="w-full flex justify-start">
          <SelectedSongWindow>
            {(onSelect) => (
              <div className="flex flex-col items-start w-full text-left justify-start ml-0 pl-0">
                {Object.entries(groupedSongs).map(
                  ([category, categorySongs]) => (
                    <SongList
                      key={category}
                      songs={categorySongs}
                      category={category}
                      onSelect={onSelect}
                    />
                  )
                )}
              </div>
            )}
          </SelectedSongWindow>
        </div>
      </div>
    </div>
  );
}

export default App;
