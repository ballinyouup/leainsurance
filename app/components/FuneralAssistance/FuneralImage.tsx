import Image from "next/image";

const FuneralImage = () => {
	return (
		<div className="relative h-40 w-full overflow-hidden bg-black bg-opacity-50 sm:h-64">
			<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
				<span>FUNERAL</span>
				<span>ASSISTANCE</span>
			</div>
			<Image
				alt="Funeral Assistance Image"
				className="relative -left-20 -top-24 w-full min-w-[1200px] mix-blend-soft-light brightness-50"
				src="/familyreal.jpg"
				width={600}
				height={600}
				unoptimized
			/>
		</div>
	);
};

export default FuneralImage;
