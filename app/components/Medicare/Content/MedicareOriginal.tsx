import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareOriginal = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
				<span>ORIGINAL</span>
				<span>MEDICARE</span>
			</div>
			<div className="flex flex-col gap-4">
				<span className="text-xl font-bold">
					Original Medicare consists of two parts:
				</span>
				<ul className="ml-8 list-disc">
					<li>Part A (Hospital Insurance)</li>
					<li>Part B (Medical Insurance)</li>
				</ul>
				<span className="text-xl font-bold">Part A (Hospital Insurance)</span>
				<span>
					Part A covers inpatient hospital care, skilled nursing facility care,
					hospice care, and some home health care services. Most people do not
					pay a premium for Part A if they or their spouse paid Medicare taxes
					while working for at least 10 years (40 quarters).
				</span>
				<span>
					Most people do not pay a monthly premium for Part A if they or their
					spouse paid Medicare taxes while working. However, if you do not
					qualify for premium-free Part A, you can buy it for up to $506 per
					month in 2023. The annual deductible for Part A is $1,556 in 2023.
				</span>
				<span className="text-xl font-bold"> Part B (Medical Insurance)</span>
				<span>
					Part B covers medically necessary services and preventive services,
					such as doctor visits, outpatient care, medical equipment, and some
					home health care services. Part B requires a monthly premium, which is
					typically deducted from your Social Security benefits.
				</span>
				<span>
					Everyone pays a monthly premium for Part B. The standard premium
					amount is $164.90 per month in 2023. However, if your income is above
					a certain level, you may pay more due to the income-related monthly
					adjustment amount (IRMAA). The annual deductible for Part B is $226 in
					2023.
				</span>
				<span>
					After you pay your deductible, you usually pay 20% of the
					Medicare-approved amount for covered services. This is called
					coinsurance. You may also pay a fixed amount called a copayment for
					some services.
				</span>
				<span>
					Original Medicare does not cover everything. For example, it does not
					cover prescription drugs, dental care, vision care, hearing aids,
					long-term care, or cosmetic surgery. You may need to buy additional
					coverage or pay out-of-pocket for these services.
				</span>
			</div>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareOriginal;
