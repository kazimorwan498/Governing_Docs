import { cn } from "../../../lib/utils";
import { Arrow } from "../../Global/Icons";

export default function FAQCard({ que, ans, onClick, isActive }) {
	return (
		<div className="shadow-faq rounded-[20px] py-5 px-[30px] bg-white">
			<button
				onClick={onClick}
				className="inline-flex justify-between items-center gap-5 w-full cursor-pointer"
			>
				<h3 className="font-bold text-lg lg:text-[26px] lg:leading-[36px] text-start">
					{que}
				</h3>

				<div className="text-primary">
					<Arrow
						className={cn(
							"-rotate-90 transition-all",
							isActive && "rotate-90"
						)}
					/>
				</div>
			</button>
			{isActive && (
				<p className="text-accent pt-5 text-sm lg:text-base">{ans}</p>
			)}
		</div>
	);
}
