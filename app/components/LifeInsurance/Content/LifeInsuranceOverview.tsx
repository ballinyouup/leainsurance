import { Tab } from "@headlessui/react";

const LifeInsuranceOverview = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold sm:text-5xl">OVERVIEW</div>
			<span>
				Life insurance is a contract between you and an insurance company that
				pays a death benefit to your beneficiaries when you die The death
				benefit can be used for various expenses, such as bills, mortgage,
				college, or burial costs Life insurance can also provide peace of mind
				and financial security for your loved ones after you are gone.
			</span>
			<span>
				There are different types of life insurance, such as term life
				insurance, which provides protection for a specific period, and
				permanent life insurance, which provides lifetime coverage Each type
				has its own advantages and disadvantages, depending on your needs and
				preferences.
			</span>
		</Tab.Panel>
	);
};

export default LifeInsuranceOverview;
