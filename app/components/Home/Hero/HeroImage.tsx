import Image from "next/image";

const HeroImage = () => {
	return (
		<Image
			className="absolute -top-20 h-[750px] w-full object-cover object-[-350px_0px] brightness-[35%] sm:object-top sm:brightness-[50%] md:h-[940px] lg:left-48 xl:left-60"
			src="/landingImage.png"
			alt="Landing Page Image"
			width={800}
			height={940}
			unoptimized
		/>
	);
};

export default HeroImage;
