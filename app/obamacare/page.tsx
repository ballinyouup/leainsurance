import { Metadata } from "next";
import ObamacareContent from "../components/Obamacare/ObamacareContent";
import ObamacareImage from "../components/Obamacare/ObamacareImage";

export const metadata: Metadata = {
	title: "Obamacare",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Health Insurance, Health Services, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<ObamacareImage />
				<ObamacareContent />
			</div>
		</main>
	);
}
