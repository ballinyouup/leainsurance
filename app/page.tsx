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
				<section className="flex w-full flex-col items-center justify-center gap-8 px-5 pt-8 lg:p-8">
					<span className="z-10 w-full max-w-md rounded-xl bg-teal-900 p-4 text-center text-4xl font-bold uppercase text-white shadow-[5px_5px_5px] shadow-black">
						Meet The Team
					</span>
					<div className="z-10 grid h-fit w-fit grid-cols-2 items-start gap-8 rounded-lg bg-background p-6 lg:grid-cols-4">
						<div className="flex flex-col gap-4">
							<AspectRatio ratio={3 / 4}>
								<Image
									src={"/LuisaPolanco.jpg"}
									alt={"Luisa Polanco Picture"}
									fill
									className="rounded-lg"
									quality={100}
								/>
							</AspectRatio>
							<div>
								<h3 className="text-xl font-bold">Luisa Polanco</h3>
								<span className="text-base text-primary sm:text-lg lg:w-192">
									VP of Sales & Marketing
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<AspectRatio ratio={3 / 4}>
								<Image
									src={"/delia.jpg"}
									alt={"Delia Huici Picture"}
									fill
									className="rounded-lg"
									quality={100}
								/>
							</AspectRatio>
							<div>
								<h3 className="text-xl font-bold">Delia Huici</h3>
								<span className="text-base text-primary sm:text-lg lg:w-192">
									Manager of Sales & Marketing
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<AspectRatio ratio={3 / 4}>
								<Image
									src={"/KimberlyCruz.jpg"}
									alt={"Kimberly Cruz Picture"}
									fill
									className="rounded-lg"
									quality={100}
								/>
							</AspectRatio>
							<div>
								<h3 className="text-xl font-bold">Kimberly Cruz</h3>
								<span className="text-base text-primary sm:text-lg lg:w-192">
									Agent
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<AspectRatio ratio={3 / 4}>
								<Image
									src={"/AshleyLegros.jpg"}
									alt={"Ashley Legros Picture"}
									fill
									className="rounded-lg"
									quality={100}
								/>
							</AspectRatio>
							<div>
								<h3 className="text-xl font-bold">Ashley Legros</h3>
								<span className="text-base text-primary sm:text-lg lg:w-192">
									Agent
								</span>
							</div>
						</div>
					</div>
				</section>
				<Separator />
				<Contact />
				<Waves />
			</div>
		</main>
	);
}
