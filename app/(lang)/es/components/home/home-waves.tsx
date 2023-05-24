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
			<div className="absolute -right-48 z-10 hidden w-[600px] overflow-clip sm:top-[2577px] lg:block">
				<Image src="/wave2.svg" alt="waves" width={800} height={600} />
			</div>
		</>
	);
};

export default Waves;
