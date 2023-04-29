import { Inter } from "next/font/google";
import InsuranceBlock from "./InsuranceBlock";
import PoliciesBlock from "./PoliciesBlock";

const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
	return (
		<footer
			className={`flex w-full items-center justify-center bg-purple p-6 text-lg text-white sm:p-12 ${inter.className}`}
		>
			<InsuranceBlock />
			<PoliciesBlock />
		</footer>
	);
};

export default Footer;
