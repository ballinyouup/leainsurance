import { Tab } from "@headlessui/react";
import ObamacareSources from "./ObamacareSources";

const ObamacareHowTo = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Obamacare Guide
			</div>
			<span className="text-2xl font-bold">How to Compare Plans</span>
			<ul className="list-disc">
				<span>
					When choosing an Obamacare plan, you should consider several factors,
					such as:
				</span>
				<li className="ml-6">
					The monthly premium: This is the amount you pay each month for your
					health plan, regardless of how much health care you use. You may
					qualify for premium tax credits to lower this amount.
				</li>
				<li className="ml-6">
					The deductible: This is the amount you pay out of pocket before your
					health plan starts to pay for covered services. Generally, plans with
					lower premiums have higher deductibles and vice versa.
				</li>
				<li className="ml-6">
					The copayment: This is a fixed amount you pay for a covered service,
					such as a doctor's visit or a prescription drug. Copayments vary by
					plan and type of service.
				</li>
				<li className="ml-6">
					The coinsurance: This is a percentage of the cost of a covered service
					that you pay after you meet your deductible. For example, if your
					coinsurance is 20%, you pay 20% of the cost and your plan pays 80%.
				</li>
				<li className="ml-6">
					The out-of-pocket maximum: This is the most you have to pay for
					covered services in a year. After you reach this limit, your plan pays
					100% of the cost of covered services. The out-of-pocket maximum
					includes your deductible, copayments, and coinsurance, but not your
					premiums.
				</li>
				<li className="ml-6">
					The network: This is the group of providers (doctors, hospitals,
					pharmacies, etc.) that your plan contracts with to provide services at
					lower rates. You may pay more or get no coverage at all if you go to a
					provider outside your network.
				</li>
				<li className="ml-6">
					The benefits: These are the services that your plan covers. All
					Obamacare plans must cover essential health benefits and preventive
					services at no cost to you. Some plans may also offer additional
					benefits, such as dental, vision, or wellness programs.
				</li>
			</ul>
			<span className="text-2xl font-bold">
				How to Get Help with Enrollment
			</span>
			<ul className="list-disc">
				<span>
					If you need help with enrolling in an Obamacare plan, you have several
					options:
				</span>
				<li className="ml-6">
					You can call the Marketplace Call Center at 1-800-318-2596 (TTY:
					1-855-889-4325) and speak to a trained representative who can answer
					your questions and help you enroll over the phone.
				</li>
				<li className="ml-6">
					You can visit HealthCare.gov/find-assistance/ and search by city and
					state or ZIP code to find local helpers in your community who can
					provide free in-person assistance with enrollment. These helpers
					include navigators, certified application counselors, agents, brokers,
					and other organizations.
				</li>
				<li className="ml-6">
					You can use HealthCare.gov/see-plans/ to see plans and prices
					available in your area before you apply. You can also use
					HealthCare.gov/local-help/ to find local helpers in your community who
					can provide free in-person assistance with enrollment.
				</li>
			</ul>
			<span className="text-2xl font-bold">
				How to Report Changes in Income or Household Size
			</span>
			<span>
				It is important to report any changes in your income or household size
				to the Marketplace as soon as possible. These changes may affect your
				eligibility for Obamacare plans and cost assistance, as well as your tax
				liability. For example, if your income increases, you may qualify for
				less premium tax credit and owe money when you file your taxes. If your
				income decreases, you may qualify for more premium tax credit and get a
				refund when you file your taxes. If you have a baby, get married, or get
				divorced, you may need to change your health plan or enroll in a new
				one.
			</span>
			<span>
				You can report changes in your income or household size online, by
				phone, or by mail. You can also use the Marketplace app to update your
				information. You will need to provide proof of the changes, such as pay
				stubs, tax returns, birth certificates, or marriage certificates.
			</span>
            <ObamacareSources />
		</Tab.Panel>
	);
};

export default ObamacareHowTo;
