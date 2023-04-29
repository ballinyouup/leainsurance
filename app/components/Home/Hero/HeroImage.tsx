import Image from "next/image";

const HeroImage = () => {
	return (
		<Image
			className="absolute -top-20 h-[750px] w-full object-cover object-[-275px_0px] brightness-[35%] sm:brightness-[50%] md:object-[-100px_0px] lg:object-[0px_0px] xl:object-[0px_-20px]"
			src="/landingImage.png"
			alt="Landing Page Image"
			width={800}
			height={1000}
			unoptimized
		/>
	);
};

export default HeroImage;
