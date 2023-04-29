import { Tab } from "@headlessui/react";

const LifeInsuranceHowTo = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Life Insurance</span>
				<span>How To</span>
			</div>
			<span>
				Choosing a life insurance policy depends on your personal and financial
				goals, your budget, and your risk tolerance. Here are some questions to
				ask yourself before buying a life insurance policy:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					How much coverage do I need? The amount of coverage you need depends
					on various factors, such as your income, your debts, your expenses,
					and your dependents' needs. A common rule of thumb is to multiply your
					annual income by 10 or 15, but you may want to use a life insurance
					calculator or consult with a financial planner to get a more accurate
					estimate.
				</li>
				<li className="ml-6">
					How long do I need coverage for? The length of coverage you need
					depends on how long you want to provide financial support for your
					beneficiaries. For example, if you have young children or a mortgage,
					you may want a longer term than if you have grown children or no debt.
					Term life insurance offers coverage for a specific period, such as 10,
					20, or 30 years, while permanent life insurance offers coverage for
					your entire life.
				</li>
				<li className="ml-6">
					How much can I afford to pay in premiums? The amount of premiums you
					pay depends on the type and amount of coverage you choose, as well as
					your age, health, and lifestyle. Term life insurance typically has
					lower premiums than permanent life insurance, but it also has no cash
					value or other benefits. Permanent life insurance has higher premiums
					than term life insurance, but it also builds cash value and pays
					dividends. You may want to compare quotes from different insurers and
					find a policy that fits your budget.
				</li>
				<li className="ml-6">
					Do I want to build cash value or just have a death benefit? The cash
					value component of permanent life insurance can be a useful savings or
					investment tool that can help you achieve various financial goals,
					such as retirement income, education expenses, or emergencies.
					However, it also comes with higher costs and risks than term life
					insurance. If you only want to provide a death benefit for your
					beneficiaries and do not need any additional benefits, term life
					insurance may be a better option for you.
				</li>
				<li className="ml-6">
					Do I want to participate in the market or have a guaranteed rate of
					return? Some types of permanent life insurance allow you to invest
					your cash value in various subaccounts that are similar to mutual
					funds, such as variable life insurance or indexed universal life
					insurance. These types of policies offer the potential for higher
					returns but also higher risks than other types of permanent life
					insurance. You can lose money if the subaccounts perform poorly. If
					you prefer a more conservative approach, you may want to choose a type
					of permanent life insurance that offers a guaranteed rate of return,
					such as whole life insurance or universal life insurance.
				</li>
				<li className="ml-6">
					Do I want to have flexibility or stability in my policy? Some types of
					permanent life insurance allow you to adjust your premium and death
					benefit amount within certain limits, such as universal life insurance
					or indexed universal life insurance. These types of policies offer
					more flexibility than other types of permanent life insurance but also
					require more active management and monitoring. If you prefer a more
					stable and predictable policy, you may want to choose a type of
					permanent life insurance that has a fixed premium and death benefit
					amount, such as whole life insurance or variable life insurance.
				</li>
			</ul>
		</Tab.Panel>
	);
};

export default LifeInsuranceHowTo;
