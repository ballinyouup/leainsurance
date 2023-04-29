import { Tab } from "@headlessui/react";
import FuneralSources from "./FuneralSources";

const FuneralBenefits = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
				Benefits
			</div>
			<span>
				The amount of funeral assistance you can receive depends on several
				factors, such as:
			</span>
			<ul className="list-disc">
				<li className="ml-6">
					The type of service you choose (funeral, cremation, or burial).
				</li>
				<li className="ml-6">
					The state where the service takes place and the average cost of
					services in that area.
				</li>
				<li className="ml-6">
					The availability of other sources of funding, such as life insurance,
					veterans benefits, or FEMA assistance.
				</li>
			</ul>
			<span>
				The maximum amount of funeral assistance you can receive is $9,000 per
				funeral for expenses related to COVID-19 deaths. For other types of
				deaths, the maximum amount is $5,000 per funeral.
			</span>
			<span>Funeral assistance can cover expenses such as:</span>
			<ul className="list-disc">
				<li className="ml-6">Funeral services</li>
				<li className="ml-6">Cremation</li>
				<li className="ml-6">Interment</li>
				<li className="ml-6">
					Costs associated with producing death certificates
				</li>
				<li className="ml-6">
					Costs due to local or state government laws or ordinances
				</li>
				<li className="ml-6">
					Transportation for up to two people to identify the person who died
				</li>
				<li className="ml-6">Transfer of remains</li>
				<li className="ml-6">Casket or urn</li>
				<li className="ml-6">Burial plot</li>
				<li className="ml-6">Marker or headstone</li>
				<li className="ml-6">Clergy</li>
				<li className="ml-6">Funeral ceremony</li>
				<li className="ml-6">Funeral home equipment or staff</li>
			</ul>
			<span>Funeral assistance cannot cover expenses such as:</span>
			<ul className="list-disc">
				<li className="ml-6">Flowers</li>
				<li className="ml-6">Food</li>
				<li className="ml-6">Clothing</li>
				<li className="ml-6">Travel expenses for family members or friends</li>
				<li className="ml-6">Obituaries</li>
				<li className="ml-6">Memorials</li>
				<li className="ml-6">Legal fees</li>
			</ul>
			<FuneralSources />
		</Tab.Panel>
	);
};

export default FuneralBenefits;
