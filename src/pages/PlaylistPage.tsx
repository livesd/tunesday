import { useState } from "react";
import { songs } from "@/data/songs";
import PlayButton from "@/components/PlayButton";
import ShuffleButton from "@/components/ShuffleButton";
import SelectedSongWindow from "@/components/SelectedSongWindow";
import karpe from "@/assets/karpe.jpg";
import SideBar from "@/components/SideBar";

export default function PlaylistPage() {
  const playlistName = "RANDOM SONGS";
  const [shuffleOn, setShuffleOn] = useState(false);

  return (
    <div className="min-h-screen bg-[#121415] text-[#FFF6DF]">
      <SideBar />
      <div className="max-w-6xl mr-6 py-8 col-start-2">
        {/* Header */}
        <div className="flex items-end gap-6">
          <img
            src={karpe}
            alt=""
            className="h-80 w-80 rounded-lg object-cover bg-[#242424]"
          />
          <h1 className="leading-none font-extrabold tracking-wide text-[150px]">
            {playlistName}
          </h1>
        </div>

        <div className="mt-6 flex items-end gap-5">
          <PlayButton ariaLabel="Play playlist" />
          <ShuffleButton
            active={shuffleOn}
            onClick={() => setShuffleOn((v) => !v)}
            ariaLabel="Shuffle"
          />
        </div>
        <SelectedSongWindow>
          {(onSelect) => (
            <ul className="mt-2">
              {songs.map((song) => (
                <li key={song.id}>
                  <button
                    type="button"
                    onClick={() =>
                      onSelect({
                        title: song.title,
                        artist: song.artist,
                        album: song.album,
                        duration: song.duration,
                        cover: song.cover,
                      })
                    }
                    className="grid w-full grid-cols-[minmax(12rem,1fr)_minmax(10rem,1fr)_6rem] items-center gap-4 py-3 text-left hover:bg-white/5 rounded-md transition"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={song.cover}
                        alt=""
                        className="h-10 w-10 rounded-md object-cover bg-[#242424]"
                      />
                      <span className="font-semibold text-[#FFF6DF]">
                        {song.title}
                      </span>
                    </div>
                    <div className="text-[#FFF6DF]">{song.album}</div>
                    <div className="text-right text-[#FFF6DF]">
                      {song.duration}
                    </div>
                  </button>
                  <div className="h-px w-full bg-[#FC517C]" />
                </li>
              ))}
            </ul>
          )}
        </SelectedSongWindow>
      </div>
    </div>
  );
}
