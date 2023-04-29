"use client";
import { Menu } from "@headlessui/react";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";

const MenuDropdown = () => {
	return (
		<div className="hidden font-semibold sm:flex">
			<Menu as="div" className="relative inline-block text-left">
				<MenuButton />
				<MenuItems />
			</Menu>
		</div>
	);
};

export default MenuDropdown;
