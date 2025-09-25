import SongCard from './SongCard';

type SelectedSong = {
  title: string;
  artist: string;
  album: string;
  duration?: string;
  cover: string;
};

type Props = {
  song: SelectedSong | null;
  onClose: () => void;
};

function durationToSeconds(d?: string) {
  if (!d) return undefined;
  const parts = d.split(':').map(Number);
  if (parts.length === 2 && parts.every(Number.isFinite)) {
    return parts[0] * 60 + parts[1];
  }
  return undefined;
}

export default function SelectedSongWindow({ song, onClose }: Props) {
  if (!song) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      onClick={onClose}
    >
      <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <SongCard
          title={song.title}
          artist={song.artist}
          album={song.album}
          durationSec={durationToSeconds(song.duration)}
          coverUrl={song.cover}
          onClick={onClose}
        />
      </div>
    </div>
  );
}