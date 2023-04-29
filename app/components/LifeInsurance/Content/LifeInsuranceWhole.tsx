import { Tab } from "@headlessui/react";

const LifeInsuranceWhole = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Whole Life Insurance
			</div>
			<span>
				Whole life insurance is the simplest and most traditional type of
				permanent life insurance. It provides a guaranteed death benefit, a
				fixed premium, and a guaranteed cash value growth rate Whole life
				insurance is suitable for people who want predictable and stable
				coverage with minimal risk.
			</span>
			<span>Some of the pros of whole life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It lasts for your entire life and does not expire as long as you pay
					your premiums
				</li>
				<li className="ml-6">
					It builds tax-deferred cash value that can be borrowed against or
					withdrawn for any purpose
				</li>
				<li className="ml-6">
					It pays dividends to policyholders based on the company's performance
					and profitability
				</li>
				<li className="ml-6">
					It can be useful for estate planning purposes, such as creating a
					trust or funding a charitable donation
				</li>
			</ul>
			<span>Some of the cons of whole life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It is more expensive than term life insurance and may not be
					affordable for some people
				</li>
				<li className="ml-6">
					It has lower returns than other types of permanent life insurance or
					other investments3.
				</li>
				<li className="ml-6">
					It has less flexibility than other types of permanent life insurance
					and may not suit changing needs or preferences
				</li>
				<li className="ml-6">
					It may have surrender charges or penalties if you cancel or withdraw
					from your policy before a certain period
				</li>
			</ul>
		</Tab.Panel>
	);
};

export default LifeInsuranceWhole;
