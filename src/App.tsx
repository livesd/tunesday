import SongBrowser from "@/components/SongBrowser";
import SelectedSongWindow from "@/components/SelectedSongWindow";
import SearchField from "@/components/SearchField";
import "./App.css";

function App() {
  return (
    <div className=" flex flex-col bg-[#121415] ">
      <div className="flex flex-col bg-[#121415] w-full">
        <div className="w-full text-2xl relative">
          <h1 className="pt-3 text-[#FFF6DF] text-center font-bold leading-none ">
            TUNESDAY
          </h1>
          <div className="absolute top-4 right-4">
            <SearchField />
          </div>
        </div>
      </div>
      <main className="w-full flex justify-start">
        <SelectedSongWindow>
          {(onSelect) => <SongBrowser onSelect={onSelect} />}
        </SelectedSongWindow>
      </main>
    </div>
  );
}

export default App;
