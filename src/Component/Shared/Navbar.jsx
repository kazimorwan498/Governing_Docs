import Buttons from "../Global/Buttons";
import Container from "../Global/Container";
import Logo from "../Global/Logo";
import MobileNav from "./MobileNavbar";
import { useState } from "react";
import NavItems from "../Global/NavItems";

export default function Navbar() {
	const [IsMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prv) => !prv);

	return (
		<>
			<nav className="py-5">
				<Container>
					<div className="flex justify-between items-center gap-2.5 px-5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
						<Logo />
						<NavItems />
						<div className="flex justify-center items-center gap-2.5">
							<button
								className="inline-block min-[940px]:hidden space-y-1 cursor-pointer py-4 px-[11px] rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
								onClick={toggleMenu}
							>
								<span className="block w-6 h-0.5 bg-black rounded-full" />
								<span className="block w-6 h-0.5 bg-black rounded-full" />
								<span className="block w-6 h-0.5 bg-black rounded-full" />
							</button>
							<Buttons className="hidden sm:inline-block">
								Get Started Today
							</Buttons>
						</div>
					</div>
					{IsMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
				</Container>
			</nav>
		</>
	);
}
