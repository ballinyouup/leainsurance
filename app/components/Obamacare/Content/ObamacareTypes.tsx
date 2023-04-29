import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacareTypes = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Types of</span>
				<span>Health Plans</span>
			</div>
			<p>
				<span>
					Obamacare offers four types of health plans: bronze, silver, gold, and
					platinum. These plans differ in how much they cover and how much you
					pay out of pocket. Generally, bronze plans have the lowest premiums
					but the highest deductibles and copayments, while platinum plans have
					the highest premiums but the lowest deductibles and copayments. Silver
					plans are the most popular because they are eligible for both premium
					tax credits and cost-sharing reduction subsidies.
				</span>
				<ul className="list-disc">
					<span>
						All Obamacare plans must cover 10 essential health benefits:
					</span>
					<li className="ml-6">Ambulatory patient services</li>
					<li className="ml-6">Emergency services</li>
					<li className="ml-6">Maternity and newborn care</li>
					<li className="ml-6">
						Mental health and substance use disorder services
					</li>
					<li className="ml-6">Prescription drugs</li>
					<li className="ml-6">
						Rehabilitative and habilitative services and devices
					</li>
					<li className="ml-6">Laboratory services</li>
					<li className="ml-6">
						Preventive and wellness services and chronic disease management
					</li>
					<li className="ml-6">
						Pediatric services, including oral and vision care
					</li>
					<span>
						All Obamacare plans must also cover preventive services at no cost
						to you, such as screenings, immunizations, counseling, and
						check-ups. Additionally, all Obamacare plans must cover pre-existing
						conditions without charging you more or denying you coverage.
					</span>
				</ul>
			</p>
			<ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacareTypes;
