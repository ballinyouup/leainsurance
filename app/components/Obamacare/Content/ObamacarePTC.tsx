import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacarePTC = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Premium Tax Credits
			</div>
			<span>
				Premium tax credits are a type of cost assistance that help lower your
				monthly premium for an Obamacare plan. The amount of your premium tax
				credit depends on your household income, family size, and the cost of
				health plans in your area. You can choose to receive your premium tax
				credit in advance to lower your monthly premium payments or claim it
				when you file your federal income tax return.
			</span>
			<ul className="list-disc">
				<span>
					To qualify for premium tax credits, you must meet the following
					criteria:
				</span>
				<li className="ml-6">
					You have a household income between 100% and 400% of the FPL
					($13,590-$54,360 for an individual or $27,750-$111,000 for a family of
					four in 2023).
				</li>
				<li className="ml-6">
					You are not eligible for other affordable health coverage, such as
					employer-sponsored insurance, Medicare, Medicaid, or CHIP.
				</li>
				<li className="ml-6">
					You enroll in a health plan through the Marketplace.
				</li>
			</ul>
            <ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacarePTC;
