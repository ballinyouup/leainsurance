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
				<section className="flex w-full flex-col items-center justify-center gap-8 bg-tealPrimary px-5 pt-8 lg:p-8">
					<div className="z-10 grid h-full w-full max-w-6xl grid-cols-2 items-center gap-8 rounded-lg bg-white p-6 max-[530px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
						<div className="hidden h-32 flex-col items-center justify-center gap-4 rounded-lg bg-accent lg:flex">
							<span className="p-3 text-3xl font-bold uppercase text-primary-foreground text-white">
								Our Insurance Providers:
							</span>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center sm:w-48 lg:w-full">
							<AspectRatio ratio={16 / 4}>
								<Image
									src={"/insurance/humana.png"}
									alt={"Humana"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={12 / 4}>
								<Image
									src={"/insurance/molina.png"}
									alt={"Molina"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={16 / 4}>
								<Image
									src={"/insurance/oscar.png"}
									alt={"Oscar"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={16 / 4}>
								<Image
									src={"/insurance/aetna.png"}
									alt={"Aetna"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={8 / 4}>
								<Image
									src={"/insurance/cigna.png"}
									alt={"Cigna"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={11 / 4}>
								<Image
									src={"/insurance/AvMed.png"}
									alt={"AvMed"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={8 / 4}>
								<Image
									src={"/insurance/ambetter.png"}
									alt={"Ambetter"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={10 / 4}>
								<Image
									src={"/insurance/devoted.png"}
									alt={"Devoted"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={16 / 4}>
								<Image
									src={"/insurance/Doctors.png"}
									alt={"Doctors"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={8 / 4}>
								<Image
									src={"/insurance/floridablue.png"}
									alt={"Florida Blue"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={8 / 4}>
								<Image
									src={"/insurance/healthsun.png"}
									alt={"Health Sun"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={12 / 4}>
								<Image
									src={"/insurance/simply.png"}
									alt={"Simply"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-48 flex-col gap-4 max-[530px]:justify-self-center lg:w-full">
							<AspectRatio ratio={8 / 4}>
								<Image
									src={"/insurance/united.png"}
									alt={"United"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-40 flex-col gap-4 max-[530px]:justify-self-center lg:w-1/2 lg:justify-self-center">
							<AspectRatio ratio={4 / 4}>
								<Image
									src={"/insurance/wellcare.png"}
									alt={"Wellcare"}
									fill
									quality={100}
								/>
							</AspectRatio>
						</div>
						<div className="flex w-40 flex-col gap-4 rounded-lg max-md:hidden lg:justify-self-center lg:bg-accent">
							<AspectRatio ratio={4 / 4}>
								<Image
									src={"/insurance/more.png"}
									alt={"More"}
									fill
									quality={100}
									className="lg:invert"
								/>
							</AspectRatio>
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
