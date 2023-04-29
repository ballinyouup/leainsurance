import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacareEligibility = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<p className="flex flex-col gap-6 text-lg">
				<span>
					To be eligible for Obamacare, you must be a U.S. citizen or a lawfully
					present immigrant, and you must not be incarcerated.
				</span>
				<span>
					You must also have a household income between 100% and 400% of the
					federal poverty level (FPL) to qualify for premium tax credits, or
					between 100% and 250% of the FPL to qualify for cost-sharing reduction
					subsidies. You can check your eligibility and apply for Obamacare
					through the Health Insurance Marketplace, which is an online platform
					where you can compare and shop for health plans. You can also apply by
					phone, by mail, or in person with the help of a trained assister.
				</span>
				<span>
					The open enrollment period for 2023 health plans starts on November 1,
					2022, and ends on January 15, 2023. During this time, you can enroll
					in a new plan or change your current plan.
				</span>
				<span>
					If you miss the open enrollment deadline, you may still be able to
					enroll in a health plan if you qualify for a special enrollment period
					due to a life event, such as losing other coverage, getting married,
					having a baby, or based on estimated household income. You can also
					enroll in Medicaid or CHIP at any time if you are eligible.
				</span>
			</p>
			<ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacareEligibility;
