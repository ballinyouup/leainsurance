import Hero from "./components/home/home-hero";
import TextSection from "./components/home/home-text";
import { Metadata } from "next";
import Contact from "./components/home/home-contact";
import WhySection from "./components/home/home-why";
import { Separator } from "$/separator";
import Image from "next/image";
import Cards from "./components/home/home-card";
import Waves from "./components/home/home-waves";
import { AspectRatio } from "./components/shadcn-ui/aspect-ratio";
import Partners from "./components/home/home-partners";
export const metadata: Metadata = {
	title: "L.E.A Insurance",
	description:
		"At L.E.A Insurance, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Medicare, Life Insurance, Funeral Assistance, Health Insurance Agency, How to get Medicare, How to get Obamacare, How to get ACA, how to get Life Insurance, How to get Funeral Assistance, Health Insurance Miami, Health Insurance FL, Health Insurance Broward, Health Insurance West Palm, Health Services, Health Services Miami, Health Services Broward, Health Services West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward, Life Insurance Broward, Life Insurance Miami, Life Insurance How to, Life Insurance Miami Beach, Funeral Assistance Miami, Funeral Assistance Broward, Funeral Assistance West Palm",
	],
};

export default function Page() {
	return (
		<main className="flex h-full w-full items-center justify-center">
			<div className="relative flex h-full w-full flex-col overflow-clip pb-6 sm:pb-0 md:max-w-9xl">
				<Hero />
				<TextSection />
				<div className="flex w-full items-center justify-center">
					<Separator className="hidden max-w-xl lg:block" />
				</div>
				<Cards />
				<WhySection />
				<Separator />
				<Partners />
				<Contact />
				<Waves />
			</div>
		</main>
	);
}
