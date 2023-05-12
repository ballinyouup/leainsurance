import { Metadata } from "next";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "$/tabs";
import Image from "next/image";
export const metadata: Metadata = {
	title: "Obamacare",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Health Insurance, Health Services, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<span className="absolute bottom-4 left-4 text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						OBAMACARE
					</span>
					<Image
						alt="Obamacare Image"
						className="relative -left-20 -top-24 w-full min-w-[1200px] mix-blend-screen brightness-50"
						src="/familyreal.jpg"
						width={1200}
						height={1200}
					/>
				</div>
				<Tabs
					defaultValue="overview"
					className="grid h-full min-h-[600px] w-full grid-cols-1 sm:grid-cols-12"
					orientation="vertical"
				>
					<TabsList className="col-span-4 grid h-fit grid-cols-1">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="eligibility">
							Eligibility & Enrollment
						</TabsTrigger>
						<TabsTrigger value="types">Types of Plans</TabsTrigger>
						<TabsTrigger value="tax" className="flex flex-wrap">
							<span>Premium Tax&nbsp;</span>
							<span>Credits</span>
						</TabsTrigger>
						<TabsTrigger value="csrs" className="flex flex-wrap">
							<span>Cost Sharing&nbsp;</span>
							<span>Reduction Subsidies</span>
						</TabsTrigger>
						<TabsTrigger value="medicaid" className="flex flex-wrap">
							<span>Medicaid &&nbsp;</span>
							<span>CHIP</span>
						</TabsTrigger>
						<TabsTrigger value="guide">Obamacare Guide</TabsTrigger>
						<TabsTrigger value="additional">Additional Benefits</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="pb-2 text-4xl font-bold sm:text-5xl">
								OVERVIEW
							</div>
							<span>
								The Affordable Care Act (ACA), also known as Obamacare, is a
								comprehensive healthcare reform law enacted in 2010. Its primary
								goal is to make health insurance more affordable and accessible
								for all Americans, regardless of age, income, or pre-existing
								conditions.
							</span>
							<span>
								Obamacare offers various types of cost assistance, such as
								premium tax credits, cost-sharing reduction subsidies, Medicaid
								expansion, and the Children&apos;s Health Insurance Program
								(CHIP).
							</span>
							<span>
								Obamacare also sets minimum standards for health plans, such as
								covering essential health benefits, preventive services, and
								pre-existing conditions.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Eligibility &</span>
							<span>Enrollment</span>
						</div>
						<p className="flex flex-col gap-6 text-lg">
							<span>
								To be eligible for Obamacare, you must be a U.S. citizen or a
								lawfully present immigrant, and you must not be incarcerated.
							</span>
							<span>
								You must also have a household income between 100% and 400% of
								the federal poverty level (FPL) to qualify for premium tax
								credits, or between 100% and 250% of the FPL to qualify for
								cost-sharing reduction subsidies. You can check your eligibility
								and apply for Obamacare through the Health Insurance
								Marketplace, which is an online platform where you can compare
								and shop for health plans. You can also apply by phone, by mail,
								or in person with the help of a trained assister.
							</span>
							<span>
								The open enrollment period for 2023 health plans starts on
								November 1, 2022, and ends on January 15, 2023. During this
								time, you can enroll in a new plan or change your current plan.
							</span>
							<span>
								If you miss the open enrollment deadline, you may still be able
								to enroll in a health plan if you qualify for a special
								enrollment period due to a life event, such as losing other
								coverage, getting married, having a baby, or based on estimated
								household income. You can also enroll in Medicaid or CHIP at any
								time if you are eligible.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="types"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Types of</span>
							<span>Health Plans</span>
						</div>
						<p>
							<span>
								Obamacare offers four types of health plans: bronze, silver,
								gold, and platinum. These plans differ in how much they cover
								and how much you pay out of pocket. Generally, bronze plans have
								the lowest premiums but the highest deductibles and copayments,
								while platinum plans have the highest premiums but the lowest
								deductibles and copayments. Silver plans are the most popular
								because they are eligible for both premium tax credits and
								cost-sharing reduction subsidies.
							</span>
							<ul className="list-disc">
								<span>
									All Obamacare plans must cover 10 essential health benefits:
								</span>
								<li className="ml-6">Ambulatory patient services</li>
								<li className="ml-6">Emergency services</li>
								<li className="ml-6">Maternity and newborn care</li>
								<li className="ml-6">
									Mental health and substance use disorder services
								</li>
								<li className="ml-6">Prescription drugs</li>
								<li className="ml-6">
									Rehabilitative and habilitative services and devices
								</li>
								<li className="ml-6">Laboratory services</li>
								<li className="ml-6">
									Preventive and wellness services and chronic disease
									management
								</li>
								<li className="ml-6">
									Pediatric services, including oral and vision care
								</li>
								<span>
									All Obamacare plans must also cover preventive services at no
									cost to you, such as screenings, immunizations, counseling,
									and check-ups. Additionally, all Obamacare plans must cover
									pre-existing conditions without charging you more or denying
									you coverage.
								</span>
							</ul>
						</p>
					</TabsContent>
					<TabsContent
						value="tax"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Premium Tax Credits
						</div>
						<span>
							Premium tax credits are a type of cost assistance that help lower
							your monthly premium for an Obamacare plan. The amount of your
							premium tax credit depends on your household income, family size,
							and the cost of health plans in your area. You can choose to
							receive your premium tax credit in advance to lower your monthly
							premium payments or claim it when you file your federal income tax
							return.
						</span>
						<ul className="list-disc">
							<span>
								To qualify for premium tax credits, you must meet the following
								criteria:
							</span>
							<li className="ml-6">
								You have a household income between 100% and 400% of the FPL
								($13,590-$54,360 for an individual or $27,750-$111,000 for a
								family of four in 2023).
							</li>
							<li className="ml-6">
								You are not eligible for other affordable health coverage, such
								as employer-sponsored insurance, Medicare, Medicaid, or CHIP.
							</li>
							<li className="ml-6">
								You enroll in a health plan through the Marketplace.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="csrs"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Cost-Sharing</span>
							<span>Reduction Subsidies</span>
						</div>
						<span>
							Cost-sharing reduction subsidies are another type of cost
							assistance that help lower your out-of-pocket costs for an
							Obamacare plan. These subsidies reduce your deductibles,
							copayments, coinsurance, and out-of-pocket maximums. The amount of
							your cost-sharing reduction subsidy depends on your household
							income and the type of plan you choose.
						</span>
						<ul className="list-disc">
							<span>
								To qualify for cost-sharing reduction subsidies, you must meet
								the following criteria:
							</span>
							<li className="ml-6">
								You have a household income between 100% and 250% of the FPL
								($13,590-$33,975 for an individual or $27,750-$69,375 for a
								family of four in 2023).
							</li>
							<li className="ml-6">
								You enroll in a silver plan through the Marketplace.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="medicaid"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Medicaid Expansion</span>
							<span>& CHIP</span>
						</div>
						<span>
							Medicaid is a joint federal-state program that provides health
							coverage to low-income people, children, pregnant women, seniors,
							and people with disabilities. CHIP is a similar program that
							covers children and some pregnant women who have slightly higher
							incomes than Medicaid. Both programs are administered by states
							within federal guidelines and offer comprehensive benefits at
							little or no cost to enrollees.
						</span>
						<span>
							The ACA expanded Medicaid eligibility to nearly all adults with
							incomes up to 138% of the FPL ($18,754 for an individual or
							$38,295 for a family of four in 2023). However, the Supreme Court
							ruled that states could choose whether or not to adopt the
							expansion. As of January 2023, 41 states (including DC) have
							adopted the Medicaid expansion and 10 states have not. The federal
							government pays 90% of the cost of covering the expansion
							population.
						</span>
						<span>
							Some states that have not adopted the Medicaid expansion have
							pursued alternative approaches to expand coverage to low-income
							adults, such as Section 1115 waivers that impose work
							requirements, premiums, copayments, or other conditions on
							eligibility or benefits. However, these waivers have faced legal
							challenges and have been withdrawn by CMS under the Biden
							Administration.
						</span>
						<span>
							The ARPA included a two-year fiscal incentive for non-expansion
							states to adopt the Medicaid expansion by increasing their regular
							federal matching rate by 5 percentage points for two years. So
							far, only North Carolina has taken up this offer and approved
							Medicaid expansion in March 2023, with coverage expected to begin
							in July 2023. Other non-expansion states may consider adopting the
							expansion in 2023 through legislative action or ballot
							initiatives.
						</span>
					</TabsContent>
					<TabsContent
						value="guide"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Obamacare Guide
						</div>
						<span className="text-2xl font-bold">How to Compare Plans</span>
						<ul className="list-disc">
							<span>
								When choosing an Obamacare plan, you should consider several
								factors, such as:
							</span>
							<li className="ml-6">
								The monthly premium: This is the amount you pay each month for
								your health plan, regardless of how much health care you use.
								You may qualify for premium tax credits to lower this amount.
							</li>
							<li className="ml-6">
								The deductible: This is the amount you pay out of pocket before
								your health plan starts to pay for covered services. Generally,
								plans with lower premiums have higher deductibles and vice
								versa.
							</li>
							<li className="ml-6">
								The copayment: This is a fixed amount you pay for a covered
								service, such as a doctor&apos;s visit or a prescription drug.
								Copayments vary by plan and type of service.
							</li>
							<li className="ml-6">
								The coinsurance: This is a percentage of the cost of a covered
								service that you pay after you meet your deductible. For
								example, if your coinsurance is 20%, you pay 20% of the cost and
								your plan pays 80%.
							</li>
							<li className="ml-6">
								The out-of-pocket maximum: This is the most you have to pay for
								covered services in a year. After you reach this limit, your
								plan pays 100% of the cost of covered services. The
								out-of-pocket maximum includes your deductible, copayments, and
								coinsurance, but not your premiums.
							</li>
							<li className="ml-6">
								The network: This is the group of providers (doctors, hospitals,
								pharmacies, etc.) that your plan contracts with to provide
								services at lower rates. You may pay more or get no coverage at
								all if you go to a provider outside your network.
							</li>
							<li className="ml-6">
								The benefits: These are the services that your plan covers. All
								Obamacare plans must cover essential health benefits and
								preventive services at no cost to you. Some plans may also offer
								additional benefits, such as dental, vision, or wellness
								programs.
							</li>
						</ul>
						<span className="text-2xl font-bold">
							How to Get Help with Enrollment
						</span>
						<ul className="list-disc">
							<span>
								If you need help with enrolling in an Obamacare plan, you have
								several options:
							</span>
							<li className="ml-6">
								You can call the Marketplace Call Center at 1-800-318-2596 (TTY:
								1-855-889-4325) and speak to a trained representative who can
								answer your questions and help you enroll over the phone.
							</li>
							<li className="ml-6">
								You can visit HealthCare.gov/find-assistance/ and search by city
								and state or ZIP code to find local helpers in your community
								who can provide free in-person assistance with enrollment. These
								helpers include navigators, certified application counselors,
								agents, brokers, and other organizations.
							</li>
							<li className="ml-6">
								You can use HealthCare.gov/see-plans/ to see plans and prices
								available in your area before you apply. You can also use
								HealthCare.gov/local-help/ to find local helpers in your
								community who can provide free in-person assistance with
								enrollment.
							</li>
						</ul>
						<span className="text-2xl font-bold">
							How to Report Changes in Income or Household Size
						</span>
						<span>
							It is important to report any changes in your income or household
							size to the Marketplace as soon as possible. These changes may
							affect your eligibility for Obamacare plans and cost assistance,
							as well as your tax liability. For example, if your income
							increases, you may qualify for less premium tax credit and owe
							money when you file your taxes. If your income decreases, you may
							qualify for more premium tax credit and get a refund when you file
							your taxes. If you have a baby, get married, or get divorced, you
							may need to change your health plan or enroll in a new one.
						</span>
						<span>
							You can report changes in your income or household size online, by
							phone, or by mail. You can also use the Marketplace app to update
							your information. You will need to provide proof of the changes,
							such as pay stubs, tax returns, birth certificates, or marriage
							certificates.
						</span>
					</TabsContent>
					<TabsContent
						value="additional"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Additional Benefits
						</div>
						<span>
							Some Obamacare plans may offer additional benefits that are not
							required by law but may enhance your health and well-being. These
							benefits may include:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Dental coverage: This benefit covers preventive, basic, and
								major dental services, such as exams, cleanings, fillings,
								crowns, and implants. Some plans may also cover orthodontia for
								children under 19.
							</li>
							<li className="ml-6">
								Vision coverage: This benefit covers eye exams, glasses, and
								contact lenses. Some plans may also cover eye surgeries, such as
								LASIK or cataract removal.
							</li>
							<li className="ml-6">
								Wellness programs: These programs provide incentives or rewards
								for participating in healthy activities, such as exercise,
								nutrition counseling, smoking cessation, or stress management.
							</li>
							<li className="ml-6">
								Telehealth services: These services allow you to access health
								care providers remotely through phone, video, or online
								platforms. You can use telehealth services for primary care,
								urgent care, mental health care, or specialty care.
							</li>
							<li className="ml-6">
								COVID-19 benefits: Some plans may offer additional benefits
								related to the COVID-19 pandemic, such as free testing,
								treatment, and vaccination; waived cost-sharing for telehealth
								services; extended grace periods for premium payments; or home
								delivery of prescription drugs.
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
