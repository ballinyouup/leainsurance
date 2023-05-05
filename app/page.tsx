import Hero from "./components/Home/Hero/Hero";
import HomeCardSection from "./components/Home/CardSection/HomeCardSection";
import TextSection from "./components/Home/TextSection/TextSection";
import { Metadata } from "next";
import ContactSection from "./components/Home/ContactSection/ContactSection";
import WhySection from "./components/Home/WhySection/WhySection";
import AboutSection from "./components/Home/AboutSection/AboutSection";
import Divider from "./components/Divider/Divider";

export const metadata: Metadata = {
	title: "Lea Insurance",
	description:
		"At Lea Insurance, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Medicare, Life Insurance, Funeral Assistance, Health Insurance Agency, How to get Medicare, How to get Obamacare, How to get ACA, how to get Life Insurance, How to get Funeral Assistance, Health Insurance Miami, Health Insurance FL, Health Insurance Broward, Health Insurance West Palm, Health Services, Health Services Miami, Health Services Broward, Health Services West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward, Life Insurance Broward, Life Insurance Miami, Life Insurance How to, Life Insurance Miami Beach, Funeral Assistance Miami, Funeral Assistance Broward, Funeral Assistance West Palm",
	],
};

export default function Page() {
	return (
		<main className="flex h-full w-full items-center justify-center">
			<div className="relative flex h-full w-full flex-col overflow-clip pb-6 sm:pb-0 md:max-w-9xl">
				<Hero />
				<TextSection />
				<Divider />
				<HomeCardSection />
				<WhySection />
				<AboutSection />
				<Divider white />
				<ContactSection />
				<svg
					id="visual"
					viewBox="0 0 1000 800"
					width="1000"
					height="800"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					className="absolute -left-80 top-0 z-0 hidden sm:top-[500px] sm:block lg:-left-0"
				>
					<rect x="0" y="0" width="1000" height="800" fill="#ffffff"></rect>
					<g transform="translate(0, 0)">
						<path
							d="M346 0C342.1 26 338.1 51.9 327.6 74.8C317 97.6 299.8 117.4 286.5 138C273.2 158.5 263.8 179.9 251.7 200.8C239.7 221.7 224.9 242.1 207.6 260.3C190.4 278.6 170.6 294.6 148.8 309C127 323.5 103.2 336.5 78.1 342.2C53 347.9 26.5 346.5 0 345L0 0Z"
							fill="#ecf2f1"
						></path>
						<path
							d="M296.6 0C293.2 22.2 289.8 44.5 280.8 64.1C271.7 83.7 257 100.6 245.6 118.3C234.2 135.9 226.1 154.2 215.8 172.1C205.4 190 192.8 207.5 178 223.2C163.2 238.8 146.2 252.5 127.6 264.9C108.9 277.3 88.5 288.4 66.9 293.3C45.4 298.2 22.7 297 0 295.7L0 0Z"
							fill="#c5d8d6"
						></path>
						<path
							d="M247.1 0C244.3 18.5 241.5 37.1 234 53.4C226.4 69.7 214.1 83.9 204.6 98.6C195.2 113.2 188.5 128.5 179.8 143.4C171.2 158.3 160.6 172.9 148.3 186C136 199 121.9 210.4 106.3 220.7C90.7 231.1 73.7 240.3 55.8 244.4C37.8 248.5 18.9 247.5 0 246.4L0 0Z"
							fill="#9fbebc"
						></path>
						<path
							d="M197.7 0C195.5 14.8 193.2 29.7 187.2 42.7C181.1 55.8 171.3 67.1 163.7 78.8C156.1 90.6 150.8 102.8 143.9 114.7C137 126.7 128.5 138.4 118.6 148.8C108.8 159.2 97.5 168.3 85 176.6C72.6 184.9 59 192.3 44.6 195.5C30.3 198.8 15.1 198 0 197.1L0 0Z"
							fill="#7aa5a3"
						></path>
						<path
							d="M148.3 0C146.6 11.1 144.9 22.2 140.4 32C135.9 41.8 128.5 50.3 122.8 59.1C117.1 67.9 113.1 77.1 107.9 86C102.7 95 96.4 103.8 89 111.6C81.6 119.4 73.1 126.2 63.8 132.4C54.4 138.6 44.2 144.2 33.5 146.7C22.7 149.1 11.3 148.5 0 147.9L0 0Z"
							fill="#538c8a"
						></path>
						<path
							d="M98.9 0C97.7 7.4 96.6 14.8 93.6 21.4C90.6 27.9 85.7 33.5 81.9 39.4C78.1 45.3 75.4 51.4 71.9 57.4C68.5 63.3 64.3 69.2 59.3 74.4C54.4 79.6 48.7 84.2 42.5 88.3C36.3 92.4 29.5 96.1 22.3 97.8C15.1 99.4 7.6 99 0 98.6L0 0Z"
							fill="#287472"
						></path>
						<path
							d="M49.4 0C48.9 3.7 48.3 7.4 46.8 10.7C45.3 13.9 42.8 16.8 40.9 19.7C39 22.6 37.7 25.7 36 28.7C34.2 31.7 32.1 34.6 29.7 37.2C27.2 39.8 24.4 42.1 21.3 44.1C18.1 46.2 14.7 48.1 11.2 48.9C7.6 49.7 3.8 49.5 0 49.3L0 0Z"
							fill="#006866"
						></path>
					</g>
				</svg>
				<div className="absolute right-0 z-0 hidden w-[600px] overflow-clip sm:top-[720px] lg:block">
					<svg
						id="visual"
						viewBox="0 0 540 540"
						width="1000"
						height="800"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
					>
						<g transform="translate(400, 400)">
							<path
								d="M-344 0C-341.3 -25.9 -338.7 -51.8 -329.5 -75.2C-320.4 -98.6 -304.8 -119.6 -291 -140.1C-277.2 -160.7 -265.1 -180.7 -251.7 -200.8C-238.4 -220.8 -223.6 -240.9 -205.8 -258C-187.9 -275.1 -167 -289.1 -144.9 -300.9C-122.9 -312.8 -99.8 -322.5 -75.4 -330.5C-51.1 -338.5 -25.6 -344.7 0 -351L0 0Z"
								fill="#ecf2f1"
							></path>
							<path
								d="M-294.9 0C-292.6 -22.2 -290.3 -44.4 -282.5 -64.5C-274.6 -84.6 -261.3 -102.5 -249.4 -120.1C-237.6 -137.7 -227.3 -154.9 -215.8 -172.1C-204.3 -189.3 -191.7 -206.5 -176.4 -221.1C-161.1 -235.8 -143.1 -247.8 -124.2 -257.9C-105.3 -268.1 -85.5 -276.4 -64.7 -283.3C-43.8 -290.1 -21.9 -295.5 0 -300.9L0 0Z"
								fill="#c5d8d6"
							></path>
							<path
								d="M-245.7 0C-243.8 -18.5 -241.9 -37 -235.4 -53.7C-228.9 -70.5 -217.7 -85.5 -207.9 -100.1C-198 -114.8 -189.4 -129.1 -179.8 -143.4C-170.3 -157.7 -159.7 -172.1 -147 -184.3C-134.2 -196.5 -119.3 -206.5 -103.5 -214.9C-87.8 -223.4 -71.3 -230.4 -53.9 -236.1C-36.5 -241.8 -18.3 -246.2 0 -250.7L0 0Z"
								fill="#9fbebc"
							></path>
							<path
								d="M-196.6 0C-195 -14.8 -193.5 -29.6 -188.3 -43C-183.1 -56.4 -174.2 -68.4 -166.3 -80.1C-158.4 -91.8 -151.5 -103.3 -143.9 -114.7C-136.2 -126.2 -127.8 -137.7 -117.6 -147.4C-107.4 -157.2 -95.4 -165.2 -82.8 -172C-70.2 -178.7 -57 -184.3 -43.1 -188.9C-29.2 -193.4 -14.6 -197 0 -200.6L0 0Z"
								fill="#7aa5a3"
							></path>
							<path
								d="M-147.4 0C-146.3 -11.1 -145.1 -22.2 -141.2 -32.2C-137.3 -42.3 -130.6 -51.3 -124.7 -60.1C-118.8 -68.9 -113.6 -77.4 -107.9 -86C-102.2 -94.6 -95.8 -103.3 -88.2 -110.6C-80.5 -117.9 -71.6 -123.9 -62.1 -129C-52.7 -134.1 -42.8 -138.2 -32.3 -141.6C-21.9 -145.1 -11 -147.7 0 -150.4L0 0Z"
								fill="#538c8a"
							></path>
							<path
								d="M-98.3 0C-97.5 -7.4 -96.8 -14.8 -94.2 -21.5C-91.5 -28.2 -87.1 -34.2 -83.1 -40C-79.2 -45.9 -75.8 -51.6 -71.9 -57.4C-68.1 -63.1 -63.9 -68.8 -58.8 -73.7C-53.7 -78.6 -47.7 -82.6 -41.4 -86C-35.1 -89.4 -28.5 -92.1 -21.6 -94.4C-14.6 -96.7 -7.3 -98.5 0 -100.3L0 0Z"
								fill="#287472"
							></path>
							<path
								d="M-49.1 0C-48.8 -3.7 -48.4 -7.4 -47.1 -10.7C-45.8 -14.1 -43.5 -17.1 -41.6 -20C-39.6 -23 -37.9 -25.8 -36 -28.7C-34.1 -31.5 -31.9 -34.4 -29.4 -36.9C-26.8 -39.3 -23.9 -41.3 -20.7 -43C-17.6 -44.7 -14.3 -46.1 -10.8 -47.2C-7.3 -48.4 -3.7 -49.2 0 -50.1L0 0Z"
								fill="#006866"
							></path>
						</g>
					</svg>
				</div>
			</div>
		</main>
	);
}
