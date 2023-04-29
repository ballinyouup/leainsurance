import { Tab } from "@headlessui/react";

const LifeInsuranceTerm = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Term Life Insurance
			</div>
			<span>
				Term life insurance is designed to last a certain number of years, then
				end. You choose the term when you take out the policy. Common terms are
				10, 20, or 30 years Term life insurance is usually the most affordable
				type of life insurance because it only pays a death benefit if you die
				within the term. It does not build cash value or pay dividends
			</span>
			<span>
				Term life insurance is a good option if you want to cover a specific
				financial obligation, such as a mortgage, a loan, or a child's
				education. It can also provide income replacement for your dependents
				during your working years. However, term life insurance has some
				drawbacks. If you outlive the term, your coverage will end and you will
				have to renew it at a higher rate or buy a new policy. Also, term life
				insurance does not offer any flexibility or additional benefits beyond
				the death benefit
			</span>
			<span>
				Some term life insurance policies may allow you to convert them into
				permanent policies without having to undergo a medical exam or provide
				proof of insurability. This can be useful if your health or financial
				situation changes and you want to keep your coverage. Look for a
				convertible term policy if this is important to you
			</span>
		</Tab.Panel>
	);
};

export default LifeInsuranceTerm;
