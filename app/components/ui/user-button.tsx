"use client";
import { Avatar, AvatarImage, AvatarFallback } from "$/avatar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "$/dropdown-menu";
import { useUser, useAuth } from "@clerk/nextjs";
import { LogOut, Wrench, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const UserButton = () => {
	const { user } = useUser();
	const { signOut } = useAuth();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="ml-2 transition-all hover:border-2 hover:border-primary">
					<AvatarImage src={user?.profileImageUrl} alt="Profile Image" />
					<AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex flex-wrap items-center">
					<span>Welcome&nbsp;</span>
					<span>{user?.firstName}</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href="/dashboard" className="flex items-center">
						<LayoutDashboard className="mr-2 h-4 w-4" />
						<span>Dashboard</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/account" className="flex items-center">
						<Wrench className="mr-2 h-4 w-4" />
						<span>Account</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button onClick={() => signOut()} className="flex items-center">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sign Out</span>
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserButton;
