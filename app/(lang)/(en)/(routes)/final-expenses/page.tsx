import { Metadata } from "next";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "$/tabs";
import Image from "next/image";
export const metadata: Metadata = {
	title: "Final Expenses",
	description:
		"At L.E.A Insurance, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Final Expenses, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Final Expenses, Health Insurance, Health Services, Final Expenses FL, Final Expenses Broward, Final Expenses Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span>FINAL</span>
						<span>EXPENSES</span>
					</div>
					<Image
						alt="Final Expenses Image"
						className="relative -top-24 w-full min-w-[1200px] mix-blend-screen brightness-50"
						src="/familyreal.jpg"
						width={600}
						height={600}
					/>
				</div>
				<Tabs
					defaultValue="overview"
					className="grid h-full min-h-[600px] w-full grid-cols-1 sm:grid-cols-12"
					orientation="horizontal"
				>
					<TabsList className="col-span-4 grid h-fit grid-cols-1">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Eligibility &&nbsp;</span>
							<span>Enrollment</span>
						</TabsTrigger>
						<TabsTrigger value="benefits">Benefits</TabsTrigger>
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
								Life insurance is a contract between you and an insurance
								company that pays a death benefit to your beneficiaries when you
								die The death benefit can be used for various expenses, such as
								bills, mortgage, college, or burial costs Life insurance can
								also provide peace of mind and financial security for your loved
								ones after you are gone.
							</span>
							<span>
								There are different types of life insurance, such as term life
								insurance, which provides protection for a specific period, and
								permanent life insurance, which provides lifetime coverage Each
								type has its own advantages and disadvantages, depending on your
								needs and preferences.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Eligibility &&nbsp;</span>
							<span>Enrollment</span>
						</div>
						<span>
							To buy a life insurance policy, you need to meet certain
							eligibility criteria, such as age, health, and income. Different
							types of life insurance may have different eligibility
							requirements. For example, term life insurance may be easier to
							qualify for than permanent life insurance, as it does not involve
							a cash value component. Some types of life insurance may require a
							medical exam or a health questionnaire, while others may offer
							simplified or guaranteed issue policies that do not require any
							medical underwriting.
						</span>
						<span>
							To enroll in a life insurance policy, you need to fill out an
							application form and provide the necessary information and
							documents. You may also need to designate a beneficiary or
							beneficiaries who will receive the death benefit when you die.
							Depending on the type of policy and the amount of coverage you
							want, you may also need to pay a premium upfront or on a regular
							basis.
						</span>
						<span>
							You can buy a life insurance policy from various sources, such as:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								An insurance company or an agent that represents one or more
								insurers.
							</li>
							<li className="ml-6">
								An employer or a group that offers group life insurance as part
								of a benefits package.
							</li>
							<li className="ml-6">
								An association or an organization that offers group life
								insurance to its members.
							</li>
							<li className="ml-6">
								A financial planner or an advisor who can help you compare
								different options and find the best policy for your needs.
							</li>
						</ul>
						<span>
							You can also change or cancel your life insurance policy at any
							time, depending on the terms and conditions of your contract.
							However, you may face some consequences, such as losing your
							coverage, paying fees or penalties, or forfeiting your cash value.
						</span>
						<span>
							Some life events may also affect your eligibility and enrollment
							in a life insurance policy, such as:
						</span>
						<ul className="list-disc">
							<li className="ml-6">Getting married or divorced</li>
							<li className="ml-6">Having a child or adopting a child</li>
							<li className="ml-6">Losing or changing your job</li>
							<li className="ml-6">Retiring or reaching a certain age</li>
							<li className="ml-6">Moving to another state or country</li>
							<li className="ml-6">
								Developing a health condition or becoming disabled
							</li>
						</ul>
						<span>
							These life events may require you to update your information,
							change your coverage amount, switch your policy type, or add or
							remove beneficiaries. You may also qualify for a special
							enrollment period that allows you to enroll in a new policy or
							modify your existing policy outside the regular enrollment period.
						</span>
					</TabsContent>
					<TabsContent
						value="benefits"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Benefits
						</div>
						<span>
							The amount of final expenses you can receive depends on several
							factors, such as:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								The type of service you choose (funeral, cremation, or burial).
							</li>
							<li className="ml-6">
								The state where the service takes place and the average cost of
								services in that area.
							</li>
							<li className="ml-6">
								The availability of other sources of funding, such as life
								insurance, veterans benefits, or FEMA assistance.
							</li>
						</ul>
						<span>
							The maximum amount of final expenses you can receive is $9,000 per
							funeral for expenses related to COVID-19 deaths. For other types
							of deaths, the maximum amount is $5,000 per funeral.
						</span>
						<span>final expenses can cover expenses such as:</span>
						<ul className="list-disc">
							<li className="ml-6">Funeral services</li>
							<li className="ml-6">Cremation</li>
							<li className="ml-6">Interment</li>
							<li className="ml-6">
								Costs associated with producing death certificates
							</li>
							<li className="ml-6">
								Costs due to local or state government laws or ordinances
							</li>
							<li className="ml-6">
								Transportation for up to two people to identify the person who
								died
							</li>
							<li className="ml-6">Transfer of remains</li>
							<li className="ml-6">Casket or urn</li>
							<li className="ml-6">Burial plot</li>
							<li className="ml-6">Marker or headstone</li>
							<li className="ml-6">Clergy</li>
							<li className="ml-6">Funeral ceremony</li>
							<li className="ml-6">Funeral home equipment or staff</li>
						</ul>
						<span>final expenses cannot cover expenses such as:</span>
						<ul className="list-disc">
							<li className="ml-6">Flowers</li>
							<li className="ml-6">Food</li>
							<li className="ml-6">Clothing</li>
							<li className="ml-6">
								Travel expenses for family members or friends
							</li>
							<li className="ml-6">Obituaries</li>
							<li className="ml-6">Memorials</li>
							<li className="ml-6">Legal fees</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
