import { Tab } from "@headlessui/react";

const LifeInsuranceUniversal = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Universal Life Insurance
			</div>
			<span>
				Universal life insurance is a more flexible type of permanent life
				insurance that allows you to adjust your premium and death benefit
				amount within certain limits Universal life insurance also has an
				interest-bearing cash value account that varies according to the current
				market rates Universal life insurance is suitable for people who want
				more control over their coverage and cash value accumulation.
			</span>
			<span>Some of the pros of universal life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It allows you to raise or lower your premium and death benefit
					according to your needs and budget
				</li>
				<li className="ml-6">
					It has a higher potential for cash value growth than whole life
					insurance, depending on the market performance
				</li>
				<li className="ml-6">
					It offers tax advantages, such as tax-deferred cash value growth and
					tax-free loans and withdrawals
				</li>
				<li className="ml-6">
					It provides other benefits, such as accelerated death benefits, which
					allow you to receive a portion of your death benefit before you die if
					you are diagnosed with a terminal illness or need long-term care
				</li>
			</ul>
			<span>Some of the cons of universal life insurance are:</span>
			<ul className="list-disc">
				<li className="ml-6">
					It has higher fees and charges than whole life insurance, such as
					administrative costs, mortality charges, and surrender charges
				</li>
				<li className="ml-6">
					It has no guarantees on your premium amount or market returns, which
					means you may have to pay more or receive less than expected
				</li>
				<li className="ml-6">
					It has more risk than whole life insurance, as your cash value may
					decrease or even disappear if the market performs poorly or if you
					miss payments
				</li>
				<li className="ml-6">
					It requires more active management and monitoring than whole life
					insurance, as you have to adjust your premium and death benefit
					according to your changing needs and market conditions
				</li>
			</ul>
		</Tab.Panel>
	);
};

export default LifeInsuranceUniversal;
