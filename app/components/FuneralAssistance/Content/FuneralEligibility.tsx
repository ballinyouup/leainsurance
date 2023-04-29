import { Tab } from "@headlessui/react";
import FuneralSources from "./FuneralSources";

const FuneralEligibility = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Eligibility &&nbsp;</span>
				<span>Enrollment</span>
			</div>
			<span>
				To be eligible for funeral assistance, you must meet the following
				criteria:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					You are a member of Health Services FL or a dependent of a member.
				</li>
				<li className="ml-6">
					The death occurred in the United States, including U.S. territories
					and the District of Columbia.
				</li>
				<li className="ml-6">
					The death was caused by or related to COVID-19, or was a result of an
					accident, homicide, or suicide.
				</li>
				<li className="ml-6">
					You are responsible for some or all of the funeral expenses incurred
					on or after January 20, 2020.
				</li>
			</ul>
			<span>
				To enroll in funeral assistance, you must submit an application form and
				provide the following documents:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					A copy of an official death certificate that shows the cause and
					location of death.
				</li>
				<li className="ml-6">
					A signed funeral home contract, invoice, receipts, or other
					documentation that shows your name, the name of the person who died,
					the itemized expenses, and the proof that the expenses were incurred
					on or after January 20, 2020.
				</li>
			</ul>
			<span>
				You can submit your application and documents online through our
				website, by mail, or by fax. You can also call our toll-free number to
				speak with a representative who can assist you with the application
				process.
			</span>
            <FuneralSources />
		</Tab.Panel>
	);
};

export default FuneralEligibility;
