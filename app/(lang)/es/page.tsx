import Hero from "./components/home/home-hero";
import TextSection from "./components/home/home-text";
import { Metadata } from "next";
import Contact from "./components/home/home-contact";
import WhySection from "./components/home/home-why";
import { Separator } from "$/separator";
import Cards from "./components/home/home-card";
import Waves from "./components/home/home-waves";
export const metadata: Metadata = {
	title: "L.E.A Insurance",
	description:
		"En L.E.A Insurance, entendemos la importancia de la buena salud y la seguridad financiera. Es por eso que ofrecemos una variedad de opciones de seguro, que incluyen Obamacare, Medicare, gastos finales y seguro de vida. Nuestro compromiso con la excelencia en el servicio al cliente significa que puede confiar en nosotros para atender todas sus necesidades de seguros.",
	keywords: [
		"Obamacare, Medicare, Seguro de vida, Gastos finales, Agencia de seguros médicos, Cómo obtener Medicare, Cómo obtener Obamacare, Cómo obtener ACA, Cómo obtener un seguro de vida, Cómo obtener gastos finales, Seguro médico en Miami, Seguro médico en Florida, Salud Seguros Broward, Seguros de salud West Palm, Servicios de salud, Servicios de salud Miami, Servicios de salud Broward, Servicios de salud West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Seguros de salud Miami, Seguros de salud Broward, Seguros de vida Broward, Seguro de vida Miami, Seguro de vida Cómo, Seguro de vida Miami Beach, Gastos finales Miami, Gastos finales Broward, Gastos finales West Palm",
	],
};

export default function Page() {
	return (
		<>
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
					<Contact />
					<Waves />
				</div>
			</main>
		</>
	);
}
