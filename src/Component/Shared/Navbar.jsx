import Buttons from "../Global/Buttons";
import Container from "../Global/Container";
import Logo from "./Logo";
import { navItems } from "../../lib/db/index";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Navbar() {
	const [IsMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prv) => !prv);

	return (
		<>
			<nav className="py-5">
				<Container>
					<div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
						<Logo />
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
						<div className="flex justify-center items-center gap-2.5">
							<button
								className="inline-block min-[940px]:hidden space-y-1 cursor-pointer py-4 px-[11px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
								onClick={toggleMenu}
							>
								<span className="block w-6 h-0.5 bg-black" />
								<span className="block w-6 h-0.5 bg-black" />
								<span className="block w-6 h-0.5 bg-black" />
							</button>
							<Buttons className="hidden sm:inline-block">Get Started Today</Buttons>
						</div>
					</div>
					{IsMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
				</Container>
			</nav>
		</>
	);
}
