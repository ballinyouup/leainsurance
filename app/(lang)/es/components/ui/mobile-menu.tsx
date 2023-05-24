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
				<Link href="/es/" className="flex items-center" onClick={handleOpen}>
					<Home className="mr-2 h-6 w-6" />
					<span>Volver a casa</span>
				</Link>
				<SheetTitle>Seguros</SheetTitle>
				<Link
					href="/es/medicare"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Stethoscope className="mr-2 h-6 w-6" />
					<span>Medicare</span>
				</Link>
				<Link
					href="/es/obamacare"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Baby className="mr-2 h-6 w-6" />
					<span>Obamacare</span>
				</Link>
				<Link
					href="/es/seguros-de-vida"
					className="flex items-center"
					onClick={handleOpen}
				>
					<FileHeart className="mr-2 h-6 w-6" />
					<span>Seguros De Vida</span>
				</Link>
				<Link
					href="/es/gastos-finales"
					className="flex items-center"
					onClick={handleOpen}
				>
					<Sprout className="mr-2 h-6 w-6" />
					<span>Gastos Finales</span>
				</Link>
				<SheetTitle>Contacta con nosotros</SheetTitle>
				<Link
					href="https://www.instagram.com/leainsurance"
					className="flex items-center"
				>
					<Instagram className="mr-2 h-6 w-6" />
					<span>Instagram</span>
				</Link>
				<Link href="https://g.page/leainsurance" className="flex items-center">
					<Store className="mr-2 h-6 w-6" />
					<span>Google</span>
				</Link>
				<Link
					href="mailto:lea.info@leainsurance.onmicrosoft.com"
					className="flex items-center"
				>
					<Mail className="mr-2 h-6 w-6" />
					<span>Correo Electrónico De Clientes</span>
				</Link>
				<Link
					href="mailto:lea.contracts@leainsurance.onmicrosoft.com"
					className="flex items-center"
				>
					<Mail className="mr-2 h-6 w-6" />
					<span>Correo Electrónico De Agentes</span>
				</Link>
				<Link href="tel:+18886954221" className="flex items-center">
					<Phone className="mr-2 h-6 w-6" />
					<span>Llámenos hoy</span>
				</Link>
				<div className="flex w-full flex-col gap-2">
					<ThemeToggle variant="default" />
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
