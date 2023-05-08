import Link from "next/link";

const Footer = () => {
	const insuranceLinks = [
		{
			href: "/",
			text: "Home",
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
			href: "/funeral-assistance",
			text: "Funeral Assistance",
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
		<footer className="flex w-full items-center justify-center text-lg text-white">
			<div className="flex w-full items-center justify-center bg-black p-6 sm:p-12 md:max-w-9xl">
				{/** Insurance Footer Section */}
				<div className="flex w-full max-w-xs items-center justify-center">
					<ul className="w-fit">
						{insuranceLinks.map((link, index) => (
							<li key={link.text}>
								{index !== 0 ? (
									<Link href={link.href} className="hover:underline">
										{link.text}
									</Link>
								) : (
									<span className="font-bold">{link.text}</span>
								)}
							</li>
						))}
					</ul>
				</div>
				{/** Policies Footer Section */}
				<div className="flex w-full max-w-xs items-center justify-center">
					<ul className="w-fit">
						{policies.map((link, index) => (
							<li key={link.text}>
								{index !== 0 ? (
									<Link href={link.href} className="hover:underline">
										{link.text}
									</Link>
								) : (
									<span className="font-bold">{link.text}</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
