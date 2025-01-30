import { navItems } from "../../lib/db";
import Buttons from "../Global/Buttons";
import Logo from "./Logo";

export default function MobileNav({ toggleMenu }) {
	return (
		<div className="min-[940px]:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
			<div className="flex justify-between items-center pb-6">
				<Logo />
				<button
					className="text-black text-2xl cursor-pointer"
					aria-label="Close Menu"
					onClick={toggleMenu}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-10"
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
							className="block text-lg text-accent hover:text-secondary hover:bg-primary hover:px-5 py-3 transition-all hover:font-bold rounded-lg"
						>
							{label}
						</a>
					</li>
				))}
				<Buttons className="sm:hidden inline-block">
					Get Started Today
				</Buttons>
			</ul>
		</div>
	);
}
