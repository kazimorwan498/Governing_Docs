import { cn } from "../../lib/utils";

// eslint-disable-next-line react/prop-types
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
