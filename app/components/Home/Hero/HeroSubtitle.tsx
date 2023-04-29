"use client";
import { motion } from "framer-motion";

const HeroSubtitle = () => {
	return (
		<motion.span
			initial={{
				y: 50,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				delay: 0.5,
				duration: 0.5,
			}}
			className="font-poppins w-full max-w-xl whitespace-normal text-xl font-normal text-white"
		>
			Everyone deserves access to quality insurance coverage that fits their
			needs and budget
		</motion.span>
	);
};

export default HeroSubtitle;
