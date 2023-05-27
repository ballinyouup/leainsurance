import { Inter } from "next/font/google";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import QueryProvider from "../../providers/query-provider";
import { ThemeProvider } from "../../providers/theme-provider";
import "../../globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";


export const metadata: Metadata = {
	title: {
	  default: siteConfig.name,
	  template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
	  "Obamacare",
	  "Medicare",
	  "Life Insurance",
	  "Funeral Assistance",
	  "Health Insurance Agency",
	  "How to get Medicare",
	  "How to get Obamacare",
	  "How to get ACA",
	  "how to get Life Insurance",
	  "How to get Funeral Assistance",
	  "Health Insurance Miami",
	  "Health Insurance FL",
	  "Health Insurance Broward",
	  "Health Insurance West Palm",
	  "Health Services",
	  "Health Services Miami",
	  "Health Services Broward",
	  "Health Services West Palm",
	  "ACA",
	  "ACA FL",
	  "Obamacare FL",
	  "Obamacare Broward",
	  "Obamacare Miami",
	  "Health Insurance Miami",
	  "Health Insurance Broward",
	  "Life Insurance Broward",
	  "Life Insurance Miami",
	  "Life Insurance How to",
	  "Life Insurance Miami Beach",
	  "Funeral Assistance Miami",
	  "Funeral Assistance Broward",
	  "Funeral Assistance West Palm",
	  "LEA Insurance",
	  "LEAInsurance",
	  "Insurance LEA",
	  "InsuranceLEA",
	"Seguro De LEA"
	],
	authors: [
	  {
		name: "LEA Insurance",
		url: "https://www.leainsurance.com",
	  },
	],
	creator: "LEA Insurance",
	openGraph: {
	  type: "website",
	  locale: "en_US",
	  url: siteConfig.url,
	  title: siteConfig.name,
	  description: siteConfig.description,
	  siteName: siteConfig.name,
	  images: [
		{
		  url: siteConfig.ogImage,
		  width: 1200,
		  height: 630,
		  alt: siteConfig.name,
		},
	  ],
	},
	twitter: {
	  card: "summary_large_image",
	  title: siteConfig.name,
	  description: siteConfig.description,
	  images: [siteConfig.ogImage],
	  creator: "@leainsurance",
	},
	icons: {
	  icon: "/favicon.ico",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
  }

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
