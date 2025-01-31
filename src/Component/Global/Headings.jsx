import { cn } from "../../lib/utils";
import GradientHeadings from "./GradientHeadings";

// eslint-disable-next-line react/prop-types
export default function Headings({ children, className, gradient }) {
	return (
		<h2
			className={cn(
				"font-SpaceGrotesk font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]",
				className
			)}
		>
			{children} <GradientHeadings>{gradient}</GradientHeadings>
		</h2>
	);
}
