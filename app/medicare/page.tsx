import { Metadata } from "next";
import MedicareImage from "../components/Medicare/MedicareImage";
import MedicareContent from "../components/Medicare/MedicareContent";

export const metadata: Metadata = {
	title: "Medicare",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Medicare, Health Insurance, Health Services, Medicare FL, Medicare Broward, Medicare Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<MedicareImage />
				<MedicareContent />
			</div>
		</main>
	);
}
