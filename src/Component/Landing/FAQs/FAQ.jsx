import { useState } from "react";
import Container from "../../Global/Container";
import Headings from "../../Global/Headings";
import { FAQsData } from "../../../lib/db";
import FAQCard from "./FAQCard";

export default function FAQ() {
	const [Active, setActive] = useState(1);
	const handleChange = (index) => setActive(Active === index ? -1 : index);

	return (
		<section className="py-[30px] sm:py-20 lg:py-[100px] xl:py-[150px] px-2.5 mt-5 md:mt-[50px] relative">
			<Container className="max-w-[982px]">
				<Headings gradient="Asked Questions" className="text-center">
					Frequently
				</Headings>

				<div className="mt-10 space-y-5">
					{FAQsData.map((faq, i) => (
						<FAQCard
							key={i}
							{...faq}
							onClick={() => handleChange(i)}
							isActive={Active === i}
						/>
					))}
				</div>
			</Container>

			<img
				src="/faq-bg.svg"
				alt="faq-bg"
				className="absolute top-[30px] left-0 !h-[590px] !w-[1045px] -z-10"
			/>
		</section>
	);
}
