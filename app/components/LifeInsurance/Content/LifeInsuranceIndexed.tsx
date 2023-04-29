import { Tab } from "@headlessui/react";

const LifeInsuranceIndexed = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Indexed Insurance
			</div>
			<span>
				Indexed universal life insurance is a more flexible type of permanent
				life insurance that allows you to adjust your premium and death benefit
				amount within certain limits Indexed universal life insurance also has a
				cash value account that earns interest based on the performance of a
				stock or bond index, such as the S&P 500 or the Nasdaq-100 Indexed
				universal life insurance offers the potential for higher returns than
				other types of permanent life insurance, but also has a minimum
				guaranteed rate of return to protect you from market losses
			</span>
			<span>
				Indexed universal life insurance is suitable for people who want to
				benefit from market gains without directly investing in the market. It
				can also provide tax advantages, such as tax-deferred cash value growth
				and tax-free loans and withdrawals However, indexed universal life
				insurance also has some drawbacks. It has caps on returns that limit
				your upside potential. It also has higher fees and charges than other
				types of permanent life insurance. And it does not guarantee your
				premium amount or market returns
			</span>
		</Tab.Panel>
	);
};

export default LifeInsuranceIndexed;
