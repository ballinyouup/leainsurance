"use client";
import { motion } from "framer-motion";
const TextSection = () => {
	return (
		<section className="w-full">
			<div className="flex items-center justify-center sm:h-48">
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
					className="flex w-full max-w-xl flex-col items-start justify-center gap-4 p-5 sm:flex-row sm:items-center sm:p-2"
				>
					<span className="w-40 text-start text-4xl font-bold uppercase text-purple sm:text-end">
						Why Choose Us
					</span>
					<span className="w-full border-[1.5px] border-purple sm:h-28 sm:w-fit" />
					<span>
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
