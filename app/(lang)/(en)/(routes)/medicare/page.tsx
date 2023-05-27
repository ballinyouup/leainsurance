import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<span className="absolute bottom-4 left-4 text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						MEDICARE
					</span>
					<Image
						alt="Medicare Image"
						className="relative -top-24 w-full min-w-[1200px] mix-blend-screen brightness-50"
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
						<TabsTrigger value="original">Original Medicare</TabsTrigger>
						<TabsTrigger value="advantage">Medicare Advantage</TabsTrigger>
						<TabsTrigger value="supplement">Medicare Supplement</TabsTrigger>
						<TabsTrigger value="prescription" className="flex flex-wrap">
							<span>Prescription&nbsp;</span>
							<span>Drug&nbsp;</span>
							<span>Coverage</span>
						</TabsTrigger>
						<TabsTrigger value="costs">Costs & Coverage</TabsTrigger>
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
								Medicare is a federal health insurance program that helps
								millions of Americans pay for their health care needs. Whether
								you are 65 or older, disabled, or have certain chronic
								conditions, you may be eligible for Medicare coverage.
							</span>
							<span>
								Established in 1965, Medicare has evolved to include different
								parts (A, B, C, and D) that cater to various healthcare needs.
							</span>
							<span>
								This program is administered by the Centers for Medicare and
								Medicaid Services (CMS), with enrollment handled by the Social
								Security Administration.
							</span>
							<span>
								Private entities are contracted by CMS to provide specific
								services, including claims processing, auditing, and quality
								oversight.
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
							<div>
								<span className="font-bold">
									To be eligible for Medicare, individuals must be:
								</span>
								<ul className="ml-8 list-disc">
									<li>
										You are 65 or older and a U.S. citizen or a legal resident
										who has lived in the U.S. for at least five years.
									</li>
									<li>
										You are under 65 and have a disability that qualifies you
										for Social Security benefits for at least 24 months.
									</li>
									<li>
										You are under 65 and have end-stage renal disease (ESRD) or
										amyotrophic lateral sclerosis (ALS)
									</li>
								</ul>
							</div>
							<div>
								<span className="font-bold">You can enroll:</span>
								<ul className="ml-8 list-disc">
									<li>Online at www.ssa.gov</li>
									<li>By phone at 1-800-772-1213 (TTY 1-800-325-0778)</li>
									<li>In person at your local Social Security office</li>
								</ul>
							</div>
							<span>
								The best time to enroll in Medicare is during your initial
								enrollment period (IEP), which is a seven-month period that
								begins three months before your 65th birthday month and ends
								three months after it. If you enroll during this period, you
								will avoid any late enrollment penalties or gaps in coverage.
							</span>
							<span>
								If you miss your IEP, you can still enroll in Medicare during
								the general enrollment period (GEP), which runs from January 1
								to March 31 each year. However, you may have to pay higher
								premiums and wait until July 1 for your coverage to start.
							</span>
							<span>
								You can also change your Medicare coverage during the annual
								open enrollment period (OEP), which runs from October 15 to
								December 7 each year. During this time, you can switch from
								Original Medicare to a Medicare Advantage plan, or vice versa,
								or change your prescription drug plan.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="original"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>ORIGINAL</span>
							<span>MEDICARE</span>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-xl font-bold">
								Original Medicare consists of two parts:
							</span>
							<ul className="ml-8 list-disc">
								<li>Part A (Hospital Insurance)</li>
								<li>Part B (Medical Insurance)</li>
							</ul>
							<span className="text-xl font-bold">
								Part A (Hospital Insurance)
							</span>
							<span>
								Part A covers inpatient hospital care, skilled nursing facility
								care, hospice care, and some home health care services. Most
								people do not pay a premium for Part A if they or their spouse
								paid Medicare taxes while working for at least 10 years (40
								quarters).
							</span>
							<span>
								Most people do not pay a monthly premium for Part A if they or
								their spouse paid Medicare taxes while working. However, if you
								do not qualify for premium-free Part A, you can buy it for up to
								$506 per month in 2023. The annual deductible for Part A is
								$1,556 in 2023.
							</span>
							<span className="text-xl font-bold">
								{" "}
								Part B (Medical Insurance)
							</span>
							<span>
								Part B covers medically necessary services and preventive
								services, such as doctor visits, outpatient care, medical
								equipment, and some home health care services. Part B requires a
								monthly premium, which is typically deducted from your Social
								Security benefits.
							</span>
							<span>
								Everyone pays a monthly premium for Part B. The standard premium
								amount is $164.90 per month in 2023. However, if your income is
								above a certain level, you may pay more due to the
								income-related monthly adjustment amount (IRMAA). The annual
								deductible for Part B is $226 in 2023.
							</span>
							<span>
								After you pay your deductible, you usually pay 20% of the
								Medicare-approved amount for covered services. This is called
								coinsurance. You may also pay a fixed amount called a copayment
								for some services.
							</span>
							<span>
								Original Medicare does not cover everything. For example, it
								does not cover prescription drugs, dental care, vision care,
								hearing aids, long-term care, or cosmetic surgery. You may need
								to buy additional coverage or pay out-of-pocket for these
								services.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="advantage"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>MEDICARE</span>
							<span>ADVANTAGE</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<span>
								Medicare Advantage (MA) is an alternative way of getting
								Medicare coverage. It is offered by private insurance companies
								that contract with Medicare to provide all the benefits of Part
								A and Part B. Most MA plans also include Part D (prescription
								drug coverage) and offer extra benefits such as dental care,
								vision care, hearing aids, wellness programs, and more.
							</span>
							<span>
								MA plans vary in terms of costs and benefits. You may pay a
								monthly premium for your MA plan in addition to your Part B
								premium. You may also pay deductibles, copayments, coinsurance,
								and out-of-pocket limits for your MA plan. These costs depend on
								the plan you choose and the services you use.
							</span>
							<span>
								You must follow the rules of your MA plan to get covered
								services. For example, you may need to use providers in your
								plan&apos;s network, get referrals from your primary care
								provider (PCP), or get prior authorization for certain services.
							</span>
							<span>
								You can enroll in an MA plan during your IEP or OEP or during a
								special enrollment period (SEP) if you qualify for one. Some
								examples of SEPs are when you move out of your plan&apos;s
								service area, lose your employer-sponsored coverage, or have a
								change in your Medicaid or Extra Help status. You can also
								switch from one MA plan to another during the Medicare Advantage
								open enrollment period (MA OEP), which runs from January 1 to
								March 31 each year. During this time, you can also switch from
								an MA plan to Original Medicare and join a Part D plan. However,
								you cannot switch from Original Medicare to an MA plan during
								the MA OEP.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="supplement"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
								<span>Medicare</span>
								<span>Supplement</span>
							</div>
							<span>
								Medicare Supplement (also known as Medigap) is a type of private
								insurance that can help you pay for some of the costs that
								Original Medicare does not cover, such as deductibles,
								coinsurance, copayments, and foreign travel emergency care.
								Medigap plans are standardized and regulated by the federal and
								state governments. There are 10 different Medigap plans
								available, each identified by a letter (A, B, C, D, F, G, K, L,
								M, and N). Each plan offers a different level of coverage and
								benefits.
							</span>
							<span>
								To enroll in a Medigap plan, you must have Medicare Part A and
								Part B. You can buy a Medigap plan from any insurance company
								that is licensed to sell it in your state. The best time to buy
								a Medigap plan is during your Medigap open enrollment period,
								which is a six-month period that starts the month you turn 65
								and enroll in Part B. During this period, you have a guaranteed
								issue right to buy any Medigap plan that is sold in your state,
								regardless of your health status or pre-existing conditions. You
								cannot be charged more or denied coverage based on your health.
							</span>
							<span>
								If you miss your Medigap open enrollment period, you may still
								be able to buy a Medigap plan, but you may have to go through
								medical underwriting and pay a higher premium or be denied
								coverage based on your health. However, there are some
								situations where you may have a guaranteed issue right to buy a
								Medigap plan outside of your open enrollment period, such as
								when you lose your employer-sponsored coverage or when you
								switch from a Medicare Advantage plan to Original Medicare.
							</span>
							<span>
								The cost of a Medigap plan depends on several factors, such as
								the plan you choose, the insurance company you buy from, your
								age, your location, and whether you qualify for any discounts.
								You will pay a monthly premium for your Medigap plan in addition
								to your Part B premium. You may also pay deductibles,
								copayments, coinsurance, and out-of-pocket limits for your
								Medigap plan. These costs vary by plan and provider.
							</span>
							<span>
								Medigap plans do not cover everything. For example, they do not
								cover prescription drugs, long-term care, dental care, vision
								care, hearing aids, or private-duty nursing. You may need to buy
								additional coverage or pay out-of-pocket for these services.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="prescription"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col gap-4 text-lg">
							<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
								<span>Prescription</span>
								<span>Drug Coverage</span>
							</div>
							<span>
								Prescription drug coverage (also known as Part D) is an optional
								benefit that helps you pay for your prescription medications.
								Part D plans are offered by private insurance companies that
								contract with Medicare to provide drug coverage. You can get
								Part D coverage either through a stand-alone prescription drug
								plan (PDP) that works with Original Medicare or through a
								Medicare Advantage plan that includes drug coverage.
							</span>
							<span>
								To enroll in a Part D plan, you must have Medicare Part A and/or
								Part B. You can join a Part D plan during your initial
								enrollment period (IEP), which is the same as your IEP for Part
								B. You can also change your Part D plan during the annual open
								enrollment period (OEP), which runs from October 15 to December
								7 each year.
							</span>
							<span>
								The cost of a Part D plan depends on several factors, such as
								the plan you choose, the drugs you take, the pharmacy you use,
								and whether you qualify for any assistance programs. You will
								pay a monthly premium for your Part D plan in addition to your
								Part B premium (and any MA or Medigap premium). You may also pay
								deductibles, copayments, coinsurance, and out-of-pocket limits
								for your Part D plan. These costs vary by plan and provider.
							</span>
							<span>
								Part D plans have different levels of coverage depending on how
								much you spend on drugs each year. These levels are:
							</span>
							<ul>
								<li>
									The deductible stage: You pay 100% of the cost of your drugs
									until you reach your deductible amount ($480 in 2023).
								</li>
								<li>
									The initial coverage stage: You pay a copayment or coinsurance
									for each drug until you reach the initial coverage limit
									($4,430 in 2023).
								</li>
								<li>
									The coverage gap stage: You pay 25% of the cost of brand-name
									drugs and 37% of the cost of generic drugs until you reach the
									out-of-pocket threshold ($7,050 in 2023).
								</li>
								<li>
									The catastrophic coverage stage: You pay a small copayment or
									coinsurance for each drug for the rest of the year.
								</li>
							</ul>
							<span>
								Part D plans do not cover all drugs. Each plan has its own list
								of covered drugs called a formulary. The formulary may change
								from year to year or during the year. You should check the
								formulary of your Part D plan to see if your drugs are covered
								and what tier they are in. You should also check if your plan
								has any restrictions or requirements for your drugs, such as
								prior authorization, quantity limits, or step therapy.
							</span>
							<span>
								Part D plans have a coverage gap (also known as the donut hole)
								that occurs when you and your plan have spent a certain amount
								on drugs ($4,430 in 2023). In the coverage gap, you pay 25% of
								the cost of brand-name drugs and 37% of the cost of generic
								drugs until you reach the out-of-pocket threshold ($7,050 in
								2023). After that, you enter the catastrophic coverage stage,
								where you pay a small copayment or coinsurance for each drug for
								the rest of the year.
							</span>
							<span>
								Part D plans do not cover all drugs. Some drugs are excluded
								from Part D coverage by law, such as drugs for weight loss or
								gain, fertility, cosmetic purposes, or erectile dysfunction. You
								may need to buy additional coverage or pay out-of-pocket for
								these drugs.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="costs"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Costs &</span>
							<span>Coverage</span>
						</div>
						<div>
							<ul className="flex list-disc flex-col gap-4 text-lg">
								<span>
									Medicare costs and benefits can vary depending on the coverage
									you select. Original Medicare has deductibles,copayments, and
									coinsurance, while Medicare Advantage and Medigap plans may
									have different cost-sharing structures. Here&apos;s a brief
									overview of some common costs and benefits associated with
									Medicare:
								</span>
								<span className="text-xl font-bold">Part A:</span>
								<li className="ml-6">
									Premiums: These are monthly payments that you make to have
									Medicare coverage. You may pay premiums for Part A (if you do
									not qualify for premium-free Part A), Part B, Part D, MA, and
									Medigap plans. The amount of your premium depends on the plan
									you choose and your income level.
								</li>
								<span className="text-xl font-bold">Part B:</span>
								<li className="ml-6">
									Deductibles: These are amounts that you pay out-of-pocket
									before your Medicare coverage begins to pay. You may pay
									deductibles for Part A, Part B, Part D, MA, and Medigap plans.
									The amount of your deductible depends on the plan you choose.
								</li>
								<span className="text-xl font-bold">Medigap Costs:</span>
								<li className="ml-6">
									Copayments: These are fixed amounts that you pay for each
									service or item you get. You may pay copayments for Part A,
									Part B, Part D, MA, and Medigap plans. The amount of your
									copayment depends on the plan you choose and the service or
									item you get.
								</li>
								<li className="ml-6">
									Coinsurance: These are percentages of the cost that you pay
									for each service or item you get. You may pay coinsurance for
									Part A, Part B, Part D, MA, and Medigap plans. The amount of
									your coinsurance depends on the plan you choose and the
									service or item you get.
								</li>
								<li className="ml-6">
									Out-of-pocket limits: These are maximum amounts that you pay
									out-of-pocket for covered services in a year. Once you reach
									your out-of-pocket limit, your plan pays 100% of the cost for
									covered services for the rest of the year. You may have
									out-of-pocket limits for Part D and MA plans. The amount of
									your out-of-pocket limit depends on the plan you choose.
								</li>
								<span>
									The benefits of Medicare depend on the type of coverage you
									have and the services you need. In general, you can expect to
									get some or all of the following benefits from Medicare:
								</span>
								<li className="ml-6">
									Hospital insurance: This covers inpatient hospital stays,
									skilled nursing facility care, hospice care, and some home
									health care. You get this benefit from Part A or MA plans.
								</li>
								<li className="ml-6">
									Medical insurance: This covers doctor visits, outpatient
									services, preventive care, durable medical equipment, and some
									home health care. You get this benefit from Part B or MA
									plans.
								</li>
								<li className="ml-6">
									Prescription drug coverage: This covers prescription
									medications and some vaccines. You get this benefit from Part
									D or MA plans that include drug coverage.
								</li>
								<li className="ml-6">
									Supplemental insurance: This covers some of the costs that
									Original Medicare does not cover, such as deductibles,
									coinsurance, copayments, and foreign travel emergency care.
									You get this benefit from Medigap plans.
								</li>
								<li className="ml-6">
									Additional benefits: These are extra benefits that some MA
									plans offer beyond what Original Medicare covers, such as
									dental care, vision care, hearing aids, wellness programs, and
									more.
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent
						value="additional"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>ADDITIONAL</span>
							<span>BENEFITS</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<ul className="list-disc">
								<span>
									Some Medicare Advantage plans offer additional benefits that
									Original Medicare does not cover. These benefits may vary by
									plan and provider. Some examples of additional benefits are:
								</span>
								<li className="ml-6">
									Dental care: This covers preventive and restorative dental
									services, such as exams, cleanings, fillings, crowns, and
									dentures.
								</li>
								<li className="ml-6">
									Vision care: This covers eye exams, glasses, contacts, and
									cataract surgery.
								</li>
								<li className="ml-6">
									Hearing aids: This covers hearing tests, hearing aids, and
									hearing aid batteries.
								</li>
								<li className="ml-6">
									Wellness programs: These are programs that help you improve
									your health and well-being, such as fitness classes, health
									coaching, nutrition counseling, and chronic disease
									management.
								</li>
								<li className="ml-6">
									Transportation: This covers rides to and from medical
									appointments, pharmacies, or other health-related locations.
								</li>
								<li className="ml-6">
									Over-the-counter (OTC) items: This covers certain
									non-prescription drugs and health-related items, such as pain
									relievers, vitamins, bandages, and thermometers.
								</li>
								<li className="ml-6">
									Meal delivery: This covers home-delivered meals after a
									hospital stay or for certain chronic conditions.
								</li>
								<li className="ml-6">
									Home modifications: This covers changes to your home to make
									it safer and more accessible, such as ramps, grab bars, or
									stair lifts.
								</li>
								<span>
									To find out what additional benefits your MA plan offers, you
									can check your plan&apos;s summary of benefits, evidence of
									coverage, or website. You can also compare different MA plans
									and their additional benefits using the Medicare Plan Finder
									tool. You should also check if your plan has any rules or
									limitations for using these additional benefits, such as prior
									authorization, network restrictions, or quantity limits.
								</span>
							</ul>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
