"use client";
import { motion } from "framer-motion";
const TextSection = () => {
	return (
		<section className="w-full">
			<div className="flex items-center justify-center sm:h-72">
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
					<div className="flex w-fit flex-wrap gap-2 text-start text-4xl font-bold uppercase text-primary sm:flex-col sm:gap-0 sm:text-end sm:text-5xl">
						<span>Porque</span>
						<span>ESCOGERNOS?</span>
					</div>
					<span className="w-full border-[1.5px] border-primary sm:h-56 sm:w-fit" />
					<span className="text-xl">
						Nuestros planes no solo brindan una protección completa para
						exámenes de rutina y tratamientos médicos de importancia, sino que
						nuestros agentes también ofrecen un servicio personalizado y
						asesoramiento para ayudarte a encontrar el plan ideal para ti.
					</span>
				</motion.div>
			</div>
		</section>
	);
};

export default TextSection;
