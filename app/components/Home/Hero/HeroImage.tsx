import Image from "next/image";

const HeroImage = () => {
	return (
		<Image
			className="absolute -top-20 h-[600px] w-fit self-end object-cover object-[-150px_0px] brightness-[35%] sm:brightness-[35%] md:object-[0px_0px] md:brightness-[50%] lg:object-[0px_0px] xl:w-2/3 xl:object-[0px_0px]"
			src="/landingImage.png"
			alt="Landing Page Image"
			width={800}
			height={940}
			unoptimized
		/>
	);
};

export default HeroImage;
