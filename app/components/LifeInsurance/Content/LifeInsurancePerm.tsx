import { Tab } from "@headlessui/react";

const LifeInsurancePerm = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Permanent Life Insurance
			</div>
			<span>
				Permanent life insurance stays in force for your entire life unless you
				stop paying the premiums or surrender the policy It is more expensive
				than term life insurance because it provides lifetime coverage and
				builds cash value over time. Cash value is a portion of your premium
				that accumulates in a tax-deferred account within your policy. You can
				access your cash value through loans or withdrawals for any purpose,
				such as retirement income, education expenses, or emergencies
			</span>
			<span>
				Permanent life insurance also pays dividends to policyholders based on
				the company's performance and profitability. Dividends are not
				guaranteed, but they can be used to increase your death benefit, reduce
				your premiums, or add more cash value to your policy
			</span>
			<span>
				Permanent life insurance is a good option if you want to leave a legacy
				for your heirs, supplement your retirement income, or protect your
				estate from taxes. It can also provide other benefits, such as
				accelerated death benefits, which allow you to receive a portion of your
				death benefit before you die if you are diagnosed with a terminal
				illness or need long-term care
			</span>
			<span>
				There are different types of permanent life insurance, such as whole
				life insurance, universal life insurance, variable life insurance, and
				indexed universal life insurance. Each type has its own features and
				risks that you should understand before buying.
			</span>
		</Tab.Panel>
	);
};

export default LifeInsurancePerm;
