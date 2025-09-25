import "./App.css";
import "tailwindcss";
import { useState } from "react";
import SideBar from "./components/SideBar";
import SongList from "./components/SongList";
import SelectedSongWindow from "./components/SelectedSongWindow";

type SelectedSong = {
  title: string;
  artist: string;
  album: string;
  duration?: string;
  cover: string;
};

function App() {
  const [selected, setSelected] = useState<SelectedSong | null>(null);

  return (
    <>
      <body className="flex flex-col bg-[#121415]">
        <div className="text-2xl">
          <h1 className="pt-1 text-[#FFF6DF]">TUNESDAY</h1>
          <SideBar />
        </div>
        <SongList
          onSelect={(s) =>
            setSelected({
              title: s.title,
              artist: s.artist,
              album: s.album,
              duration: s.duration,
              cover: s.cover,
            })
          }
        />
        <SongList
          onSelect={(s) =>
            setSelected({
              title: s.title,
              artist: s.artist,
              album: s.album,
              duration: s.duration,
              cover: s.cover,
            })
          }
        />
        <SongList
          onSelect={(s) =>
            setSelected({
              title: s.title,
              artist: s.artist,
              album: s.album,
              duration: s.duration,
              cover: s.cover,
            })
          }
        />
      </body>

      <SelectedSongWindow song={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export default App;
