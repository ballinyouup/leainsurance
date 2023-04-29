import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareAdditional = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
				<span>ADDITIONAL</span>
				<span>BENEFITS</span>
			</div>
			<div className="flex flex-col gap-4 text-lg">
				<ul className="list-disc">
					<span>
						Some Medicare Advantage plans offer additional benefits that
						Original Medicare does not cover. These benefits may vary by plan
						and provider. Some examples of additional benefits are:
					</span>
					<li className="ml-6">
						Dental care: This covers preventive and restorative dental services,
						such as exams, cleanings, fillings, crowns, and dentures.
					</li>
					<li className="ml-6">
						Vision care: This covers eye exams, glasses, contacts, and cataract
						surgery.
					</li>
					<li className="ml-6">
						Hearing aids: This covers hearing tests, hearing aids, and hearing
						aid batteries.
					</li>
					<li className="ml-6">
						Wellness programs: These are programs that help you improve your
						health and well-being, such as fitness classes, health coaching,
						nutrition counseling, and chronic disease management.
					</li>
					<li className="ml-6">
						Transportation: This covers rides to and from medical appointments,
						pharmacies, or other health-related locations.
					</li>
					<li className="ml-6">
						Over-the-counter (OTC) items: This covers certain non-prescription
						drugs and health-related items, such as pain relievers, vitamins,
						bandages, and thermometers.
					</li>
					<li className="ml-6">
						Meal delivery: This covers home-delivered meals after a hospital
						stay or for certain chronic conditions.
					</li>
					<li className="ml-6">
						Home modifications: This covers changes to your home to make it
						safer and more accessible, such as ramps, grab bars, or stair lifts.
					</li>
					<span>
						To find out what additional benefits your MA plan offers, you can
						check your plan's summary of benefits, evidence of coverage, or
						website. You can also compare different MA plans and their
						additional benefits using the Medicare Plan Finder tool. You should
						also check if your plan has any rules or limitations for using these
						additional benefits, such as prior authorization, network
						restrictions, or quantity limits.
					</span>
				</ul>
			</div>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareAdditional;
