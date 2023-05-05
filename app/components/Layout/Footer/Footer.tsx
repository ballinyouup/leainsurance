import InsuranceBlock from "./InsuranceBlock";
import PoliciesBlock from "./PoliciesBlock";

const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-center text-lg text-white">
			<div className="flex w-full items-center justify-center bg-black p-6 sm:p-12 md:max-w-9xl">
				<InsuranceBlock />
				<PoliciesBlock />
			</div>
		</footer>
	);
};

export default Footer;
