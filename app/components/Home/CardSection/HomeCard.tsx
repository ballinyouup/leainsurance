"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface IHomeCard {
	src: string;
	alt: string;
	delay?: number;
	text: string;
	href: string;
	image: {
		src: string;
		alt: string;
	};
}

const HomeCard: React.FC<IHomeCard> = ({
	src,
	alt,
	delay = 0,
	text,
	href,
	image,
}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: delay,
				duration: 0.5,
			}}
			className="relative z-10 h-40 overflow-hidden rounded-lg sm:h-full [&>*]:hover:left-0"
		>
			<Image
				src={src}
				alt={alt}
				width={240}
				height={240}
				className="min-w-[240px]"
			/>
			<motion.div className="absolute -left-60 top-0 z-10 flex h-full w-full flex-col bg-tealPrimary bg-opacity-95 transition-all duration-500 ease-out">
				<Link
					href={href}
					className="flex h-full w-full flex-col items-center justify-center text-lg text-white"
				>
					<span>{text}</span>
					<Image
						src={image.src}
						alt={image.alt}
						width={40}
						height={40}
						className="invert"
					/>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default HomeCard;
