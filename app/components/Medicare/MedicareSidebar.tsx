import { Tab } from "@headlessui/react";

const MedicareSidebar = () => {
	return (
		<div className="flex flex-col items-start justify-start p-3 font-bold md:p-6">
			<Tab className="w-full p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit lg:p-4">
				Overview
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Eligibility &&nbsp;</span>
				<span>Enrollment</span>
			</Tab>
			<Tab className="w-full p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit lg:p-4">
				Original Medicare
			</Tab>
			<Tab className="w-full p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit lg:p-4">
				Medicare Advantage
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Medicare&nbsp;</span>
				<span>Supplement</span>
			</Tab>
			<Tab className="flex w-full flex-col items-center p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Prescription Drug</span>
				<span>Coverage</span>
			</Tab>
			<Tab className="w-full p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit lg:p-4">
				Costs & Coverage
			</Tab>
			<Tab className="w-full p-2.5 hover:bg-tealPrimary hover:text-white sm:w-fit lg:p-4">
				Additional Benefits
			</Tab>
		</div>
	);
};

export default MedicareSidebar;
