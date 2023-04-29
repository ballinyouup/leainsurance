import Link from "next/link";

const PoliciesBlock = () => {
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
	);
};

export default PoliciesBlock;
