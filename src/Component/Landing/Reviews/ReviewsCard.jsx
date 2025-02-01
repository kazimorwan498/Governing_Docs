import { cn } from "../../../lib/utils";

export default function ReviewsCard({ name, img, type, Active, onClick }) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"inline-flex justify-normal items-center gap-[13px] border border-primary rounded-[20px] w-[491px] py-3 px-5 cursor-pointer",
				Active && "bg-linear-(--gradient-primary) border-white"
			)}
		>
			<img src={img} alt={name} className="rounded-full" />
			<div
				className={cn(
					"font-semibold text-base text-accent text-start",
					Active && "text-white"
				)}
			>
				<h6>{name}</h6>
				<span>{type}</span>
			</div>
		</button>
	);
}
