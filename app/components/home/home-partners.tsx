"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
	return (
		<section className="flex h-full w-full items-center justify-center p-5">
			<div className="z-10 flex h-36 w-full max-w-5xl flex-col items-center justify-center self-center overflow-hidden rounded-lg bg-white">
				<motion.div
					animate={{ x: [-800, 800] }}
					transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
					className="flex w-fit flex-nowrap items-center justify-center gap-10 rounded-lg"
				>
					<Image
						src={"/insurance/humana.png"}
						alt={"Humana"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/molina.png"}
						alt={"Molina"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/oscar.png"}
						alt={"Oscar"}
						width={320}
						height={120}
						quality={100}
					/>
					<Image
						src={"/insurance/aetna.png"}
						alt={"Aetna"}
						width={360}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/cigna.png"}
						alt={"Cigna"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/avmed.png"}
						alt={"AvMed"}
						width={240}
						height={80}
						quality={100}
					/>
					<Image
						src={"/insurance/ambetter.png"}
						alt={"Ambetter"}
						width={120}
						height={120}
						quality={100}
					/>
					<Image
						src={"/insurance/devoted.png"}
						alt={"Devoted"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/Doctors.png"}
						alt={"Doctors"}
						width={320}
						height={120}
						quality={100}
					/>
					<Image
						src={"/insurance/floridablue.png"}
						alt={"Florida Blue"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/healthsun.png"}
						alt={"Health Sun"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/simply.png"}
						alt={"Simply"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/united.png"}
						alt={"United"}
						width={320}
						height={160}
						quality={100}
					/>
					<Image
						src={"/insurance/wellcare.png"}
						alt={"Wellcare"}
						width={320}
						height={120}
						quality={100}
					/>
				</motion.div>
			</div>
		</section>
	);
}
