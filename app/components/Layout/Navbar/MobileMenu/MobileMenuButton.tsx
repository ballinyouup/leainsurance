import { Menu } from "@headlessui/react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
const MobileMenuButton = () => {
	return (
		<Menu.Button className="p-2">
			<XMarkIcon
				className="h-8 w-8 text-white ui-open:flex ui-not-open:hidden"
				height={32}
				width={32}
			/>
			<Bars3Icon
				className="h-8 w-8 text-white ui-open:hidden ui-not-open:flex"
				height={32}
				width={32}
			/>
		</Menu.Button>
	);
};

export default MobileMenuButton;
