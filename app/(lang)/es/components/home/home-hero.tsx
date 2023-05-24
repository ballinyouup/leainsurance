"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "$/button";

const Hero = () => {
	return (
		<section className="relative z-10 flex h-96 w-full flex-col items-center justify-start overflow-hidden bg-tealPrimary max-[440px]:h-[500px] sm:h-[550px] sm:bg-tealPrimary">
			<div className="absolute top-0 z-10 flex h-full w-full max-w-5xl flex-col items-start gap-5">
				<div className="flex h-full w-full max-w-xl flex-col justify-center gap-4 px-5">
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
						Seguro con el que puede contar en cada etapa
					</motion.span>
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
						Todos merecen acceso a una cobertura de seguro de calidad que se
						ajuste sus necesidades y presupuesto
					</motion.span>
					<div className="flex w-full flex-row justify-start gap-4 sm:max-w-xl">
						<Button
							onClick={() => scrollTo({ top: 9999999, behavior: "smooth" })}
						>
							Contacta con nosotros
						</Button>
						<Button>
							<a href="tel:+18886954221">Llama hoy</a>
						</Button>
					</div>
				</div>
			</div>
			<Image
				className="absolute -top-20 h-[680px] w-fit self-end object-cover object-[-150px_0px] brightness-[35%] sm:brightness-[35%] md:object-[0px_0px] md:brightness-[50%] lg:object-[0px_0px] xl:w-2/3 xl:object-[0px_0px]"
				src="/landingImage.png"
				alt="Landing Page Image"
				width={2000}
				height={680}
			/>
		</section>
	);
};

export default Hero;
