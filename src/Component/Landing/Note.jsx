import Buttons from "../Global/Buttons";
import Container from "../Global/Container";
import Headings from "../Global/Headings";

export default function Note() {
	return (
		<section className="py-[50px] sm:py-20 lg:py-[100px] xl:py-[150px] px-2.5">
			<Container className="bg-linear-(--gradient-primary) rounded-[20px] py-7 md:py-14 px-6 md:px-[40.5px_69.5px] flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-2.5 text-white">
				<div className="space-y-5 md:space-y-[30px]">
					<Headings className="sm:max-w-[500px] lg:max-w-[566px]">
						Ready to Simplify Your Document Management?
					</Headings>
					<p className="font-bold text-sm md:text-base max-w-[500px]">
						Sign up today and experience the power of AI-driven
						legal documentation.
					</p>
				</div>
				<Buttons className="bg-white text-secondary min-w-fit mt-5 md:mt0">
					Get Started Now
				</Buttons>
			</Container>
		</section>
	);
}
