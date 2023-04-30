"use client";
import { motion } from "framer-motion";
const HeroTitle = () => {
	return (
		<motion.span
			initial={{
				x: -200,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
			}}
			className="font-poppins max-w-xl text-5xl font-semibold uppercase text-white sm:text-6xl"
		>
			Insurance you can count on at every stage
		</motion.span>
	);
};

export default HeroTitle;
