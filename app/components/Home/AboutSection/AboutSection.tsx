import Image from "next/image";

const AboutSection = () => {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-8 px-5 pt-8 lg:p-8">
			<span className="z-10 w-full max-w-md rounded-xl bg-teal-900 p-4 text-center text-4xl font-bold uppercase text-white shadow-[5px_5px_5px] shadow-black">
				Meet your Agents
			</span>
			<div className="z-10 flex w-fit max-w-5xl flex-col items-center gap-12 rounded-lg bg-white p-8 lg:w-full lg:flex-row">
				<Image
					src={"/delia.jpg"}
					alt={"Delia Huici Picture"}
					width={200}
					height={200}
					className="rounded-lg"
				/>
				<div className="w-full max-w-md lg:max-w-lg">
					<h3 className="text-2xl font-bold">Delia Huici</h3>
					<span className="text-base text-black sm:text-lg lg:w-192">
						Meet Delia Huici, a licensed insurance agent with expertise in Life
						Insurance, Medicare/Medicaid, Obamacare, and Funeral Assistance.
						With over 20 years of experience in the healthcare industry, Delia
						is dedicated to helping clients obtain the best insurance coverage
						possible. Trustworthy and knowledgeable, she can assist you in
						choosing the right insurance plan and provide guidance with claims.
						Contact Delia today to learn more about her services.
					</span>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
