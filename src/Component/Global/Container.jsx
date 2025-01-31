import { cn } from "../../lib/utils";

// eslint-disable-next-line react/prop-types
export default function Container({ children, className }) {
	return (
		<>
			<div
				className={cn(
					"w-full max-w-screen-xl mx-auto px-2.5",
					className
				)}
			>
				{children}
			</div>
		</>
	);
}
