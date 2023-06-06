import Hero from "./components/home/home-hero";
import TextSection from "./components/home/home-text";
import Contact from "./components/home/home-contact";
import WhySection from "./components/home/home-why";
import { Separator } from "$/separator";
import Cards from "./components/home/home-card";
import Waves from "./components/home/home-waves";

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="relative flex h-full w-full flex-col overflow-clip pb-6 sm:pb-0 md:max-w-9xl">
				<Hero />
				<TextSection />
				<div className="flex w-full items-center justify-center">
					<Separator className="hidden max-w-xl lg:block" />
				</div>
				<Cards />
				<WhySection />
				<Separator />
				<Contact />
				<Waves />
			</div>
		</main>
	);
}
