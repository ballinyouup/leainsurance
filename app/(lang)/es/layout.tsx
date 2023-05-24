import { Inter } from "next/font/google";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import QueryProvider from "../../providers/query-provider";
import { ThemeProvider } from "../../providers/theme-provider";
import "../../globals.css";

export const metadata = {
	title: "Lea Insurance",
	description:
		"En Lea Insurance, entendemos la importancia de la buena salud y la seguridad financiera. Es por eso que ofrecemos una variedad de opciones de seguro, que incluyen Obamacare, Medicare, asistencia funeraria y seguro de vida. Nuestro compromiso con la excelencia en el servicio al cliente significa que puede confiar en nosotros para atender todas sus necesidades de seguros.",
	keywords: [
		"Obamacare, Medicare, seguro de vida, asistencia funeraria, agencia de seguros médicos, cómo obtener Medicare, cómo obtener Obamacare, cómo obtener ACA, cómo obtener un seguro de vida, cómo obtener asistencia funeraria, seguro médico en Miami, seguro médico en Florida, salud Seguros Broward, Seguros de salud West Palm, Servicios de salud, Servicios de salud Miami, Servicios de salud Broward, Servicios de salud West Palm, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Seguros de salud Miami, Seguros de salud Broward, Seguros de vida Broward, Seguro de vida Miami, Seguro de vida Cómo, Seguro de vida Miami Beach, Asistencia funeraria Miami, Asistencia funeraria Broward, Asistencia funeraria West Palm",
	],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
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
