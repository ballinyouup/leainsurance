import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="relative flex h-16 w-fit cursor-pointer items-center overflow-hidden rounded-lg"
		>
			<Image
				className="h-64 w-full min-w-[80px] object-cover"
				src="/lealogo.png"
				alt="Lea Insurance Logo"
				width={80}
				height={80}
			/>
		</Link>
	);
};

export default Logo;
