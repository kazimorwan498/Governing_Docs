import { cn } from "../lib/utils";

export default function Buttons({ children, className }) {
	return (
		<>
			<button
				className={cn(
					"py-3 sm:py-4 px-3.5 sm:px-[25px] rounded-full bg-linear-(--gradient-primary) text-white font-bold font-NunitoSans cursor-pointer opacity-90 hover:opacity-100 transition-all delay-100 text-sm md:text-base",
					className
				)}
			>
				{children}
			</button>
		</>
	);
}
