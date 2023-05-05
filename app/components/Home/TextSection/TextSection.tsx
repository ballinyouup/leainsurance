"use client";
import { motion } from "framer-motion";
const TextSection = () => {
	return (
		<section className="w-full">
			<div className="flex items-center justify-center sm:h-56">
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						delay: 0.75,
						duration: 0.75,
						ease: "easeIn",
					}}
					className="z-10 flex w-full max-w-2xl flex-col items-start justify-center gap-4 p-5 sm:flex-row sm:items-center sm:p-2"
				>
					<span className="w-fit text-start text-4xl font-bold uppercase text-black sm:text-end sm:text-5xl">
						Why Choose Us
					</span>
					<span className="w-full border-[1.5px] border-black sm:h-36 sm:w-fit" />
					<span className="text-lg">
						Our plans not only offer comprehensive coverage for routine checkups
						and major medical procedures but our agents also provide
						personalized attention and guidance to help you find the plan that's
						right for you.
					</span>
				</motion.div>
			</div>
		</section>
	);
};

export default TextSection;
