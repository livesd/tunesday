type SongCardProps = {
  title: string;
  artist?: string;
  album?: string;
  durationSec?: number;
  coverUrl?: string;
  onClick?: () => void;
  className?: string;
};

function formatDuration(seconds?: number) {
  if (seconds == null) return "-";
  if (seconds >= 60) {
    const m = Math.floor(seconds / 60);
    const s = Math.round(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }
  return `${seconds.toFixed(2)} sec`;
}

export default function SongCard({
  title,
  artist,
  album,
  durationSec,
  coverUrl,
  onClick,
  className = "",
}: SongCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative w-full max-w-sm rounded-3xl bg-[#06181E] text-[#FFF6DF]",
        "shadow-xl ring-1 ring-black/10 transition",
        "p-8 text-left",
        className,
      ].join(" ")}
    >
      <div className="rounded-xl overflow-hidden bg-neutral-800/70 aspect-square mb-6">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`${title} cover`}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#FFF6DF] tracking-wide">
          {title}
        </h2>
        {artist ? (
          <p className="text-lg text-[#FFF6DF]/80 mt-1">{artist}</p>
        ) : null}
      </div>

      <div className="h-0.5 my-4 bg-[#FC517C] rounded-full" />

      <div className="grid grid-cols-2 gap-6 text-lg">
        <div>
          <div className="text-[#FFF6DF]/70">Album:</div>
          <div className="text-[#FFF6DF]">{album ?? "-"}</div>
        </div>
        <div className="text-right">
          <div className="text-[#FFF6DF]/70">Time:</div>
          <div className="text-[#FFF6DF]">{formatDuration(durationSec)}</div>
        </div>
      </div>
    </button>
  );
}
