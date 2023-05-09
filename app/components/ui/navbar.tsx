import Logo from "./logo";
import DropMenu from "./dropdown";
import MobileMenu from "./mobile-menu";
import { PhoneCall } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
const Navbar = () => {
	return (
		<header className="relative z-20 flex w-full flex-col items-center">
			<div className="flex w-full max-w-9xl flex-col items-center">
				{/** Top Nav Section */}
				<div className="flex w-full flex-col items-center">
					<div className="flex w-full flex-row items-center justify-end bg-teal-950 sm:h-6">
						<div className="flex w-full items-center justify-center gap-3 p-0 sm:h-6 sm:justify-end sm:gap-4 sm:pr-3">
							<span className="whitespace-nowrap text-xs font-semibold text-white">
								Hours: 9am - 5pm
							</span>
							<div className="flex items-center gap-1">
								<PhoneCall className="h-3 w-3 text-white" />

								<span className="whitespace-nowrap text-xs font-semibold text-white">
									+1 (888)-695-4221
								</span>
							</div>
						</div>
					</div>
				</div>
				{/** Bottom Nav Section */}
				<div className="flex h-16 w-full flex-row items-center justify-between bg-black px-4 py-10">
					<Logo />
					<div className="hidden w-fit gap-2 sm:flex">
						<ThemeToggle variant="ghost" />
						<DropMenu />
					</div>
					<div className="flex w-fit sm:hidden">
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
