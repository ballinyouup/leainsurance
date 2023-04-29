"use client";
import { Menu } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuItems from "./MobileMenuItems";

const MobileMenu = () => {
	return (
		<Menu as="div" className="sm:hidden">
			<MobileMenuButton />
			<MobileMenuItems />
		</Menu>
	);
};

export default MobileMenu;
