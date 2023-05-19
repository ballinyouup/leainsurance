"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../shadcn-ui/aspect-ratio";
interface ICard {
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

const Card: React.FC<ICard> = ({ src, alt, delay = 0, text, href, image }) => {
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
			className="relative z-10 h-40 w-full overflow-hidden rounded-lg sm:h-64"
		>
			<AspectRatio ratio={3 / 4}>
				<Image src={src} alt={alt} fill quality={100} />
			</AspectRatio>
			<motion.div className="absolute top-0 z-10 flex h-full w-full flex-col bg-tealPrimary bg-opacity-95 transition-all duration-500 ease-out">
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

const Cards = () => {
	const cards = [
		{
			src: "/image1.jpg",
			alt: "Medicare Image",
			text: "Medicare",
			href: "/medicare",
			image: {
				src: "/medicareIcon.png",
				alt: "Medicare Icon",
			},
		},
		{
			src: "/image2.jpg",
			alt: "Obamacare Image",
			text: "Obamacare",
			href: "/obamacare",
			image: {
				src: "/obamacareIcon.png",
				alt: "Obamacare Icon",
			},
		},
		{
			src: "/image3.jpg",
			alt: "Life Insurance Image",
			text: "Life Insurance",
			href: "/life-insurance",
			image: {
				src: "/lifeInsuranceIcon.png",
				alt: "Life Insurance Icon",
			},
		},
		{
			src: "/image4.jpg",
			alt: "Funeral Assistance Image",
			text: "Funeral Assistance",
			href: "/funeral-assistance",
			image: {
				src: "/funeralAssistanceIcon.png",
				alt: "Funeral Assistance Icon",
			},
		},
	];

	return (
		<section className="flex w-full items-center justify-center p-5 pb-12 lg:p-10">
			<div className="grid h-full w-full max-w-5xl grid-cols-2 items-center justify-center gap-4 self-center overflow-hidden max-[505px]:grid-cols-1 lg:grid-cols-4 lg:gap-6">
				{cards.map((card, index) => {
					return (
						<Card
							key={index}
							src={card.src}
							alt={card.alt}
							text={card.text}
							href={card.href}
							delay={0.5 * index}
							image={card.image}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Cards;
