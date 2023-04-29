import HomeCard from "./HomeCard";

const HomeCardSection = () => {
	const cards = [
		{
			src: "/image1.jpg",
			alt: "Medicare Image",
			text: "Medicare",
			href: "/medicare",
			image: {
				src: "/medicareIcon.png",
				alt: "Medicare Icon",
			},
		},
		{
			src: "/image2.jpg",
			alt: "Obamacare Image",
			text: "Obamacare",
			href: "/obamacare",
			image: {
				src: "/obamacareIcon.png",
				alt: "Obamacare Icon",
			},
		},
		{
			src: "/image3.jpg",
			alt: "Life Insurance Image",
			text: "Life Insurance",
			href: "/life-insurance",
			image: {
				src: "/lifeInsuranceIcon.png",
				alt: "Life Insurance Icon",
			},
		},
		{
			src: "/image4.jpg",
			alt: "Funeral Assistance Image",
			text: "Funeral Assistance",
			href: "/funeral-assistance",
			image: {
				src: "/funeralAssistanceIcon.png",
				alt: "Funeral Assistance Icon",
			},
		},
	];

	return (
		<section className="pb-12 lg:p-10">
			<div className="grid h-full w-full grid-cols-[repeat(2,240px)] items-center justify-center gap-4 overflow-hidden max-[505px]:grid-cols-[repeat(1,240px)] lg:grid-cols-[repeat(4,240px)] lg:gap-6">
				{cards.map((card, index) => {
					return (
						<HomeCard
							key={index}
							src={card.src}
							alt={card.alt}
							text={card.text}
							href={card.href}
							delay={0.5 * index}
							image={card.image}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default HomeCardSection;
