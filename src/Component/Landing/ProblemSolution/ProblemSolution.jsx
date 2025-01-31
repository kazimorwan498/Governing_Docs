import { ProblemSolutionData } from "../../../lib/db";
import Container from "../../Global/Container";
import ProblemSolutionCard from "./ProblemSolutionCard";
import ProblemSolutionHeader from "./ProblemSolutionHeader";

export default function ProblemSolution() {
	return (
		<section>
			<Container>
				{/* ProblemSolution Heading */}
				<ProblemSolutionHeader />

				{/* ProblemSolution Cards */}
				<div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-[30px]">
					{ProblemSolutionData.map((item, index) => (
						<ProblemSolutionCard key={index} {...item} />
					))}
				</div>
			</Container>
		</section>
	);
}
