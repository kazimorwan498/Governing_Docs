import Container from "../Global/Container";
import Headings from "../Global/Headings";
import { PartnersLogo } from "../../lib/db/index";

export default function Partners() {
	return (
		<section className="px-2.5">
			<Container className="bg-[rgb(230,249,253)] max-w-[1276px] py-[50px] rounded-[20px]">
				<Headings className="text-center" gradient="Partners">
					Our
				</Headings>

				<div className="flex flex-wrap gap-[30px] items-center justify-center pt-10">
					{PartnersLogo.map(({ src, alt }, i) => (
						<div
							className="w-[274px] h-[101px] bg-white border border-[rgb(214,214,214)] rounded-xl content-center"
							key={i}
						>
							<img src={src} alt={alt} className="mx-auto" />
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
