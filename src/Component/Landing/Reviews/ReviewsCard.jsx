import { cn } from "../../../lib/utils";

export default function ReviewsCard({ name, img, type, Active, onClick }) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"inline-flex justify-normal items-center gap-[13px] border border-primary rounded-[20px] w-full lg:w-[400px] xl:w-[491px] py-3 px-3.5 cursor-pointer",
				Active && "bg-linear-(--gradient-primary) border-white"
			)}
		>
			<img
				src={img}
				alt={name}
				className="size-[50px] sm:size-auto rounded-full"
			/>
			<div
				className={cn(
					"font-semibold text-sm sm:text-base text-accent text-start",
					Active && "text-white"
				)}
			>
				<h6>{name}</h6>
				<span>{type}</span>
			</div>
		</button>
	);
}
