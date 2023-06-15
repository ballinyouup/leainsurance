"use client";

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "$/dropdown-menu";
import {
	ChevronDown,
	Stethoscope,
	Baby,
	FileHeart,
	Sprout,
} from "lucide-react";
import Link from "next/link";
import { Button } from "$/button";

const DropMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="w-full rounded-md p-1.5">
			<Button
					variant="ghost"
					className="flex items-center gap-1 text-accent-foreground [&>svg]:aria-expanded:rotate-180"
				>
					
					<span>Aprender</span>
					<ChevronDown className="h-5 w-5 transition" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="text-lg">Seguros</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/es/medicare">
					<DropdownMenuItem className="flex items-center text-lg">
						<Stethoscope className="mr-2 h-4 w-4" />
						<span>Medicare</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/es/obamacare">
					<DropdownMenuItem className="flex items-center text-lg">
						<Baby className="mr-2 h-4 w-4" />
						<span>Obamacare</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/es/seguro-de-vida">
					<DropdownMenuItem className="flex items-center text-lg">
						<FileHeart className="mr-2 h-4 w-4" />
						<span>Seguro De Vida</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/es/gastos-finales">
					<DropdownMenuItem className="flex items-center text-lg">
						<Sprout className="mr-2 h-4 w-4" />
						<span>Gastos Finales</span>
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropMenu;
