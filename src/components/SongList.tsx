import { songs } from "@/data/songs";

type Song = (typeof songs)[number];

type Props = {
  onSelect?: (song: Song) => void;
};

export default function SongList({ onSelect }: Props) {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-1 mb-2">
        <h3 className="text-[#FFF6DF] flex text-lg">KATEGORI</h3>
        <div className="border-t border-[#FC517C] w[-150px]" />
      </div>
      <div className="mt-4 overflow-auto scrollbar-hide">
        <div className="flex gap-2 px-2">
          {/*Mapping each song in the list to show title, artist and cover*/}
          {songs.map((song) => (
            <button
              key={song.id}
              type="button"
              onClick={() => onSelect?.(song)}
              className="flex flex-col items-center rounded-xl transition-transform duration-300 cursor-pointer"
            >
              <img
                src={song.cover}
                alt={song.title}
                className="w-36 h-36 object-cover rounded-lg"
              />
              <span className="text-[#FFF6DF] text-center text-lg font-semibold truncate w-48 font-family-['Arial'] mt-3">
                {song.title}
              </span>
              <span className="text-[#767676] text-center truncate w-48">
                {song.artist}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
