import Hero from "./components/home/home-hero";
import TextSection from "./components/home/home-text";
import { Metadata } from "next";
import ContactSection from "./components/home/home-contact";
import WhySection from "./components/home/home-why";
import Divider from "./components/ui/divider";
import Image from "next/image";
import Cards from "./components/home/home-card";
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
				<Divider />
				<Cards />
				<WhySection />
				<section className="flex w-full flex-col items-center justify-center gap-8 px-5 pt-8 lg:p-8">
					<span className="z-10 w-full max-w-md rounded-xl bg-teal-900 p-4 text-center text-4xl font-bold uppercase text-white shadow-[5px_5px_5px] shadow-black">
						Meet your Agents
					</span>
					<div className="z-10 flex w-fit max-w-5xl flex-col items-center gap-12 rounded-lg bg-white p-8 lg:w-full lg:flex-row">
						<Image
							src={"/delia.jpg"}
							alt={"Delia Huici Picture"}
							width={200}
							height={200}
							className="rounded-lg"
						/>
						<div className="w-full max-w-md lg:max-w-lg">
							<h3 className="text-2xl font-bold">Delia Huici</h3>
							<span className="text-base text-black sm:text-lg lg:w-192">
								Meet Delia Huici, a licensed insurance agent with expertise in
								Life Insurance, Medicare/Medicaid, Obamacare, and Funeral
								Assistance. With over 20 years of experience in the healthcare
								industry, Delia is dedicated to helping clients obtain the best
								insurance coverage possible. Trustworthy and knowledgeable, she
								can assist you in choosing the right insurance plan and provide
								guidance with claims. Contact Delia today to learn more about
								her services.
							</span>
						</div>
					</div>
				</section>
				<Divider white />
				<ContactSection />
				<Image
					src="/wave1.svg"
					alt="waves"
					width={1000}
					height={800}
					className="absolute -left-80 top-0 z-0 hidden sm:top-[500px] sm:block lg:-left-0"
				/>
				<div className="absolute -right-48 z-0 hidden w-[600px] overflow-clip sm:top-[875px] lg:block">
					<Image src="/wave2.svg" alt="waves" width={800} height={600} />
				</div>
			</div>
		</main>
	);
}
