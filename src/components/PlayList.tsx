import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import karpe from "@/assets/karpe.jpg";

type Props = {
  count?: number; // how many mock playlists to show
  className?: string;
  onSelect?: (name: string) => void;
};

export default function PlayList({
  count = 20,
  className = "",
  onSelect,
}: Props) {
  const navigate = useNavigate();

  // Creating mock playlists, all named "Random songs"
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: `random-songs-${i + 1}`,
        name: "Random songs",
      })),
    [count]
  );

  return (
    <ul
      className={[
        "mt-4 flex flex-col gap-5",
        className,
      ].join(" ")}
    >
      {items.map((pl) => (
        <li key={pl.id}>
          <button
            type="button"
            onClick={() => {
              onSelect?.(pl.name);
              navigate("/playlist");
            }}
            className={[
              "group flex items-center gap-2 text-left",
            ].join(" ")}
          >
            <img
              src={karpe}
              className="h-8 w-8 rounded-md object-cover bg-[#2E3335] group-hover:opacity-90 transition"
            />
            { (
              <span className="text-[#FFF6DF] text-xl transition-colors group-hover:text-[#FF7C2B]">
                {pl.name}
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
