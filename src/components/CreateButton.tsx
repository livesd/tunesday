import { Plus } from "lucide-react";

export interface CreateButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export default function CreateButton({
  onClick,
  ariaLabel = "Create playlist",
  className = "",
}: CreateButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`shrink-0 group -mt-1 ${className}`}
    >
      <span className="grid place-items-center h-7 w-7 rounded-full border-1 border-[#FF7C2B] text-[#FF7C2B] group-hover:bg-[#FF7C2B] group-hover:text-[#121415] transition font-bold">
        <Plus size={18} strokeWidth={2.2} />
      </span>
    </button>
  );
}
