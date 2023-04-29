import { Tab } from "@headlessui/react";

const FuneralSidebar = () => {
	return (
		<div className="flex flex-col items-start justify-start p-3 font-bold md:p-6">
			<Tab className="w-full p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit lg:p-4">
				Overview
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Eligibility &&nbsp;</span>
				<span>Enrollment</span>
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Benefits</span>
			</Tab>
		</div>
	);
};

export default FuneralSidebar;
