import Headings from "../../Global/Headings";
import { Arrow } from "../../Global/Icons";

export default function ProblemSolutionHeader() {
	return (
		<div className="flex flex-col min-[355px]:flex-row justify-between items-center gap-5">
			<Headings gradient="Solution">Problem & </Headings>
			<div className="flex justify-center items-center gap-[15px]">
				<button className="arrow-btns">
					<Arrow className="rotate-180" />
				</button>
				<button className="arrow-btns">
					<Arrow />
				</button>
			</div>
		</div>
	);
}
