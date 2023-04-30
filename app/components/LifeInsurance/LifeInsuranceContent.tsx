"use client";

import { Tab } from "@headlessui/react";
import LifeInsuranceSidebar from "./LifeInsuranceSidebar";
import LifeInsuranceOverview from "./Content/LifeInsuranceOverview";
import LifeInsuranceEligibility from "./Content/LifeInsuranceEligibility";
import LifeInsuranceTerm from "./Content/LifeInsuranceTerm";
import LifeInsurancePerm from "./Content/LifeInsurancePerm";
import LifeInsuranceWhole from "./Content/LifeInsuranceWhole";
import LifeInsuranceUniversal from "./Content/LifeInsuranceUniversal";
import LifeInsuranceVariable from "./Content/LifeInsuranceVariable";
import LifeInsuranceIndexed from "./Content/LifeInsuranceIndexed";
import LifeInsuranceHowTo from "./Content/LifeInsuranceHowTo";

const LifeInsuranceContent = () => {
	return (
		<section className="grid h-full w-full grid-cols-1 sm:grid-cols-12">
			<Tab.Group vertical>
				<Tab.List className="sm:col-span-4 lg:col-span-3">
					<LifeInsuranceSidebar />
					<div className="flex px-6 sm:hidden">
						<span className="flex h-full w-full border-b-2 border-tealPrimary border-opacity-50" />
					</div>
				</Tab.List>
				<Tab.Panels className="flex h-full w-full p-4 sm:col-span-8 md:p-8 lg:col-span-9">
					<span className="mr-8 hidden border border-tealPrimary border-opacity-50 sm:flex" />
					<LifeInsuranceOverview />
					<LifeInsuranceEligibility />
					<LifeInsuranceTerm />
					<LifeInsurancePerm />
					<LifeInsuranceWhole />
					<LifeInsuranceUniversal />
					<LifeInsuranceVariable />
					<LifeInsuranceIndexed />
					<LifeInsuranceHowTo />
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default LifeInsuranceContent;
