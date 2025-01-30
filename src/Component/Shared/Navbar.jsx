import Buttons from "../Global/Buttons";
import Container from "../Global/Container";
import Logo from "./Logo";
import { navItems } from "../../lib/db/index";

export default function Navbar() {
	return (
		<>
			<nav className="py-5">
				<Container>
					<div className="flex justify-between items-center gap-2.5 px-2 sm:ps-5 xl:ps-[30px] sm:pe-3 xl:pe-5 py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
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
							<div>
								<button className="inline-block min-[940px]:hidden space-y-1">
									<span className="block w-6 h-0.5 bg-black" />
									<span className="block w-6 h-0.5 bg-black" />
									<span className="block w-6 h-0.5 bg-black" />
								</button>
							</div>
							<Buttons>Get Started Today</Buttons>
						</div>
					</div>
				</Container>
			</nav>
		</>
	);
}
