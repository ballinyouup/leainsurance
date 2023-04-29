import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamcareMedicaid = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Medicaid Expansion</span>
				<span>& CHIP</span>
			</div>
			<span>
				Medicaid is a joint federal-state program that provides health coverage
				to low-income people, children, pregnant women, seniors, and people with
				disabilities. CHIP is a similar program that covers children and some
				pregnant women who have slightly higher incomes than Medicaid. Both
				programs are administered by states within federal guidelines and offer
				comprehensive benefits at little or no cost to enrollees.
			</span>
			<span>
				The ACA expanded Medicaid eligibility to nearly all adults with incomes
				up to 138% of the FPL ($18,754 for an individual or $38,295 for a family
				of four in 2023). However, the Supreme Court ruled that states could
				choose whether or not to adopt the expansion. As of January 2023, 41
				states (including DC) have adopted the Medicaid expansion and 10 states
				have not. The federal government pays 90% of the cost of covering the
				expansion population.
			</span>
			<span>
				Some states that have not adopted the Medicaid expansion have pursued
				alternative approaches to expand coverage to low-income adults, such as
				Section 1115 waivers that impose work requirements, premiums,
				copayments, or other conditions on eligibility or benefits. However,
				these waivers have faced legal challenges and have been withdrawn by CMS
				under the Biden Administration.
			</span>
			<span>
				The ARPA included a two-year fiscal incentive for non-expansion states
				to adopt the Medicaid expansion by increasing their regular federal
				matching rate by 5 percentage points for two years. So far, only North
				Carolina has taken up this offer and approved Medicaid expansion in
				March 2023, with coverage expected to begin in July 2023. Other
				non-expansion states may consider adopting the expansion in 2023 through
				legislative action or ballot initiatives.
			</span>
            <ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamcareMedicaid;
