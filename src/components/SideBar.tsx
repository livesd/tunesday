import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import PlayList from "./PlayList";
import CreateButton from "./CreateButton";
import PlaylistCreateSection from "./PlaylistCreateSection";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [customPlaylists, setCustomPlaylists] = useState<string[]>([]);
  const [creating, setCreating] = useState(false);

  // adds a new customed playlist name to the sidebar at the top
  function handleAddPlaylist(name: string) {
    setCustomPlaylists((p) => [name, ...p]);
    setCreating(false); 
  }

  return (
    <div id="SideBar" className="fixed top-0 left-0 h-screen z-20">
      <aside
        className={`h-full ${
          isOpen ? "w-64 p-4" : "w-12 p-0"
        } bg-[#151819] flex flex-col shadow-lg border-r-2 border-[#FC517C] duration-300`}
      >
        <button
          onClick={() => setIsOpen(p => !p)}
          className="absolute top-1/2 right-0 bg-[#151819] rounded-full text-[#FF7C2B] p-1 border-2 border-[#FC517C]"
          style={{ transform: "translateX(50%)" }}
        >
          {isOpen ? (
            <ArrowLeftFromLine size={36} />
          ) : (
            <ArrowRightFromLine size={36} />
          )}
        </button>

        {/* when the sidebar is open */}
        {isOpen && (
          <>
            <div className="pt-15">
              <div className="flex items-center justify-between mb-3 border-b-1 border-[#FF7C2B] pb-1">
                <h3 className="text-2xl text-[#FFF6DF] font-bold">
                  My playlists
                </h3>
                {/* if you have pushed the create button, it will disapear until you have added/regret */}
                {!creating && (
                  <CreateButton onClick={() => setCreating(true)} />
                )}
              </div>

              {/* Inline create form (appears when creating = true) */}
              <PlaylistCreateSection
                creating={creating}
                onAdd={handleAddPlaylist} //success submit
                onCancel={() => setCreating(false)} //cancels creating
              />
            </div>
            <div className="-mt-2 overflow-y-auto scrollbar-hide pb-4">
            <ul className="mt-4 flex flex-col gap-5">
            {customPlaylists.map((pl, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className="group flex items-center gap-2 text-left"
                      onClick={() => {
                        // Navigate to a dedicated page for this custom playlist
                        navigate(`/playlist/custom/${encodeURIComponent(pl)}`);
                      }}
                    >
                      <div className="h-8 w-8 rounded-md bg-[#2E3335] group-hover:opacity-90 transition" />
                      <span className="text-[#FFF6DF] text-xl transition-colors truncate group-hover:text-[#FF7C2B]">
                        {pl}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <PlayList count={20} />
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
