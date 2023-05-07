import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Life Insurance",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Life Insurance, Health Insurance, Health Services, Life Insurance FL, Life Insurance Broward, Life Insurance Miami, Health Insurance Miami, Health Insurance Broward",
	],
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span>LIFE</span>
						<span>INSURANCE</span>
					</div>
					<Image
						alt="Life Insurance Image"
						className="relative -left-20 -top-24 w-full min-w-[1200px] mix-blend-screen brightness-50"
						src="/familyreal.jpg"
						width={600}
						height={600}
					/>
				</div>
				<Tabs
					defaultValue="overview"
					className="grid h-full min-h-[600px] w-full grid-cols-1 sm:grid-cols-12"
					orientation="vertical"
				>
					<TabsList className="col-span-4 grid h-fit grid-cols-1">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Eligibility &&nbsp;</span>
							<span>Enrollment</span>
						</TabsTrigger>
						<TabsTrigger value="term" className="flex flex-wrap">
							<span>Term Life&nbsp;</span>
							<span>Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="permanent" className="flex flex-wrap">
							<span>Permanent&nbsp;</span>
							<span>Life Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="whole" className="flex flex-wrap">
							<span>Whole Life&nbsp;</span>
							<span>Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="universal" className="flex flex-wrap">
							<span>Universal Life&nbsp;</span>
							<span>Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="variable" className="flex flex-wrap">
							<span>Variable Life&nbsp;</span>
							<span>Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="indexed" className="flex flex-wrap">
							<span>Indexed Life&nbsp;</span>
							<span>Insurance</span>
						</TabsTrigger>
						<TabsTrigger value="howto">How To</TabsTrigger>
					</TabsList>
					<TabsContent value="overview" className="col-span-8 p-4 text-lg">
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
						className="col-span-8 gap-4 p-4 text-lg"
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
					<TabsContent value="term" className="col-span-8 gap-4 p-4 text-lg">
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Term Life Insurance
						</div>
						<span>
							Term life insurance is designed to last a certain number of years,
							then end. You choose the term when you take out the policy. Common
							terms are 10, 20, or 30 years Term life insurance is usually the
							most affordable type of life insurance because it only pays a
							death benefit if you die within the term. It does not build cash
							value or pay dividends
						</span>
						<span>
							Term life insurance is a good option if you want to cover a
							specific financial obligation, such as a mortgage, a loan, or a
							child's education. It can also provide income replacement for your
							dependents during your working years. However, term life insurance
							has some drawbacks. If you outlive the term, your coverage will
							end and you will have to renew it at a higher rate or buy a new
							policy. Also, term life insurance does not offer any flexibility
							or additional benefits beyond the death benefit
						</span>
						<span>
							Some term life insurance policies may allow you to convert them
							into permanent policies without having to undergo a medical exam
							or provide proof of insurability. This can be useful if your
							health or financial situation changes and you want to keep your
							coverage. Look for a convertible term policy if this is important
							to you
						</span>
					</TabsContent>
					<TabsContent
						value="permanent"
						className="col-span-8 gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Permanent Life Insurance
						</div>
						<span>
							Permanent life insurance stays in force for your entire life
							unless you stop paying the premiums or surrender the policy It is
							more expensive than term life insurance because it provides
							lifetime coverage and builds cash value over time. Cash value is a
							portion of your premium that accumulates in a tax-deferred account
							within your policy. You can access your cash value through loans
							or withdrawals for any purpose, such as retirement income,
							education expenses, or emergencies
						</span>
						<span>
							Permanent life insurance also pays dividends to policyholders
							based on the company's performance and profitability. Dividends
							are not guaranteed, but they can be used to increase your death
							benefit, reduce your premiums, or add more cash value to your
							policy
						</span>
						<span>
							Permanent life insurance is a good option if you want to leave a
							legacy for your heirs, supplement your retirement income, or
							protect your estate from taxes. It can also provide other
							benefits, such as accelerated death benefits, which allow you to
							receive a portion of your death benefit before you die if you are
							diagnosed with a terminal illness or need long-term care
						</span>
						<span>
							There are different types of permanent life insurance, such as
							whole life insurance, universal life insurance, variable life
							insurance, and indexed universal life insurance. Each type has its
							own features and risks that you should understand before buying.
						</span>
					</TabsContent>
					<TabsContent value="whole" className="col-span-8 p-4 text-lg">
						<div className="flex w-full flex-col gap-4">
							<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
								Whole Life Insurance
							</div>
							<span>
								Whole life insurance is the simplest and most traditional type
								of permanent life insurance. It provides a guaranteed death
								benefit, a fixed premium, and a guaranteed cash value growth
								rate Whole life insurance is suitable for people who want
								predictable and stable coverage with minimal risk.
							</span>
							<span>Some of the pros of whole life insurance are:</span>
							<ul className="list-disc">
								<li className="ml-6">
									It lasts for your entire life and does not expire as long as
									you pay your premiums
								</li>
								<li className="ml-6">
									It builds tax-deferred cash value that can be borrowed against
									or withdrawn for any purpose
								</li>
								<li className="ml-6">
									It pays dividends to policyholders based on the company's
									performance and profitability
								</li>
								<li className="ml-6">
									It can be useful for estate planning purposes, such as
									creating a trust or funding a charitable donation
								</li>
							</ul>
							<span>Some of the cons of whole life insurance are:</span>
							<ul className="list-disc">
								<li className="ml-6">
									It is more expensive than term life insurance and may not be
									affordable for some people
								</li>
								<li className="ml-6">
									It has lower returns than other types of permanent life
									insurance or other investments3.
								</li>
								<li className="ml-6">
									It has less flexibility than other types of permanent life
									insurance and may not suit changing needs or preferences
								</li>
								<li className="ml-6">
									It may have surrender charges or penalties if you cancel or
									withdraw from your policy before a certain period
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent value="universal" className="col-span-8 p-4 text-lg">
						<div className="flex flex-col gap-4 text-lg">
							<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
								Universal Life Insurance
							</div>
							<span>
								Universal life insurance is a more flexible type of permanent
								life insurance that allows you to adjust your premium and death
								benefit amount within certain limits Universal life insurance
								also has an interest-bearing cash value account that varies
								according to the current market rates Universal life insurance
								is suitable for people who want more control over their coverage
								and cash value accumulation.
							</span>
							<span>Some of the pros of universal life insurance are:</span>
							<ul className="list-disc">
								<li className="ml-6">
									It allows you to raise or lower your premium and death benefit
									according to your needs and budget
								</li>
								<li className="ml-6">
									It has a higher potential for cash value growth than whole
									life insurance, depending on the market performance
								</li>
								<li className="ml-6">
									It offers tax advantages, such as tax-deferred cash value
									growth and tax-free loans and withdrawals
								</li>
								<li className="ml-6">
									It provides other benefits, such as accelerated death
									benefits, which allow you to receive a portion of your death
									benefit before you die if you are diagnosed with a terminal
									illness or need long-term care
								</li>
							</ul>
							<span>Some of the cons of universal life insurance are:</span>
							<ul className="list-disc">
								<li className="ml-6">
									It has higher fees and charges than whole life insurance, such
									as administrative costs, mortality charges, and surrender
									charges
								</li>
								<li className="ml-6">
									It has no guarantees on your premium amount or market returns,
									which means you may have to pay more or receive less than
									expected
								</li>
								<li className="ml-6">
									It has more risk than whole life insurance, as your cash value
									may decrease or even disappear if the market performs poorly
									or if you miss payments
								</li>
								<li className="ml-6">
									It requires more active management and monitoring than whole
									life insurance, as you have to adjust your premium and death
									benefit according to your changing needs and market conditions
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent value="variable" className="col-span-8 p-4 text-lg">
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Variable Life Insurance
						</div>
						<span>
							Variable life insurance is a type of permanent life insurance that
							allows you to invest your cash value in various subaccounts that
							are similar to mutual funds Variable life insurance offers the
							potential for higher returns but also higher risks than other
							types of permanent life insurance. You can lose money if the
							subaccounts perform poorly. Variable life insurance also has
							higher fees and charges than other types of permanent life
							insurance Variable life insurance is suitable for people who are
							willing to take more risk and have more investment knowledge.
						</span>
						<span>Some of the pros of variable life insurance are:</span>
						<ul className="list-disc">
							<li className="ml-6">
								It gives you more control over how your cash value is invested,
								by offering you a portfolio of subaccounts from which to choose
							</li>
							<li className="ml-6">
								It has a higher potential for cash value growth than other types
								of permanent life insurance, depending on the subaccount
								performance
							</li>
							<li className="ml-6">
								It offers tax advantages, such as tax-deferred cash value growth
								and tax-free transfers between subaccounts
							</li>
							<li className="ml-6">
								It provides a minimum guaranteed death benefit, regardless of
								how your subaccounts perform
							</li>
						</ul>
						<span>Some of the cons of variable life insurance are:</span>
						<ul className="list-disc">
							<li className="ml-6">
								It has higher fees and charges than other types of permanent
								life insurance, such as administrative costs, mortality charges,
								surrender charges, and investment management fees
							</li>
							<li className="ml-6">
								It has no guarantees on your premium amount or market returns,
								which means you may have to pay more or receive less than
								expected
							</li>
							<li className="ml-6">
								It has more risk than other types of permanent life insurance,
								as your cash value may decrease or even disappear if the
								subaccounts perform poorly
							</li>
							<li className="ml-6">
								It requires more active management and monitoring than other
								types of permanent life insurance.
							</li>
						</ul>
					</TabsContent>
					<TabsContent value="indexed" className="col-span-8 p-4 text-lg">
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Indexed Insurance
						</div>
						<span>
							Indexed universal life insurance is a more flexible type of
							permanent life insurance that allows you to adjust your premium
							and death benefit amount within certain limits Indexed universal
							life insurance also has a cash value account that earns interest
							based on the performance of a stock or bond index, such as the S&P
							500 or the Nasdaq-100 Indexed universal life insurance offers the
							potential for higher returns than other types of permanent life
							insurance, but also has a minimum guaranteed rate of return to
							protect you from market losses
						</span>
						<span>
							Indexed universal life insurance is suitable for people who want
							to benefit from market gains without directly investing in the
							market. It can also provide tax advantages, such as tax-deferred
							cash value growth and tax-free loans and withdrawals However,
							indexed universal life insurance also has some drawbacks. It has
							caps on returns that limit your upside potential. It also has
							higher fees and charges than other types of permanent life
							insurance. And it does not guarantee your premium amount or market
							returns
						</span>
					</TabsContent>
					<TabsContent value="howto" className="col-span-8 p-4 text-lg">
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>How To</span>
						</div>
						<span>
							Choosing a life insurance policy depends on your personal and
							financial goals, your budget, and your risk tolerance. Here are
							some questions to ask yourself before buying a life insurance
							policy:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								How much coverage do I need? The amount of coverage you need
								depends on various factors, such as your income, your debts,
								your expenses, and your dependents' needs. A common rule of
								thumb is to multiply your annual income by 10 or 15, but you may
								want to use a life insurance calculator or consult with a
								financial planner to get a more accurate estimate.
							</li>
							<li className="ml-6">
								How long do I need coverage for? The length of coverage you need
								depends on how long you want to provide financial support for
								your beneficiaries. For example, if you have young children or a
								mortgage, you may want a longer term than if you have grown
								children or no debt. Term life insurance offers coverage for a
								specific period, such as 10, 20, or 30 years, while permanent
								life insurance offers coverage for your entire life.
							</li>
							<li className="ml-6">
								How much can I afford to pay in premiums? The amount of premiums
								you pay depends on the type and amount of coverage you choose,
								as well as your age, health, and lifestyle. Term life insurance
								typically has lower premiums than permanent life insurance, but
								it also has no cash value or other benefits. Permanent life
								insurance has higher premiums than term life insurance, but it
								also builds cash value and pays dividends. You may want to
								compare quotes from different insurers and find a policy that
								fits your budget.
							</li>
							<li className="ml-6">
								Do I want to build cash value or just have a death benefit? The
								cash value component of permanent life insurance can be a useful
								savings or investment tool that can help you achieve various
								financial goals, such as retirement income, education expenses,
								or emergencies. However, it also comes with higher costs and
								risks than term life insurance. If you only want to provide a
								death benefit for your beneficiaries and do not need any
								additional benefits, term life insurance may be a better option
								for you.
							</li>
							<li className="ml-6">
								Do I want to participate in the market or have a guaranteed rate
								of return? Some types of permanent life insurance allow you to
								invest your cash value in various subaccounts that are similar
								to mutual funds, such as variable life insurance or indexed
								universal life insurance. These types of policies offer the
								potential for higher returns but also higher risks than other
								types of permanent life insurance. You can lose money if the
								subaccounts perform poorly. If you prefer a more conservative
								approach, you may want to choose a type of permanent life
								insurance that offers a guaranteed rate of return, such as whole
								life insurance or universal life insurance.
							</li>
							<li className="ml-6">
								Do I want to have flexibility or stability in my policy? Some
								types of permanent life insurance allow you to adjust your
								premium and death benefit amount within certain limits, such as
								universal life insurance or indexed universal life insurance.
								These types of policies offer more flexibility than other types
								of permanent life insurance but also require more active
								management and monitoring. If you prefer a more stable and
								predictable policy, you may want to choose a type of permanent
								life insurance that has a fixed premium and death benefit
								amount, such as whole life insurance or variable life insurance.
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
