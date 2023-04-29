import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicarePrescription = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Prescription</span>
				<span>Drug Coverage</span>
			</div>
			<span>
				Prescription drug coverage (also known as Part D) is an optional benefit
				that helps you pay for your prescription medications. Part D plans are
				offered by private insurance companies that contract with Medicare to
				provide drug coverage. You can get Part D coverage either through a
				stand-alone prescription drug plan (PDP) that works with Original
				Medicare or through a Medicare Advantage plan that includes drug
				coverage.
			</span>
			<span>
				To enroll in a Part D plan, you must have Medicare Part A and/or Part B.
				You can join a Part D plan during your initial enrollment period (IEP),
				which is the same as your IEP for Part B. You can also change your Part
				D plan during the annual open enrollment period (OEP), which runs from
				October 15 to December 7 each year.
			</span>
			<span>
				The cost of a Part D plan depends on several factors, such as the plan
				you choose, the drugs you take, the pharmacy you use, and whether you
				qualify for any assistance programs. You will pay a monthly premium for
				your Part D plan in addition to your Part B premium (and any MA or
				Medigap premium). You may also pay deductibles, copayments, coinsurance,
				and out-of-pocket limits for your Part D plan. These costs vary by plan
				and provider.
			</span>
			<span>
				Part D plans have different levels of coverage depending on how much you
				spend on drugs each year. These levels are:
			</span>
			<ul>
				<li>
					The deductible stage: You pay 100% of the cost of your drugs until you
					reach your deductible amount ($480 in 2023).
				</li>
				<li>
					The initial coverage stage: You pay a copayment or coinsurance for
					each drug until you reach the initial coverage limit ($4,430 in 2023).
				</li>
				<li>
					The coverage gap stage: You pay 25% of the cost of brand-name drugs
					and 37% of the cost of generic drugs until you reach the out-of-pocket
					threshold ($7,050 in 2023).
				</li>
				<li>
					The catastrophic coverage stage: You pay a small copayment or
					coinsurance for each drug for the rest of the year.
				</li>
			</ul>
			<span>
				Part D plans do not cover all drugs. Each plan has its own list of
				covered drugs called a formulary. The formulary may change from year to
				year or during the year. You should check the formulary of your Part D
				plan to see if your drugs are covered and what tier they are in. You
				should also check if your plan has any restrictions or requirements for
				your drugs, such as prior authorization, quantity limits, or step
				therapy.
			</span>
			<span>
				Part D plans have a coverage gap (also known as the donut hole) that
				occurs when you and your plan have spent a certain amount on drugs
				($4,430 in 2023). In the coverage gap, you pay 25% of the cost of
				brand-name drugs and 37% of the cost of generic drugs until you reach
				the out-of-pocket threshold ($7,050 in 2023). After that, you enter the
				catastrophic coverage stage, where you pay a small copayment or
				coinsurance for each drug for the rest of the year.
			</span>
			<span>
				Part D plans do not cover all drugs. Some drugs are excluded from Part D
				coverage by law, such as drugs for weight loss or gain, fertility,
				cosmetic purposes, or erectile dysfunction. You may need to buy
				additional coverage or pay out-of-pocket for these drugs.
			</span>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicarePrescription;
