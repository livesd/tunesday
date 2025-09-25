import { Shuffle } from "lucide-react";

type Props = {
  active?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
};

export default function ShuffleButton({
  active = false,
  onClick,
  size = "lg",
  ariaLabel = "Shuffle",
  className = "",
  disabled,
}: Props) {
  const iconSize = { sm: 20, md: 24, lg: 28 }[size];
  const colorCls = active
    ? "text-[#FF7C2B]"
    : "text-[#FC517C] hover:text-[#FF7C2B]";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={active}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7C2B]",
        colorCls,
        disabled ? "opacity-60 cursor-not-allowed" : "",
        className,
      ].join(" ")}
    >
      <Shuffle size={iconSize} />
    </button>
  );
}