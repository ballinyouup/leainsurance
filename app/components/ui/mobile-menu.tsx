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
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../shadcn-ui/button";
const MobileMenu = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="h-8 w-8 text-white" />
			</SheetTrigger>
			<SheetContent className="flex w-full flex-col">
				<SheetTitle>Insurance</SheetTitle>
				<Link href="/medicare" className="flex items-center">
					<Stethoscope className="mr-2 h-4 w-4" />
					<span>Medicare</span>
				</Link>
				<Link href="/obamacare" className="flex items-center">
					<Baby className="mr-2 h-4 w-4" />
					<span>Obamacare</span>
				</Link>
				<Link href="/life-insurance" className="flex items-center">
					<FileHeart className="mr-2 h-4 w-4" />
					<span>Life Insurance</span>
				</Link>
				<Link href="/funeral-assistance" className="flex items-center">
					<Sprout className="mr-2 h-4 w-4" />
					<span>Funeral Assistance</span>
				</Link>
				<SheetTitle>Contact Us</SheetTitle>
				<Link
					href="https://www.instagram.com/leainsurance"
					className="flex items-center"
				>
					<Instagram className="mr-2 h-4 w-4" />
					<span>Instagram</span>
				</Link>
				<Link href="https://g.page/leainsurance" className="flex items-center">
					<Store className="mr-2 h-4 w-4" />
					<span>Google Business</span>
				</Link>
				<Link
					href="mailto:lea.info@leainsurance.onmicrosoft.com"
					className="flex items-center"
				>
					<Mail className="mr-2 h-4 w-4" />
					<span>Email</span>
				</Link>
				<Link href="tel:+18886954221" className="flex items-center">
					<Phone className="mr-2 h-4 w-4" />
					<span>Call Us Today</span>
				</Link>
				<div className="flex w-full flex-col gap-2">
					<ThemeToggle variant="default" />
					<SignInButton>
						<Button>Sign In</Button>
					</SignInButton>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
