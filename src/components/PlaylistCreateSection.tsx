import { useState, type FormEvent } from "react";

interface PlaylistCreateSectionProps {
  creating: boolean;
  onAdd: (name: string) => void;
  onCancel: () => void;
  className?: string;
}

export default function PlaylistCreateSection({
  creating,
  onAdd,
  onCancel,
  className = "",
}: PlaylistCreateSectionProps) {
  const [name, setName] = useState("");

  if (!creating) return null;

  function submit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  }

  return (
    <form
      onSubmit={submit}
      className={["flex flex-wrap items-center gap-2 mb-2", className].join(" ")}
    >
      <input
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Playlist name"
        className="min-w-0 flex-1 bg-[#2E3335] text-[#FFF6DF] placeholder-[#9CA3AF] border-[#FF7C2B] rounded px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#FF7C2B]"
      />
      <button
        type="submit"
        className="px-2 py-1 text-xs rounded bg-[#FF7C2B] text-[#121415] font-semibold hover:bg-[#FF9653] transition"
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          setName("");
          onCancel();
        }}
        className="px-2 py-1 text-xs rounded bg-[#2E3335] text-[#FFF6DF] font-semibold hover:bg-[#3A4042] transition"
      >
        Cancel
      </button>
    </form>
  );
}