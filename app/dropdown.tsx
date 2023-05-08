"use client";

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "$/dropdown-menu";
import { BookDown, Stethoscope, Baby, FileHeart, Sprout } from "lucide-react";
import Link from "next/link";

const DropMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="rounded-md p-1.5 transition-all hover:bg-primary">
				<BookDown className="h-6 w-6 text-white" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Insurance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href="/medicare" className="flex">
						<Stethoscope className="mr-2 h-4 w-4" />
						<span>Medicare</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/obamacare" className="flex">
						<Baby className="mr-2 h-4 w-4" />
						<span>Obamacare</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/life-insurance" className="flex">
						<FileHeart className="mr-2 h-4 w-4" />
						<span>Life Insurance</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/funeral-assistance" className="flex">
						<Sprout className="mr-2 h-4 w-4" />
						<span>Funeral Assistance</span>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropMenu;
