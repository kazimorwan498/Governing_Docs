import { SocialLinks } from "../../lib/db";
import Container from "../Global/Container";
import Logo from "../Global/Logo";
import NavItems from "../Global/NavItems";

export default function Footer() {
	return (
		<>
			<footer className="pt-5 lg:pt-24 bg-primary/5">
				<Container>
					<div className="flex flex-col min-[430px]:flex-row justify-between items-center gap-x-2.5 gap-y-5 py-5">
						<Logo>Ai GoverningDocs</Logo>
						<NavItems />
						<div className="flex justify-center items-center gap-2.5">
							{SocialLinks.map(({ icon, links }, index) => (
								<a href={links} target="_blank" key={index}>
									<img
										src={icon}
										alt={icon}
										className="size-[36px]"
									/>
								</a>
							))}
						</div>
					</div>
					<div className="mt-5 md:mt-[50px] lg:mt-[106px] py-5 border-t gradient-border">
						<p className="text-lg text-center leading-[25px] text-[rgb(17,17,17)]">
							Ai GoverningDocs {new Date().getFullYear()}. All
							Rights Reserved.
						</p>
					</div>
				</Container>
			</footer>
		</>
	);
}
