"use client";
import { motion } from "framer-motion";
import Partners from "./home-partners";
const TextSection = () => {
	return (
		<section className="w-full">
			<div className="flex flex-col items-center justify-center sm:h-fit">
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
					className="z-10 flex h-64 w-full max-w-2xl flex-col items-start justify-center gap-4 p-5 sm:flex-row sm:items-center sm:p-2"
				>
					<div className="flex w-fit flex-wrap gap-2 text-start text-4xl font-bold uppercase text-primary sm:flex-col sm:gap-0 sm:text-end sm:text-5xl">
						<span>Why</span>
						<span>Choose</span>
						<span>Us</span>
					</div>
					<span className="w-full border-[1.5px] border-primary sm:h-40 sm:w-fit" />
					<span className="text-xl">
						Our plans not only offer comprehensive coverage for routine checkups
						and major medical procedures but our agents also provide
						personalized attention and guidance to help you find the plan that`s
						right for you.
					</span>
				</motion.div>
				<Partners />
			</div>
		</section>
	);
};

export default TextSection;
