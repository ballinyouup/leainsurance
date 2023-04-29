"use client";

import { Tab } from "@headlessui/react";
import MedicareOverview from "./Content/MedicareOverview";
import MedicareSidebar from "./MedicareSidebar";
import MedicareEligibility from "./Content/MedicareEligibility";
import MedicareOriginal from "./Content/MedicareOriginal";
import MedicareAdvantage from "./Content/MedicareAdvantage";
import MedicareSupplement from "./Content/MedicareSupplement";
import MedicarePrescription from "./Content/MedicarePrescription";
import MedicareCosts from "./Content/MedicareCosts";
import MedicareAdditional from "./Content/MedicareAdditional";

const MedicareContent = () => {
	return (
		<section className="grid h-full w-full grid-cols-1 sm:grid-cols-12">
			<Tab.Group vertical>
				<Tab.List className="sm:col-span-4 lg:col-span-3">
					<MedicareSidebar />
					<div className="flex px-6 sm:hidden">
						<span className="flex h-full w-full border-b-2 border-purple border-opacity-50" />
					</div>
				</Tab.List>
				<Tab.Panels className="flex h-full w-full p-4 sm:col-span-8 md:p-8 lg:col-span-9">
					<span className="mr-8 hidden border border-blue-800 border-opacity-50 sm:flex" />
					<MedicareOverview />
					<MedicareEligibility />
					<MedicareOriginal />
					<MedicareAdvantage />
					<MedicareSupplement />
					<MedicarePrescription />
					<MedicareCosts />
					<MedicareAdditional />
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default MedicareContent;
