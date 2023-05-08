import Image from "next/image";
import Logo from "./logo";
import DropMenu from "./dropdown";

const Navbar = () => {
	return (
		<header className="relative z-20 flex w-full flex-col items-center">
			<div className="flex w-full max-w-9xl flex-col items-center">
				<div className="flex w-full flex-col items-center">
					<div className="flex w-full flex-row items-center justify-end bg-teal-950 sm:h-6">
						<div className="flex w-full flex-col items-center justify-center p-0 sm:h-6 sm:flex-row sm:justify-end sm:gap-4 sm:pr-3">
							<span className="whitespace-nowrap text-xs font-semibold text-white">
								Hours: 9am - 5pm
							</span>
							<div className="flex items-center">
								<Image
									className="h-6 w-6"
									src="/phone.png"
									alt="phone icon"
									width={24}
									height={24}
								/>
								<span className="whitespace-nowrap text-xs font-semibold text-white">
									+1 (888)-695-4221
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-16 w-full flex-row items-center justify-between bg-black px-4 py-10">
					<Logo />
					<div className="hidden w-fit gap-2 sm:flex">
						<div className="flex font-semibold">
							<DropMenu />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
