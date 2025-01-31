import Buttons from "../Global/Buttons";
import Container from "../Global/Container";

export default function Hero() {
	return (
		<section className="pt-10 md:pt-20 lg:pt-28 xl:pt-[142px] pb-[128px] overflow-x-hidden">
			<Container className="flex flex-col-reverse md:flex-row justify-center items-center gap-x-0 gap-y-5">
				<div className="space-y-5 md:space-y-[29px]">
					<h1 className="font-SpaceGrotesk font-bold text-3xl md:text-4xl lg:text-6xl leading-[35px] md:leading-[50px] lg:leading-[76px] max-w-[593px]">
						Simplify your real estate document analysis
					</h1>
					<p className="font-semibold text-base md:text-lg lg:text-xl max-w-[350px] sm:max-w-[400px] md:max-w-[519px]">
						Streamline, Automate, and Secure Your Business Documents
						with Ai GoverningDocs
					</p>
					<Buttons>Get Started Today</Buttons>
				</div>
				<div>
					<img
						src="/hero-img.svg"
						alt="hero-img.svg"
						className="size-full xl:min-w-[740px] xl:min-h-[640px] max-h-[400px] max-w-auto md:max-w-[550px] md:max-h-[640px] mx-auto xl:mr-[-67px]"
					/>
				</div>
			</Container>
		</section>
	);
}
