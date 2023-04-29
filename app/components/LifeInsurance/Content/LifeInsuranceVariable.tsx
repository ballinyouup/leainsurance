import { Tab } from "@headlessui/react";

const LifeInsuranceVariable = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Variable Life Insurance
			</div>
			<span>
				Variable life insurance is a type of permanent life insurance that
				allows you to invest your cash value in various subaccounts that are
				similar to mutual funds Variable life insurance offers the potential
				for higher returns but also higher risks than other types of permanent
				life insurance. You can lose money if the subaccounts perform poorly.
				Variable life insurance also has higher fees and charges than other
				types of permanent life insurance Variable life insurance is suitable
				for people who are willing to take more risk and have more investment
				knowledge.
			</span>
			<span>Some of the pros of variable life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It gives you more control over how your cash value is invested, by
					offering you a portfolio of subaccounts from which to choose
				</li>
				<li className="ml-6">
					It has a higher potential for cash value growth than other types of
					permanent life insurance, depending on the subaccount performance
				</li>
				<li className="ml-6">
					It offers tax advantages, such as tax-deferred cash value growth and
					tax-free transfers between subaccounts
				</li>
				<li className="ml-6">
					It provides a minimum guaranteed death benefit, regardless of how your
					subaccounts perform
				</li>
			</ul>
			<span>Some of the cons of variable life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It has higher fees and charges than other types of permanent life
					insurance, such as administrative costs, mortality charges, surrender
					charges, and investment management fees
				</li>
				<li className="ml-6">
					It has no guarantees on your premium amount or market returns, which
					means you may have to pay more or receive less than expected
				</li>
				<li className="ml-6">
					It has more risk than other types of permanent life insurance, as your
					cash value may decrease or even disappear if the subaccounts perform
					poorly
				</li>
				<li className="ml-6">
					It requires more active management and monitoring than other types of
					permanent life insurance.
				</li>
			</ul>
		</Tab.Panel>
	);
};

export default LifeInsuranceVariable;
