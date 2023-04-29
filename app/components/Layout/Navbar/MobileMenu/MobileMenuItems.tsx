import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment } from "react";

const MobileMenuItems = () => {
	const menuItems: JSX.Element[] = [
		<Menu.Item>
			<Link href="/medicare">Medicare</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/obamacare">Obamacare</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/life-insurance">Life Insurance</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/funeral-assistance">Funeral Assistance</Link>
		</Menu.Item>,
	];

	return (
		<Transition
			as={Fragment}
			enter="transition ease-out duration-150"
			enterFrom="transform opacity-0 scale-0"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-150 scale-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<Menu.Items className="absolute right-0 top-32 flex w-full flex-col gap-1 rounded-md bg-white p-3 text-lg font-bold ring-1 ring-black ring-opacity-20 focus:outline-none">
				{menuItems.map((item, index) => {
					return (
						<div key={index}>
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									delay: 0.25 * index,
									duration: 0.25,
								}}
								className="p-1"
							>
								{item}
							</motion.div>
							<motion.hr
								initial={{ opacity: 0, width: "0%" }}
								animate={{ opacity: 1, width: "100%" }}
								transition={{
									delay: 0.25 * index,
									duration: 0.75,
								}}
								className={`${
									index === menuItems.length - 1
										? "border-transparent"
										: "border-black"
								}  border-opacity-25`}
							/>
						</div>
					);
				})}
			</Menu.Items>
		</Transition>
	);
};

export default MobileMenuItems;
