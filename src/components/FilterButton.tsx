type Props = {
  onToggle?: () => void;
  nextFilter?: string;
};

export default function FilterButton({ onToggle, nextFilter }: Props) {
  return (
    <button
      onClick={onToggle}
      className="bg-[#FC517C] hover:bg-[#e64670] text-[#FFF6DF] px-4 py-1 rounded-lg font-semibold transition-colors duration-200 text-base"
    >
      View by {nextFilter || "Filter"}
    </button>
  );
}