import Hero from "./components/Home/Hero/Hero";
import HomeCardSection from "./components/Home/CardSection/HomeCardSection";
import TextSection from "./components/Home/TextSection/TextSection";
import { Metadata } from "next";
import ContactSection from "./components/Home/ContactSection/ContactSection";
import WhySection from "./components/Home/WhySection/WhySection";
import AboutSection from "./components/Home/AboutSection/AboutSection";
import Divider from "./components/Divider/Divider";

export const metadata: Metadata = {
	title: "Lea Insurance",
	description:
		"At Lea Insurance, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Medicare, Life Insurance, Funeral Assistance, Health Insurance Agency, How to get Medicare, How to get Obamacare, How to get ACA, how to get Life Insurance, How to get Funeral Assistance, Health Insurance Miami, Health Insurance FL, Health Insurance Broward, Health Insurance West Palm, Health Services, Health Services Miami, Health Services Broward, Health Services West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward, Life Insurance Broward, Life Insurance Miami, Life Insurance How to, Life Insurance Miami Beach, Funeral Assistance Miami, Funeral Assistance Broward, Funeral Assistance West Palm",
	],
};

export default function Page() {
	return (
		<main className="flex h-full w-full items-center justify-center">
			<div className="flex h-full w-full flex-col pb-6 sm:pb-0 md:max-w-9xl">
				<Hero />
				<TextSection />
				<Divider />
				<HomeCardSection />
				<WhySection />
				<AboutSection />
				<Divider />
				<ContactSection />
			</div>
		</main>
	);
}
