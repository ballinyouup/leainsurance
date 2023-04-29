import { Tab } from "@headlessui/react";
import MedicareSources from "./MedicareSources";

const MedicareEligibility = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<p className="flex flex-col gap-6 text-lg">
				<div>
					<span className="font-bold">
						To be eligible for Medicare, individuals must be:
					</span>
					<ul className="ml-8 list-disc">
						<li>
							You are 65 or older and a U.S. citizen or a legal resident who has
							lived in the U.S. for at least five years.
						</li>
						<li>
							You are under 65 and have a disability that qualifies you for
							Social Security benefits for at least 24 months.
						</li>
						<li>
							You are under 65 and have end-stage renal disease (ESRD) or
							amyotrophic lateral sclerosis (ALS)
						</li>
					</ul>
				</div>
				<div>
					<span className="font-bold">You can enroll:</span>
					<ul className="ml-8 list-disc">
						<li>Online at www.ssa.gov</li>
						<li>By phone at 1-800-772-1213 (TTY 1-800-325-0778)</li>
						<li>In person at your local Social Security office</li>
					</ul>
				</div>
				<span>
					The best time to enroll in Medicare is during your initial enrollment
					period (IEP), which is a seven-month period that begins three months
					before your 65th birthday month and ends three months after it. If you
					enroll during this period, you will avoid any late enrollment
					penalties or gaps in coverage.
				</span>
				<span>
					If you miss your IEP, you can still enroll in Medicare during the
					general enrollment period (GEP), which runs from January 1 to March 31
					each year. However, you may have to pay higher premiums and wait until
					July 1 for your coverage to start.
				</span>
				<span>
					You can also change your Medicare coverage during the annual open
					enrollment period (OEP), which runs from October 15 to December 7 each
					year. During this time, you can switch from Original Medicare to a
					Medicare Advantage plan, or vice versa, or change your prescription
					drug plan.
				</span>
			</p>
			<MedicareSources />
		</Tab.Panel>
	);
};

export default MedicareEligibility;
