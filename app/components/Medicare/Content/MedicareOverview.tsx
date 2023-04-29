import { Tab } from "@headlessui/react";

const MedicareOverview = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold sm:text-5xl">OVERVIEW</div>
			<span>
				Medicare is a federal health insurance program that helps millions of
				Americans pay for their health care needs. Whether you are 65 or older,
				disabled, or have certain chronic conditions, you may be eligible for
				Medicare coverage.
			</span>
			<span>
				Established in 1965, Medicare has evolved to include different parts (A,
				B, C, and D) that cater to various healthcare needs.
			</span>
			<span>
				This program is administered by the Centers for Medicare and Medicaid
				Services (CMS), with enrollment handled by the Social Security
				Administration.
			</span>
			<span>
				Private entities are contracted by CMS to provide specific services,
				including claims processing, auditing, and quality oversight.
			</span>
		</Tab.Panel>
	);
};

export default MedicareOverview;
