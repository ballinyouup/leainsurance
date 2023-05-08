import Image from "next/image";

interface IWhyCard {
	alt: string;
	src: string;
	title: string;
	text: string;
}

const WhyCard: React.FC<IWhyCard> = ({ alt, src, title, text }) => {
	return (
		<div className="flex w-full max-w-lg flex-col gap-2 rounded-lg border border-black border-opacity-30 bg-white p-6 lg:h-80 lg:w-80">
			<div className="w-fit rounded-lg border border-black bg-teal-800 p-2">
				<Image
					className="h-6 w-6 invert"
					alt={alt}
					width={24}
					height={24}
					src={src}
				/>
			</div>

			<span className="text-xl font-bold text-black">{title}</span>
			<span className="text-base text-black">{text}</span>
		</div>
	);
};

export default WhyCard;
