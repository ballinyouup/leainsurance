import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacareAdditional = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Additional Benefits
			</div>
			<span>
				Some Obamacare plans may offer additional benefits that are not required
				by law but may enhance your health and well-being. These benefits may
				include:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					Dental coverage: This benefit covers preventive, basic, and major
					dental services, such as exams, cleanings, fillings, crowns, and
					implants. Some plans may also cover orthodontia for children under 19.
				</li>
				<li className="ml-6">
					Vision coverage: This benefit covers eye exams, glasses, and contact
					lenses. Some plans may also cover eye surgeries, such as LASIK or
					cataract removal.
				</li>
				<li className="ml-6">
					Wellness programs: These programs provide incentives or rewards for
					participating in healthy activities, such as exercise, nutrition
					counseling, smoking cessation, or stress management.
				</li>
				<li className="ml-6">
					Telehealth services: These services allow you to access health care
					providers remotely through phone, video, or online platforms. You can
					use telehealth services for primary care, urgent care, mental health
					care, or specialty care.
				</li>
				<li className="ml-6">
					COVID-19 benefits: Some plans may offer additional benefits related to
					the COVID-19 pandemic, such as free testing, treatment, and
					vaccination; waived cost-sharing for telehealth services; extended
					grace periods for premium payments; or home delivery of prescription
					drugs.
				</li>
			</ul>
            <ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacareAdditional;
