import { navItems } from "../../lib/db";

export default function NavItems() {
	return (
		<>
			<ul className="hidden min-[940px]:flex justify-center items-center gap-3 xl:gap-4">
				{navItems.map(({ label, link }, index) => (
					<li key={index}>
						<a
							href={link}
							className="text-accent text-sm xl:text-base hover:text-primary transition-colors py-2"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}

export function MobileNavItems() {
	return (
		<>
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
		</>
	);
}
