import { Inter } from "next/font/google";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import QueryProvider from "../../providers/query-provider";
import { ThemeProvider } from "../../providers/theme-provider";
import "../../globals.css";
import { siteConfig } from "@/app/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Obamacare",
		"Medicare",
		"Seguro de Vida",
		"Asistencia para Funerales",
		"Agencia de Seguro de Salud",
		"Cómo obtener Medicare",
		"Cómo obtener Obamacare",
		"Cómo obtener ACA",
		"Cómo obtener Seguro de Vida",
		"Cómo obtener Asistencia para Funerales",
		"Seguro de Salud en Miami",
		"Seguro de Salud en Florida",
		"Seguro de Salud en Broward",
		"Seguro de Salud en West Palm",
		"Servicios de Salud",
		"Servicios de Salud en Miami",
		"Servicios de Salud en Broward",
		"Servicios de Salud en West Palm",
		"ACA",
		"ACA en Florida",
		"Obamacare en Florida",
		"Obamacare en Broward",
		"Obamacare en Miami",
		"Seguro de Salud en Miami",
		"Seguro de Salud en Broward",
		"Seguro de Vida en Broward",
		"Seguro de Vida en Miami",
		"Cómo obtener Seguro de Vida",
		"Seguro de Vida en Miami Beach",
		"Asistencia para Funerales en Miami",
		"Asistencia para Funerales en Broward",
		"Asistencia para Funerales en West Palm",
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
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
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
