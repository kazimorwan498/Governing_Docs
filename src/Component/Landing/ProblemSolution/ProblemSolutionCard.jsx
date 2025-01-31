export default function ProblemSolutionCard() {
	return (
		<div className="w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-ps-card bg-white hover:bg-primary group/ps transition-colors border border-white">
			<div className="flex items-center justify-center bg-linear-(--gradient-primary) size-[58px] rounded-full">
				<img src="/ps-1.svg" alt="" />
			</div>
			<h4 className="font-bold text-lg text-secondary group-hover/ps:text-white leading-none">
				Problem
			</h4>
			<div className="text-accent space-y-2.5 group-hover/ps:text-white">
				<p>
					Managing legal documents can be complex, time-consuming, and
					error-prone.
				</p>
				<p>
					Outdated methods and manual processes put your business at
					risk
				</p>
			</div>
		</div>
	);
}
