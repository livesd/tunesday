import { useState } from 'react';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';


export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);


  function closeSideBar() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

  }

  return (
    <div id="SideBar" className="fixed top-0 left-0 h-screen z-20">
      <aside className={`h-full ${isOpen ? 'w-64 p-4' : 'w-12 p-0'} bg-[#151819] flex flex-col shadow-lg border-r-2 border-[#FC517C] duration-300 `}>
        <button
          onClick={closeSideBar}
          className="absolute top-1/2 right-0 bg-[#151819] rounded-full text-[#FF7C2B] p-1 border-2 border-[#FC517C]"
          style={{ transform: 'translateX(50%)' }}
        >
          {/*Logic for changing the way the arrow faces based on if the sidebare is open or not*/}
          {isOpen ? <ArrowLeftFromLine size={36} /> : <ArrowRightFromLine size={36} />}
        </button>
        {isOpen && (
          <h3 className="text-xl text-[#FFF6DF] font-bold text-left ml-3 pt-16 border-b-2 border-[#FF7C2B] pb-1 ">My playlists</h3>
        )}
      </aside>
    </div>
  );
}