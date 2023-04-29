"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
const TopNav = () => {
	return (
		<div className="flex w-full flex-col items-center">
			<Toaster
				toastOptions={{ duration: 10000, className: "bg-purple text-white" }}
			/>
			<div className="flex w-full flex-row items-center justify-end bg-neutral-100 sm:h-8">
				<div className="flex w-full flex-col items-center justify-center p-0 sm:h-8 sm:flex-row sm:justify-end sm:gap-4 sm:pr-3">
					<span className="whitespace-nowrap text-sm font-semibold text-black">
						Hours: 9am - 5pm
					</span>
					<motion.a
						initial={{ x: 100, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								duration: 0.5,
							},
						}}
						className="flex flex-row items-center gap-2 p-1"
						href="tel:+17864447717"
						whileHover={{
							scale: 1.05,
							transition: {
								duration: 0.2,
							},
						}}
					>
						<Image
							className="h-6 w-6"
							src="/phone.png"
							alt="phone icon"
							width={24}
							height={24}
						/>
						<span className="whitespace-nowrap text-sm font-semibold text-black">
							Call 1+(786)-444-7717
						</span>
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
