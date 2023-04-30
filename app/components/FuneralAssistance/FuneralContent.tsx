"use client";

import { Tab } from "@headlessui/react";
import FuneralSidebar from "./FuneralSidebar";
import FuneralOverview from "./Content/FuneralOverview";
import FuneralEligibility from "./Content/FuneralEligibility";
import FuneralBenefits from "./Content/FuneralBenefits";

const FuneralContent = () => {
	return (
		<section className="grid h-full w-full grid-cols-1 sm:grid-cols-12">
			<Tab.Group vertical>
				<Tab.List className="sm:col-span-4 lg:col-span-3">
					<FuneralSidebar />
					<div className="flex px-6 sm:hidden">
						<span className="flex h-full w-full border-b-2 border-tealPrimary border-opacity-50" />
					</div>
				</Tab.List>
				<Tab.Panels className="flex h-full w-full p-4 sm:col-span-8 md:p-8 lg:col-span-9">
					<span className="mr-8 hidden border border-tealPrimary border-opacity-50 sm:flex" />
					<FuneralOverview />
					<FuneralEligibility />
					<FuneralBenefits />
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default FuneralContent;
