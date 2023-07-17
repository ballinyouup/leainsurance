"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "$/sheet";
import Link from "next/link";
import {
	Baby,
	FileHeart,
	Menu,
	Sprout,
	Stethoscope,
	Instagram,
	Store,
	Mail,
	Phone,
	Home,
	Languages,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

const MobileMenu = () => {
	const [open, setOpen] = useState(false);
	function handleOpen() {
		setOpen(!open);
	}
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger>
				<Menu className="h-8 w-8 text-white" />
			</SheetTrigger>
			<SheetContent className="flex w-full flex-col text-lg">
				<Link href="/" className="flex items-center" onClick={handleOpen}>
					<Home className="mr-2 h-6 w-6" />
					<span>Return Home</span>
				</Link>
				<Link
					href="/es"
					className="flex items-center gap-2"
				>
					<Languages className="h-6 w-6" />
					<span>Español</span>
				</Link>
				<SheetTitle>Insurance</SheetTitle>
				<Link
					href="/medicare"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Stethoscope className="mr-2 h-6 w-6" />
					<span>Medicare</span>
				</Link>
				<Link
					href="/obamacare"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Baby className="mr-2 h-6 w-6" />
					<span>Obamacare</span>
				</Link>
				<Link
					href="/life-insurance"
					className="flex items-center"
					onClick={handleOpen}
				>
					<FileHeart className="mr-2 h-6 w-6" />
					<span>Life Insurance</span>
				</Link>
				<Link
					href="/final-expenses"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Sprout className="mr-2 h-6 w-6" />
					<span>Final Expenses</span>
				</Link>
				<SheetTitle>Contact Us</SheetTitle>
				<Link
					href="https://www.instagram.com/lea_insurancecorp"
					className="flex items-center"
				>
					<Instagram className="mr-2 h-6 w-6" />
					<span>Instagram</span>
				</Link>
				<Link href="https://g.page/leainsurance" className="flex items-center">
					<Store className="mr-2 h-6 w-6" />
					<span>Google Business</span>
				</Link>
				<Link
					href="mailto:info@leainsurance.com"
					className="flex items-center"
				>
					<Mail className="mr-2 h-6 w-6" />
					<span>Email</span>
				</Link>
				<Link href="tel:+18886954221" className="flex items-center">
					<Phone className="mr-2 h-6 w-6" />
					<span>Call Us Today</span>
				</Link>
				<Link href="tel:+18888081540" className="flex items-center">
					<Phone className="mr-2 h-6 w-6" />
					<span>CREOLE</span>
				</Link>
				<div className="flex w-full flex-col gap-2">
					<ThemeToggle variant="default" />
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
