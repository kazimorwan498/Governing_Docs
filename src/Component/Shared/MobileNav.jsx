import { navItems } from "../../lib/db";
import Logo from "./Logo";

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

			<ul className="space-y-4">
				{navItems.map(({ link, label }, index) => (
					<li key={index}>
						<a
							href={link}
							className="block text-lg text-accent hover:text-secondary hover:bg-primary hover:px-5 active:text-secondary active:bg-primary active:px-5 py-3 transition-all hover:font-bold active:font-bold rounded-lg"
						>
							{label}
						</a>
					</li>
				))}
				<button className="block sm:hidden text-lg text-accent hover:text-secondary hover:bg-primary hover:px-5 active:text-secondary active:bg-primary active:px-5 py-3 transition-all hover:font-bold active:font-bold rounded-lg w-full text-start cursor-pointer group/gst">
					Get Started Today
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 hidden ms-4 group-hover/gst:inline group-active/gst:inline"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</ul>
		</div>
	);
}
