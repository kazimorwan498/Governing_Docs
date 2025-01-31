import Buttons from "../Global/Buttons";
import Container from "../Global/Container";

export default function Hero() {
	return (
		<section className="pt-[142px] pb-[128px]">
			<Container className="flex justify-center items-center gap-0">
				<div className="space-y-[29px]">
					<h1 className="font-SpaceGrotesk font-bold text-[60px] leading-[76px] max-w-[593px]">
						Simplify your real estate document analysis
					</h1>
					<p className="font-semibold text-xl max-w-[519px]">
						Streamline, Automate, and Secure Your Business Documents
						with Ai GoverningDocs
					</p>
					<Buttons>Get Started Today</Buttons>
				</div>
				<div>
					<img
						src="/hero-img.svg"
						alt="hero-img.svg"
						className="min-w-[740px] min-h-[640px] mx-auto mr-[-67px] flex"
					/>
				</div>
			</Container>
		</section>
	);
}
