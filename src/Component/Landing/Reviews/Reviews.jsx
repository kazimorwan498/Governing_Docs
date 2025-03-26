import { useState } from "react";
import { ReviewsCardData } from "../../../lib/db";
import Container from "../../Global/Container";
import Headings from "../../Global/Headings";
import { Star } from "../../Global/Icons";
import ReviewsCard from "./ReviewsCard";
import { cn } from "../../../lib/utils";

export default function Reviews() {
	const [Active, setActive] = useState(1);

	const ActiveReviews = ReviewsCardData[Active];

	return (
		<section className="bg-[rgba(246,246,246,1)] my-[50px] sm:my-20 lg:my-[100px] xl:my-[150px] py-10 lg:py-20">
			<Container>
				<Headings gradient="Our Client" className="text-center">
					Reviews From
				</Headings>

				<div className="pt-10 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 xl:gap-[93px]">
					<div className="flex gap-3 sm:gap-5 w-full">
						{/* Review Active Line */}
						<div className="space-y-2.5 sm:space-y-[15px] bg-[rgb(226,222,216)] rounded-full">
							{Array.from(Array(3).keys()).map((i) => (
								<div
									key={i}
									className={cn(
										"w-[5px] h-[76px] sm:h-[92px] bg-transparent rounded-full",
										Active === i &&
											"bg-linear-(--gradient-primary)"
									)}
								/>
							))}
						</div>

						{/* Client Reviews */}
						<div className="space-y-2.5 sm:space-y-[15px] flex-grow">
							{ReviewsCardData.map((reviews, index) => (
								<ReviewsCard
									key={index}
									Active={Active === index}
									onClick={() => setActive(index)}
									{...reviews}
								/>
							))}
						</div>
					</div>

					{/* Review Details */}
					<div className="space-y-[15px] sm:space-y-[30px] w-full">
						<h3 className="font-bold text-xl sm:text-2xl md:text-[30px]">
							{ActiveReviews.review.title}
						</h3>
						<div className="flex items-center gap-[5px]">
							{Array.from(
								Array(ActiveReviews.review.stars).keys()
							).map((i) => (
								<Star key={i} className="size-4 sm:size-auto" />
							))}
						</div>
						<p className="text-sm sm:text-base text-accent max-w-[530px]">
							{ActiveReviews.review.details}
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
