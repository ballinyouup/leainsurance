import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { env } from "./env.mjs";
import QueryProvider from "./providers/query-provider";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

export const metadata = {
	title: "Lea Insurance",
	description:
		"At Lea Insurance, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
	keywords: [
		"Obamacare, Medicare, Life Insurance, Funeral Assistance, Health Insurance Agency, How to get Medicare, How to get Obamacare, How to get ACA, how to get Life Insurance, How to get Funeral Assistance, Health Insurance Miami, Health Insurance FL, Health Insurance Broward, Health Insurance West Palm, Health Services, Health Services Miami, Health Services Broward, Health Services West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Health Insurance Miami, Health Insurance Broward, Life Insurance Broward, Life Insurance Miami, Life Insurance How to, Life Insurance Miami Beach, Funeral Assistance Miami, Funeral Assistance Broward, Funeral Assistance West Palm",
	],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
				<body className={inter.className}>
					<QueryProvider>
						<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
							<Navbar />
							<div>{children}</div>
							<Footer />
						</ThemeProvider>
					</QueryProvider>
				</body>
		</html>
	);
}
