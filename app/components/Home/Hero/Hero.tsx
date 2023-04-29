import HeroButton from "../Hero/HeroButton";
import HeroImage from "../Hero/HeroImage";
import HeroSubtitle from "../Hero/HeroSubtitle";
import HeroTitle from "../Hero/HeroTitle";

const Hero = () => {
	return (
		<section className="bg-[rgb(18,50,117) relative flex h-96 w-full flex-col items-center justify-start overflow-hidden max-[440px]:h-[500px] sm:bg-[rgb(18,50,117)]">
			<div className="absolute top-0 z-10 flex h-full w-full max-w-5xl flex-col items-center gap-5 lg:items-start">
				<div className="flex h-full w-full max-w-xl flex-col justify-center gap-4 px-5">
					<HeroTitle />
					<HeroSubtitle />
					<HeroButton />
				</div>
			</div>
			<HeroImage />
		</section>
	);
};

export default Hero;
