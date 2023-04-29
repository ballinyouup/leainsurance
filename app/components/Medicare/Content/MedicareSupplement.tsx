import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareSupplement = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Medicare</span>
				<span>Supplement</span>
			</div>
			<span>
				Medicare Supplement (also known as Medigap) is a type of private
				insurance that can help you pay for some of the costs that Original
				Medicare does not cover, such as deductibles, coinsurance, copayments,
				and foreign travel emergency care. Medigap plans are standardized and
				regulated by the federal and state governments. There are 10 different
				Medigap plans available, each identified by a letter (A, B, C, D, F, G,
				K, L, M, and N). Each plan offers a different level of coverage and
				benefits.
			</span>
			<span>
				To enroll in a Medigap plan, you must have Medicare Part A and Part B.
				You can buy a Medigap plan from any insurance company that is licensed
				to sell it in your state. The best time to buy a Medigap plan is during
				your Medigap open enrollment period, which is a six-month period that
				starts the month you turn 65 and enroll in Part B. During this period,
				you have a guaranteed issue right to buy any Medigap plan that is sold
				in your state, regardless of your health status or pre-existing
				conditions. You cannot be charged more or denied coverage based on your
				health.
			</span>
			<span>
				If you miss your Medigap open enrollment period, you may still be able
				to buy a Medigap plan, but you may have to go through medical
				underwriting and pay a higher premium or be denied coverage based on
				your health. However, there are some situations where you may have a
				guaranteed issue right to buy a Medigap plan outside of your open
				enrollment period, such as when you lose your employer-sponsored
				coverage or when you switch from a Medicare Advantage plan to Original
				Medicare.
			</span>
			<span>
				The cost of a Medigap plan depends on several factors, such as the plan
				you choose, the insurance company you buy from, your age, your location,
				and whether you qualify for any discounts. You will pay a monthly
				premium for your Medigap plan in addition to your Part B premium. You
				may also pay deductibles, copayments, coinsurance, and out-of-pocket
				limits for your Medigap plan. These costs vary by plan and provider.
			</span>
			<span>
				Medigap plans do not cover everything. For example, they do not cover
				prescription drugs, long-term care, dental care, vision care, hearing
				aids, or private-duty nursing. You may need to buy additional coverage
				or pay out-of-pocket for these services.
			</span>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareSupplement;
