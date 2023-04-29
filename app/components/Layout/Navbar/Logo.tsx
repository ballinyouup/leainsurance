import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="relative flex h-16 w-fit cursor-pointer items-center overflow-hidden rounded-xl border border-transparent text-base font-bold text-white before:absolute before:-left-[420px] before:-top-24 before:h-60 before:w-[400px] before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:bg-blue-900 hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]"
		>
			<Image
				className="h-64 w-full min-w-[80px] object-cover"
				src="/lealogo.png"
				alt="Lea Insurance Logo"
				width={80}
				height={80}
				unoptimized
			/>
		</Link>
	);
};

export default Logo;
