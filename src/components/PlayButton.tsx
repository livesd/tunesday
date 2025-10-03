import { Play, Pause } from "lucide-react";

type Props = {
  playing?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid";
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
};

export default function PlayButton({
  playing = false,
  onClick,
  size = "lg",
  variant = "outline",
  ariaLabel = playing ? "Pause" : "Play",
  className = "",
  disabled,
}: Props) {
  const sizeCls = { sm: "h-12 w-12", md: "h-14 w-14", lg: "h-16 w-16" }[size];
  const iconSize = { sm: 20, md: 24, lg: 28 }[size];

  const variantCls =
    variant === "solid"
      ? "bg-[#FC517C] text-[#121415] hover:bg-[#FF7C2B]"
      : "border-2 border-[#FC517C] text-[#FC517C] hover:bg-[#FC517C]/10";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={[
        "grid place-items-center rounded-full transition",
        sizeCls,
        variantCls,
        disabled ? "opacity-60 cursor-not-allowed" : "",
        className,
      ].join(" ")}
    >
      {playing ? (
        <Pause size={iconSize} />
      ) : (
        <Play size={iconSize} className="translate-x-0.5" />
      )}
    </button>
  );
}
