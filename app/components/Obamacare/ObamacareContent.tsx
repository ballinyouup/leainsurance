"use client";

import { Tab } from "@headlessui/react";
import ObamacareEligibility from "./Content/ObamacareEligibility";
import ObamacareOverview from "./Content/ObamacareOverview";
import ObamacareSidebar from "./ObamacareSidebar";
import ObamacareTypes from "./Content/ObamacareTypes";
import ObamacarePTC from "./Content/ObamacarePTC";
import ObamacareCSRS from "./Content/ObamacareCSRS";
import ObamacareMedicaid from "./Content/ObamacareMedicaid";
import ObamacareAdditional from "./Content/ObamacareAdditional";
import ObamacareHowTo from "./Content/ObamacareHowTo";

const ObamacareContent = () => {
	return (
		<section className="grid h-full w-full grid-cols-1 sm:grid-cols-12">
			<Tab.Group vertical>
				<Tab.List className="sm:col-span-4 lg:col-span-3">
					<ObamacareSidebar />
					<div className="flex px-6 sm:hidden">
						<span className="flex h-full w-full border-b-2 border-blue-800 border-opacity-50" />
					</div>
				</Tab.List>
				<Tab.Panels className="flex h-full w-full p-4 sm:col-span-8 md:p-8 lg:col-span-9">
					<span className="mr-8 hidden border border-blue-800 border-opacity-50 sm:flex" />
					<ObamacareOverview />
					<ObamacareEligibility />
					<ObamacareTypes />
					<ObamacarePTC />
					<ObamacareCSRS />
					<ObamacareMedicaid />
					<ObamacareHowTo />
					<ObamacareAdditional />
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default ObamacareContent;
