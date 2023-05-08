"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

const Card: React.FC<ICard> = ({
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
		<section className="pb-12 lg:p-10">
			<div className="grid h-full w-full grid-cols-[repeat(2,240px)] items-center justify-center gap-4 overflow-hidden max-[505px]:grid-cols-[repeat(1,240px)] lg:grid-cols-[repeat(4,240px)] lg:gap-6">
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

