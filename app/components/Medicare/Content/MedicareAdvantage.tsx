import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareAdvantage = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
				<span>MEDICARE</span>
				<span>ADVANTAGE</span>
			</div>
			<div className="flex flex-col gap-4 text-lg">
				<span>
					Medicare Advantage (MA) is an alternative way of getting Medicare
					coverage. It is offered by private insurance companies that contract
					with Medicare to provide all the benefits of Part A and Part B. Most
					MA plans also include Part D (prescription drug coverage) and offer
					extra benefits such as dental care, vision care, hearing aids,
					wellness programs, and more.
				</span>
				<span>
					MA plans vary in terms of costs and benefits. You may pay a monthly
					premium for your MA plan in addition to your Part B premium. You may
					also pay deductibles, copayments, coinsurance, and out-of-pocket
					limits for your MA plan. These costs depend on the plan you choose and
					the services you use.
				</span>
				<span>
					You must follow the rules of your MA plan to get covered services. For
					example, you may need to use providers in your plan’s network, get
					referrals from your primary care provider (PCP), or get prior
					authorization for certain services.
				</span>
				<span>
					You can enroll in an MA plan during your IEP or OEP or during a
					special enrollment period (SEP) if you qualify for one. Some examples
					of SEPs are when you move out of your plan’s service area, lose your
					employer-sponsored coverage, or have a change in your Medicaid or
					Extra Help status. You can also switch from one MA plan to another
					during the Medicare Advantage open enrollment period (MA OEP), which
					runs from January 1 to March 31 each year. During this time, you can
					also switch from an MA plan to Original Medicare and join a Part D
					plan. However, you cannot switch from Original Medicare to an MA plan
					during the MA OEP.
				</span>
			</div>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareAdvantage;
