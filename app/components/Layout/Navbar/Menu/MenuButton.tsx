import { Menu } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const MenuButton = () => {
	return (
		<Menu.Button className="relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl  border border-transparent px-3 py-2 text-base font-bold text-white before:absolute before:-left-96 before:-top-24 before:h-60 before:w-96 before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:bg-blue-900 hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]">
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
