import { Filter } from "lucide-react";

type Props = {
  onToggle?: () => void;
  nextFilter?: string;
  currentFilter?: string;
  className?: string;
};

export default function FilterButton({
  onToggle,
  nextFilter,
  currentFilter,
  className = "",
}: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextFilter} view (current: ${currentFilter})`}
      className={[
        "flex flex-col items-center group text-[#FFF6DF]",
        "-mt-7",
        className,
      ].join(" ")}
    >
      <span className="grid place-items-center h-14 w-14 text-[#FFF6DF] group-hover:text-[#FF7C2B]">
        <Filter size={28} />
      </span>
      <span className="text-xs font-semibold tracking-wide text-[#FFF6DF] group-hover:text-[#FF7C2B]">
        View by {nextFilter || "Filter"}
      </span>
    </button>
  );
}
