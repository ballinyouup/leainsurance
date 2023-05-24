import Link from "next/link";
import { Instagram, Store, Facebook, Mail, Phone } from "lucide-react";
const Footer = () => {
	const socialLinks = [
		{
			href: "https://www.instagram.com/leainsurance",
			text: "Instagram",
			icon: <Instagram className="mr-2 h-5 w-5" />,
		},
		{
			href: "https://www.g.page/leainsurance",
			text: "Google",
			icon: <Store className="mr-2 h-5 w-5" />,
		},
		{
			href: "https://www.facebook.com/profile.php?id=100091460381816",
			text: "Facebook",
			icon: <Facebook className="mr-2 h-5 w-5" />,
		},
		{
			href: "tel:+18886954221",
			text: "Call Us",
			icon: <Phone className="mr-2 h-5 w-5" />,
		},
		{
			href: "mailto:lea.info@leainsurance.onmicrosoft.com",
			text: "Email",
			icon: <Mail className="mr-2 h-5 w-5" />,
		},
	];
	const insuranceLinks = [
		{
			href: "/",
			text: "Learn",
		},
		{
			href: "/medicare",
			text: "Medicare",
		},
		{
			href: "/obamacare",
			text: "Obamacare",
		},
		{
			href: "/life-insurance",
			text: "Life Insurance",
		},
		{
			href: "/final-expenses",
			text: "Final Expenses",
		},
	];
	const policies = [
		{
			href: "",
			text: "Policies",
		},
		{
			href: "/",
			text: "Terms of Use",
		},
		{
			href: "/",
			text: "Legal Notices",
		},
		{
			href: "/",
			text: "Privacy Policy",
		},
		{
			href: "/",
			text: "Site Map",
		},
	];
	return (
		<footer className="-mt-1 flex w-full items-center justify-center text-xl text-white">
			<div className="flex w-full flex-col gap-8 bg-black p-6 sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:p-12 md:max-w-9xl">
				{/** Insurance Footer Section */}
				<div className="flex w-full max-w-xs items-center justify-center">
					<ul className="w-full sm:w-fit">
						{insuranceLinks.map((link, index) => (
							<li key={link.text}>
								{index !== 0 ? (
									<Link href={link.href} className="hover:underline">
										{link.text}
									</Link>
								) : (
									<span className="font-bold underline">{link.text}</span>
								)}
							</li>
						))}
					</ul>
				</div>
				{/** Policies Footer Section */}
				<div className="flex w-full max-w-xs items-center justify-center">
					<ul className="w-full sm:w-fit">
						{policies.map((link, index) => (
							<li key={link.text}>
								{index !== 0 ? (
									<Link href={link.href} className="hover:underline">
										{link.text}
									</Link>
								) : (
									<span className="font-bold underline">{link.text}</span>
								)}
							</li>
						))}
					</ul>
				</div>
				{/** Policies Footer Section */}
				<div className="flex w-full max-w-xs items-center justify-center">
					<ul className="w-full sm:w-fit">
						{socialLinks.map((link) => (
							<li key={link.text}>
								<Link
									href={link.href}
									className="flex w-full items-center hover:underline"
								>
									{link.icon}
									<span>{link.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;