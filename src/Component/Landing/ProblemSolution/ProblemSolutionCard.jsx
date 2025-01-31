export default function ProblemSolutionCard({ img, title, des1, des2 }) {
	return (
		<div className="w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-ps-card bg-white hover:bg-primary active:bg-primary group/ps transition-colors border border-white">
			<div className="flex items-center justify-center bg-linear-(--gradient-primary) size-[58px] rounded-full">
				<img src={img} alt={title} />
			</div>
			<h4 className="font-bold text-lg text-secondary group-hover/ps:text-white leading-none">
				{title}
			</h4>
			<div className="text-accent space-y-2.5 group-hover/ps:text-white leading-[1.45]">
				<p>{des1}</p>
				{des2 && <p>{des2}</p>}
			</div>
		</div>
	);
}
