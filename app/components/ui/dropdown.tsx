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
import { Button } from "../shadcn-ui/button";

const DropMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="w-full rounded-md p-1.5">
				<Button variant="ghost" className="flex gap-2 text-accent-foreground items-center">
					<BookDown className="h-5 w-5" />
					<span>Learn</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Insurance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href="/medicare" className="flex items-center">
						<Stethoscope className="mr-2 h-4 w-4" />
						<span>Medicare</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/obamacare" className="flex items-center">
						<Baby className="mr-2 h-4 w-4" />
						<span>Obamacare</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/life-insurance" className="flex items-center">
						<FileHeart className="mr-2 h-4 w-4" />
						<span>Life Insurance</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/funeral-assistance" className="flex items-center">
						<Sprout className="mr-2 h-4 w-4" />
						<span>Funeral Assistance</span>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropMenu;
