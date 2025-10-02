import { useState } from "react";
import { Search, X } from "lucide-react";

//This function returns a searchfield component that looks like a searchglass. when you click on it, the searchfield appears
export default function SearchField() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex items-center mt-5 mr-2">
			{/*If the searchfield is closed, it looks like this*/}
			{isOpen === false && (
				<button
					onClick={() => setIsOpen(true)}
					className="text-[#FFF6DF] hover:text-[#FF7C2B] "
				>
					<Search size={29} />
				</button>
			)}

			{/*if searchfield is open, it looks like this*/}
			{isOpen === true && (
				<div className="flex items-center">
					<input
						type="text"
						placeholder="Search for songs.."
						className="w-80 bg-[#FFF6DF] text-black px-3 py-2 rounded-4xl text-sm "
					/>
					<button
						type="button"
						onClick={() => { setIsOpen(false); }}
						className="ml-2 text-[#FFF6DF] hover:text-[#FF7C2B]"
					>
						<X size={24} />
					</button>
				</div>
			)}
		</div>
	);
}
