import { MobileNavItems } from "../Global/NavItems";
import Logo from "../Global/Logo";

export default function MobileNav({ toggleMenu }) {
	return (
		<div className="min-[940px]:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
			<div className="flex justify-between items-center pb-6">
				<Logo />
				<button
					className="text-black text-2xl p-2 cursor-pointer rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
					aria-label="Close Menu"
					onClick={toggleMenu}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<MobileNavItems />
		</div>
	);
}
