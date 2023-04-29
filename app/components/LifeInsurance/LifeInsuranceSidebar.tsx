import { Tab } from "@headlessui/react";

const LifeInsuranceSidebar = () => {
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
				<span>Term Life&nbsp;</span>
				<span>Insurance</span>
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Permanent&nbsp;</span>
				<span>Life Insurance</span>
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Whole Life&nbsp;</span>
				<span>Insurance</span>
			</Tab>
			<Tab className="flex w-full flex-wrap items-center justify-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Universal Life&nbsp;</span>
				<span>Insurance</span>
			</Tab>
			<Tab className="flex w-full flex-col items-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Variable Life&nbsp;</span>
				<span>Insurance</span>
			</Tab>
			<Tab className="flex w-full flex-col items-center p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit sm:items-start sm:justify-start lg:p-4">
				<span>Indexed Life&nbsp;</span>
				<span>Insurance</span>
			</Tab>
			<Tab className="w-full p-2.5 hover:bg-blue-800 hover:text-white sm:w-fit lg:p-4">
				How To
			</Tab>
		</div>
	);
};

export default LifeInsuranceSidebar;
