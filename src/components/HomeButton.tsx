import { Home } from "lucide-react"
import { useNavigate } from "react-router-dom"

// This function returns a Home page button that takes the user back
// to the home page when clicked. It appears on all the pages except Home page.
export function HomeButton() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigates to the homepage
  };

  return (
    <button 
      type="button"
      className="
        flex items-center justify-center
        size-15 rounded-full
        bg-[#1a1b1e] hover:bg-[#2a2b2e] 
        border border-[#121415] hover:border-[#FC517C]
        text-[#FF7C2B] hover:text-[#FF7C2B]
        hover:scale-105 hover:shadow-lg hover:shadow-[#FF7C2B]/20
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#FC517C]/20
      "
      onClick={handleHomeClick}
      title="Tilbake til hjem"
      aria-label="Gå tilbake til hjemmesiden"
    >
      <Home size={30} />
    </button>
  )
}
