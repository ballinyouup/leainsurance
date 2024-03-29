import Link from "next/link";
import Image from "next/image";
const Logo = () => {
	return (
		<Link
			href="/es/"
			className="relative flex h-16 w-fit cursor-pointer items-center overflow-hidden rounded-lg transition-all hover:bg-accent"
		>
			<Image
				className="h-48 w-full min-w-[80px] object-cover sm:h-56"
				src="/lealogo.png"
				alt="Lea Insurance Logo"
				width={1600}
				height={1600}
			/>
		</Link>
	);
};

export default Logo;
