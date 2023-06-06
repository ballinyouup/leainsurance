import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";
import { metadata as meta } from "../../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gastos Finales",
	...meta,
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span>GASTOS</span>
						<span>FINALES</span>
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
						<TabsTrigger value="overview">Descripción general</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Elegibilidad e&nbsp;</span>
							<span>Inscripción</span>
						</TabsTrigger>
						<TabsTrigger value="benefits">Beneficios</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="pb-2 text-4xl font-bold sm:text-5xl">
								Descripción general
							</div>
							<span>
								El seguro de vida es un contrato entre tú y una compañía de
								seguros que paga un beneficio por fallecimiento a tus
								beneficiarios cuando mueras. Este beneficio por fallecimiento se
								puede utilizar para diferentes gastos, como facturas, hipoteca,
								colegio o costos funerarios. Además, el seguro de vida puede
								brindar tranquilidad y seguridad financiera a tus seres queridos
								después de tu partida.
							</span>
							<span>
								Existen diferentes tipos de seguros de vida, como el seguro de
								vida a plazo, que ofrece protección por un período específico, y
								el seguro de vida permanente, que brinda cobertura de por vida.
								Cada tipo tiene sus propias ventajas y desventajas, según tus
								necesidades y preferencias.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Elegibilidad e&nbsp;</span>
							<span>Inscripción</span>
						</div>
						<span>
							Para comprar una póliza de seguro de vida, debes cumplir con
							ciertos criterios de elegibilidad, como la edad, la salud y los
							ingresos. Los diferentes tipos de seguros de vida pueden tener
							diferentes requisitos de elegibilidad. Por ejemplo, es posible que
							sea más fácil calificar para un seguro de vida a término que para
							un seguro de vida permanente, ya que no incluye un componente de
							valor en efectivo. Algunos tipos de seguros de vida pueden
							requerir un examen médico o un cuestionario de salud, mientras que
							otros pueden ofrecer pólizas simplificadas o de emisión
							garantizada que no requieren ningún proceso de evaluación médica.
						</span>
						<span>
							Para inscribirte en una póliza de seguro de vida, debes completar
							un formulario de solicitud y proporcionar la información y los
							documentos necesarios. Es posible que también debas designar un
							beneficiario o beneficiarios que recibirán el beneficio por
							fallecimiento cuando mueras. Dependiendo del tipo de póliza y la
							cantidad de cobertura que desees, es posible que también debas
							pagar una prima por adelantado o de forma regular.
						</span>
						<span>
							Puedes comprar una póliza de seguro de vida de diversas fuentes,
							como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Una compañía de seguros o un agente que representa a uno o más
								aseguradores.
							</li>
							<li className="ml-6">
								Un empleador o un grupo que ofrece seguros de vida colectivos
								como parte de un paquete de beneficios.
							</li>
							<li className="ml-6">
								Una asociación u organización que ofrece seguros de vida
								colectivos a sus miembros.
							</li>
							<li className="ml-6">
								Un planificador financiero o asesor que puede ayudarte a
								comparar diferentes opciones y encontrar la mejor póliza para
								tus necesidades.
							</li>
						</ul>
						<span>
							También puedes cambiar o cancelar tu póliza de seguro de vida en
							cualquier momento, según los términos y condiciones de tu
							contrato. Sin embargo, es posible que enfrentes algunas
							consecuencias, como perder tu cobertura, pagar tarifas o
							penalidades o renunciar al valor en efectivo.
						</span>
						<span>
							Algunos eventos de vida también pueden afectar tu elegibilidad e
							inscripción en una póliza de seguro de vida, como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">Casarse o divorciarse</li>
							<li className="ml-6">Tener un hijo o adoptar un hijo</li>
							<li className="ml-6">Perder o cambiar de trabajo</li>
							<li className="ml-6">Jubilarse o alcanzar una cierta edad.</li>
							<li className="ml-6">Mudarse a otro estado o país.</li>
							<li className="ml-6">
								Desarrollar una condición de salud o quedar discapacitado
							</li>
						</ul>
						<span>
							Estos eventos de vida pueden requerir que actualices tu
							información, cambies la cantidad de cobertura, cambies el tipo de
							póliza o agregues o elimines beneficiarios. También puedes
							calificar para un período de inscripción especial que te permite
							inscribirte en una nueva póliza o modificar tu póliza existente
							fuera del período de inscripción regular.
						</span>
					</TabsContent>
					<TabsContent
						value="benefits"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Beneficios De Gastos Finales
						</div>
						<span>
							La cantidad de gastos finales que puedes recibir depende de varios
							factores, como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								El tipo de servicio que elijas (funeral, cremación o entierro).
							</li>
							<li className="ml-6">
								El estado donde se realice el servicio y el costo promedio de
								los servicios en esa área.
							</li>
							<li className="ml-6">
								La disponibilidad de otras fuentes de financiamiento, como
								seguro de vida, beneficios para veteranos o asistencia de FEMA.
							</li>
							<li className="ml-6">
								El monto máximo de gastos finales que puedes recibir es de
								$9,000 por funeral para gastos relacionados con muertes por
								COVID-19. Para otros tipos de muertes, el monto máximo es de
								$5,000 por funeral.
							</li>
						</ul>
						<span>Los gastos finales pueden cubrir gastos como:</span>
						<ul className="list-disc">
							<li className="ml-6">Servicios funerarios</li>
							<li className="ml-6">Cremación</li>
							<li className="ml-6">Entierro</li>
							<li className="ml-6">
								Costos asociados con la producción de certificados de defunción
							</li>
							<li className="ml-6">
								Costos debido a leyes u ordenanzas gubernamentales locales o
								estatales
							</li>
							<li className="ml-6">
								Transporte para hasta dos personas para identificar a la persona
								fallecida
							</li>
							<li className="ml-6">Traslado de restos</li>
							<li className="ml-6">Ataúd o urna</li>
							<li className="ml-6">Parcela de entierro</li>
							<li className="ml-6">Marcador o lápida</li>
							<li className="ml-6">Clero</li>
							<li className="ml-6">Ceremonia fúnebre</li>
							<li className="ml-6">Equipamiento o personal de la funeraria</li>
						</ul>
						<span>Los gastos finales no pueden cubrir gastos como:</span>
						<ul className="list-disc">
							<li className="ml-6">Flores</li>
							<li className="ml-6">Comida</li>
							<li className="ml-6">Ropa</li>
							<li className="ml-6">Gastos de viaje de familiares o amigos</li>
							<li className="ml-6">Esquelas</li>
							<li className="ml-6">Monumentos conmemorativos</li>
							<li className="ml-6">Honorarios legales</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
