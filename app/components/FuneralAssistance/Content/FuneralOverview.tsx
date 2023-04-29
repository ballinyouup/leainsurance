import { Tab } from "@headlessui/react";

const FuneralOverview = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold sm:text-5xl">OVERVIEW</div>
			<span>
			Losing a loved one is never easy, and it can be even more difficult when you have to worry about the costs of funeral services. That's why Health Services FL offers funeral assistance to help you cover some or all of the expenses related to a funeral, cremation, or burial.
			</span>
			<span>
			Funeral assistance can provide you with financial relief and peace of mind during a time of grief. Whether you need help with funeral home fees, casket or urn costs, transportation, burial plot, or other expenses, we can help you find the best option for your situation.
			</span>
		</Tab.Panel>
	);
};

export default FuneralOverview;
