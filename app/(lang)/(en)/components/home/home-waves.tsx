import Image from "next/image";
const Waves = () => {
	return (
		<>
			<Image
				src="/wave1.svg"
				alt="waves"
				width={1000}
				height={800}
				className="absolute top-0 z-0 hidden sm:-left-20 sm:top-[500px] lg:block xl:left-0"
			/>
		</>
	);
};

export default Waves;
