import { Metadata } from "next";
import FuneralImage from "../components/FuneralAssistance/FuneralImage";
import FuneralContent from "../components/FuneralAssistance/FuneralContent";

export const metadata: Metadata = {
	title: "Funeral Assistance",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Funeral Assistance, Health Insurance, Health Services, Funeral Assistance FL, Funeral Assistance Broward, Funeral Assistance Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<FuneralImage />
				<FuneralContent />
			</div>
		</main>
	);
}
