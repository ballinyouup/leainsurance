import { Menu } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const MenuButton = () => {
	return (
		<Menu.Button className="relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl  border border-transparent px-3 py-2 text-base font-bold text-white">
			Insurance
			<ChevronDownIcon
				className="-mr-1 ml-2 h-5 w-5 text-white ui-open:hidden ui-not-open:flex"
				aria-hidden="true"
				strokeWidth={2}
				width={20}
				height={20}
			/>
			<ChevronUpIcon
				className="-mr-1 ml-2 h-5 w-5 text-white ui-open:flex ui-not-open:hidden"
				aria-hidden="true"
				strokeWidth={2}
				width={20}
				height={20}
			/>
		</Menu.Button>
	);
};

export default MenuButton;
