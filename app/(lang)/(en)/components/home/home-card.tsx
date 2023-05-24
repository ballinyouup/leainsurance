"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "$/aspect-ratio";
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
	index: number;
}

const Card: React.FC<ICard> = ({
	src,
	alt,
	delay = 0,
	text,
	href,
	image,
	index = 0,
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
			className="relative z-10 h-60 w-full overflow-hidden rounded-lg sm:h-64"
		>
			<AspectRatio ratio={3 / 4}>
				<Image
					src={src}
					alt={alt}
					fill
					quality={100}
					className={
						index === 0
							? "object-contain object-[0px_-40px] sm:object-[0px_0px] "
							: index === 1
							? "object-cover object-[-200px_0px]"
							: ""
					}
				/>
			</AspectRatio>
			<motion.div
				whileHover={{ scale: 1.05 }}
				className="absolute top-0 z-10 flex h-full w-full flex-col bg-tealPrimary bg-opacity-[0.85] transition-all duration-200 ease-out hover:bg-teal-950 hover:bg-opacity-75"
			>
				<Link
					href={href}
					className="flex h-full w-full flex-col items-center justify-center text-xl text-white"
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
			src: "/image4.jpg",
			alt: "Medicare Image",
			text: "Medicare",
			href: "/medicare",
			image: {
				src: "/medicareIcon.png",
				alt: "Medicare Icon",
			},
		},
		{
			src: "/family1.jpg",
			alt: "Obamacare Image",
			text: "Obamacare",
			href: "/obamacare",
			image: {
				src: "/obamacareIcon.png",
				alt: "Obamacare Icon",
			},
		},
		{
			src: "/image2.jpg",
			alt: "Life Insurance Image",
			text: "Life Insurance",
			href: "/life-insurance",
			image: {
				src: "/lifeInsuranceIcon.png",
				alt: "Life Insurance Icon",
			},
		},
		{
			src: "/image1.jpg",
			alt: "Final Expenses Image",
			text: "Final Expenses",
			href: "/funeral-assistance",
			image: {
				src: "/funeralAssistanceIcon.png",
				alt: "Final Expenses Icon",
			},
		},
	];

	return (
		<section className="flex w-full items-center justify-center p-5 pb-12 sm:mb-0 lg:p-10">
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
							index={index}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Cards;
