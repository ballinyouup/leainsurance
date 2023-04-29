import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareCosts = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
				<span>Costs &</span>
				<span>Coverage</span>
			</div>
			<div>
				<ul className="flex list-disc flex-col gap-4 text-lg">
					<span>
						Medicare costs and benefits can vary depending on the coverage you
						select. Original Medicare has deductibles,copayments, and
						coinsurance, while Medicare Advantage and Medigap plans may have
						different cost-sharing structures. Here's a brief overview of some
						common costs and benefits associated with Medicare:
					</span>
					<span className="text-xl font-bold">Part A:</span>
					<li className="ml-6">
						Premiums: These are monthly payments that you make to have Medicare
						coverage. You may pay premiums for Part A (if you do not qualify for
						premium-free Part A), Part B, Part D, MA, and Medigap plans. The
						amount of your premium depends on the plan you choose and your
						income level.
					</li>
					<span className="text-xl font-bold">Part B:</span>
					<li className="ml-6">
						Deductibles: These are amounts that you pay out-of-pocket before
						your Medicare coverage begins to pay. You may pay deductibles for
						Part A, Part B, Part D, MA, and Medigap plans. The amount of your
						deductible depends on the plan you choose.
					</li>
					<span className="text-xl font-bold">Medigap Costs:</span>
					<li className="ml-6">
						Copayments: These are fixed amounts that you pay for each service or
						item you get. You may pay copayments for Part A, Part B, Part D, MA,
						and Medigap plans. The amount of your copayment depends on the plan
						you choose and the service or item you get.
					</li>
					<li className="ml-6">
						Coinsurance: These are percentages of the cost that you pay for each
						service or item you get. You may pay coinsurance for Part A, Part B,
						Part D, MA, and Medigap plans. The amount of your coinsurance
						depends on the plan you choose and the service or item you get.
					</li>
					<li className="ml-6">
						Out-of-pocket limits: These are maximum amounts that you pay
						out-of-pocket for covered services in a year. Once you reach your
						out-of-pocket limit, your plan pays 100% of the cost for covered
						services for the rest of the year. You may have out-of-pocket limits
						for Part D and MA plans. The amount of your out-of-pocket limit
						depends on the plan you choose.
					</li>
					<span>
						The benefits of Medicare depend on the type of coverage you have and
						the services you need. In general, you can expect to get some or all
						of the following benefits from Medicare:
					</span>
					<li className="ml-6">
						Hospital insurance: This covers inpatient hospital stays, skilled
						nursing facility care, hospice care, and some home health care. You
						get this benefit from Part A or MA plans.
					</li>
					<li className="ml-6">
						Medical insurance: This covers doctor visits, outpatient services,
						preventive care, durable medical equipment, and some home health
						care. You get this benefit from Part B or MA plans.
					</li>
					<li className="ml-6">
						Prescription drug coverage: This covers prescription medications and
						some vaccines. You get this benefit from Part D or MA plans that
						include drug coverage.
					</li>
					<li className="ml-6">
						Supplemental insurance: This covers some of the costs that Original
						Medicare does not cover, such as deductibles, coinsurance,
						copayments, and foreign travel emergency care. You get this benefit
						from Medigap plans.
					</li>
					<li className="ml-6">
						Additional benefits: These are extra benefits that some MA plans
						offer beyond what Original Medicare covers, such as dental care,
						vision care, hearing aids, wellness programs, and more.
					</li>
				</ul>
			</div>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareCosts;
