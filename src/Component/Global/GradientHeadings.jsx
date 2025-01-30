import { cn } from "../lib/utils";

export default function GradientHeadings({ children, className }) {
	return (
		<span
			className={cn(
				"bg-linear-(--gradient-primary) text-transparent bg-clip-text",
				className
			)}
		>
			{children}
		</span>
	);
}
