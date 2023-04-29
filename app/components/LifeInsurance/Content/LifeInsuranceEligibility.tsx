import { Tab } from "@headlessui/react";

const LifeInsuranceEligibility = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<span>
				To buy a life insurance policy, you need to meet certain eligibility
				criteria, such as age, health, and income. Different types of life
				insurance may have different eligibility requirements. For example, term
				life insurance may be easier to qualify for than permanent life
				insurance, as it does not involve a cash value component. Some types of
				life insurance may require a medical exam or a health questionnaire,
				while others may offer simplified or guaranteed issue policies that do
				not require any medical underwriting.
			</span>
			<span>
				To enroll in a life insurance policy, you need to fill out an
				application form and provide the necessary information and documents.
				You may also need to designate a beneficiary or beneficiaries who will
				receive the death benefit when you die. Depending on the type of policy
				and the amount of coverage you want, you may also need to pay a premium
				upfront or on a regular basis.
			</span>
			<span>
				You can buy a life insurance policy from various sources, such as:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					An insurance company or an agent that represents one or more insurers.
				</li>
				<li className="ml-6">
					An employer or a group that offers group life insurance as part of a
					benefits package.
				</li>
				<li className="ml-6">
					An association or an organization that offers group life insurance to
					its members.
				</li>
				<li className="ml-6">
					A financial planner or an advisor who can help you compare different
					options and find the best policy for your needs.
				</li>
			</ul>
			<span>
				You can also change or cancel your life insurance policy at any time,
				depending on the terms and conditions of your contract. However, you may
				face some consequences, such as losing your coverage, paying fees or
				penalties, or forfeiting your cash value.
			</span>
			<span>
				Some life events may also affect your eligibility and enrollment in a
				life insurance policy, such as:
			</span>
			<ul className="list-disc">
				<li className="ml-6">Getting married or divorced</li>
				<li className="ml-6">Having a child or adopting a child</li>
				<li className="ml-6">Losing or changing your job</li>
				<li className="ml-6">Retiring or reaching a certain age</li>
				<li className="ml-6">Moving to another state or country</li>
				<li className="ml-6">
					Developing a health condition or becoming disabled
				</li>
			</ul>
			<span>
				These life events may require you to update your information, change
				your coverage amount, switch your policy type, or add or remove
				beneficiaries. You may also qualify for a special enrollment period that
				allows you to enroll in a new policy or modify your existing policy
				outside the regular enrollment period.
			</span>
		</Tab.Panel>
	);
};

export default LifeInsuranceEligibility;
