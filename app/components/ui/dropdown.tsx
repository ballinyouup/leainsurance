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
				<Button
					variant="ghost"
					className="flex items-center gap-2 text-accent-foreground"
				>
					<BookDown className="h-5 w-5" />
					<span>Learn</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="text-lg">Insurance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/medicare">
					<DropdownMenuItem className="flex items-center text-lg">
						<Stethoscope className="mr-2 h-4 w-4" />
						<span>Medicare</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/obamacare">
					<DropdownMenuItem className="flex items-center text-lg">
						<Baby className="mr-2 h-4 w-4" />
						<span>Obamacare</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/life-insurance">
					<DropdownMenuItem className="flex items-center text-lg">
						<FileHeart className="mr-2 h-4 w-4" />
						<span>Life Insurance</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/final-expenses">
					<DropdownMenuItem className="flex items-center text-lg">
						<Sprout className="mr-2 h-4 w-4" />
						<span>Final Expenses</span>
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropMenu;
