import Image from "next/image";

const AboutSection = () => {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-8 px-5 pt-8 lg:p-8">
			<span className="w-full max-w-md rounded-xl bg-black p-4 text-center text-4xl font-bold uppercase text-white">
				Meet your Agent
			</span>
			<div className="flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row">
				<Image
					src={"/delia.jpg"}
					alt={"Delia Huici Picture"}
					width={200}
					height={200}
					className="rounded-lg"
				/>
				<span className="max-w-md text-xl lg:w-192 lg:max-w-none">
					Meet Delia Huici, a licensed insurance agent with expertise in Life
					Insurance, Medicare/Medicaid, Obamacare, and Funeral Assistance. With
					over 20 years of experience in the healthcare industry, Delia is
					dedicated to helping clients obtain the best insurance coverage
					possible. Trustworthy and knowledgeable, she can assist you in
					choosing the right insurance plan and provide guidance with claims.
					Contact Delia today to learn more about her services.
				</span>
			</div>
		</section>
	);
};

export default AboutSection;
