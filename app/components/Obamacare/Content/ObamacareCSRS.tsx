import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacareCSRS = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Cost-Sharing</span>
				<span>Reduction Subsidies</span>
			</div>
			<span>
				Cost-sharing reduction subsidies are another type of cost assistance
				that help lower your out-of-pocket costs for an Obamacare plan. These
				subsidies reduce your deductibles, copayments, coinsurance, and
				out-of-pocket maximums. The amount of your cost-sharing reduction
				subsidy depends on your household income and the type of plan you
				choose.
			</span>
			<ul className="list-disc">
				<span>
					To qualify for cost-sharing reduction subsidies, you must meet the
					following criteria:
				</span>
				<li className="ml-6">
					You have a household income between 100% and 250% of the FPL
					($13,590-$33,975 for an individual or $27,750-$69,375 for a family of
					four in 2023).
				</li>
				<li className="ml-6">
					You enroll in a silver plan through the Marketplace.
				</li>
			</ul>
            <ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacareCSRS;
