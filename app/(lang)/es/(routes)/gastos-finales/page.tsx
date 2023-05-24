import { Metadata } from "next";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "$/tabs";
import Image from "next/image";
export const metadata: Metadata = {
	title: "Gastos Finales",
	description:
		"En L.E.A Insurance, entendemos la importancia de la buena salud y la seguridad financiera. Es por eso que ofrecemos una variedad de opciones de seguro, que incluyen Obamacare, Medicare, gastos finales y seguro de vida. Nuestro compromiso con la excelencia en el servicio al cliente significa que puede confiar en nosotros para atender todas sus necesidades de seguros.",
	keywords: [
		"Gastos Finales, Seguro Médico, Servicios de Salud, Gastos Finales FL, Gastos Finales Broward, Gastos Finales Miami, Seguros Médicos Miami, Seguros Médicos Broward",
	],
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
								El seguro de vida es un contrato entre usted y un seguro
								compañía que paga un beneficio por muerte a sus beneficiarios
								cuando usted fallecer El beneficio por fallecimiento se puede
								utilizar para varios gastos, como facturas, hipoteca,
								universidad o costos de entierro El seguro de vida puede también
								brinde tranquilidad y seguridad financiera a sus seres queridos
								después de que te hayas ido.
							</span>
							<span>
								Existen diferentes tipos de seguros de vida, como el seguro de
								vida a término seguro, que brinda protección por un período
								específico, y seguro de vida permanente, que brinda cobertura de
								por vida Cada tipo tiene sus propias ventajas y desventajas,
								dependiendo de su necesidades y preferencias.
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
							Para comprar una póliza de seguro de vida, debe cumplir con
							ciertos criterios de elegibilidad, como la edad, la salud y los
							ingresos. Diferente tipos de seguros de vida pueden tener
							diferentes elegibilidad requisitos Por ejemplo, el seguro de vida
							a término puede ser más fácil de calificar para un seguro de vida
							permanente, ya que no implica un componente de valor en efectivo.
							Algunos tipos de seguros de vida pueden requerir una examen médico
							o un cuestionario de salud, mientras que otros pueden ofrecer
							pólizas simplificadas o de emisión garantizada que no requieren
							suscripción médica.
						</span>
						<span>
							Para inscribirse en una póliza de seguro de vida, debe completar
							un formulario de solicitud y proporcionar la información necesaria
							y documentos. Es posible que también deba designar un beneficiario
							o beneficiarios que recibirán el beneficio por fallecimiento
							cuando usted muera. Dependiendo del tipo de póliza y la cantidad
							de cobertura que usted desea, es posible que también deba pagar
							una prima por adelantado o en forma regular base.
						</span>
						<span>
							Puede comprar una póliza de seguro de vida de varias fuentes,
							como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Una compañía de seguros o un agente que representa a uno o más
								aseguradoras
							</li>
							<li className="ml-6">
								Un empleador o un grupo que ofrece un seguro de vida grupal como
								parte de un paquete de beneficios.
							</li>
							<li className="ml-6">
								Una asociación o una organización que ofrece vida en grupo.
								seguro a sus afiliados.
							</li>
							<li className="ml-6">
								Un planificador financiero o un asesor que pueda ayudarlo a
								comparar diferentes opciones y encuentre la mejor póliza para
								sus necesidades.
							</li>
						</ul>
						<span>
							También puede cambiar o cancelar su póliza de seguro de vida en
							cualquier tiempo, dependiendo de los términos y condiciones de su
							contrato. Sin embargo, puede enfrentar algunas consecuencias, como
							perder su cobertura, pagando tarifas o multas, o perdiendo su
							valor en efectivo.
						</span>
						<span>
							Algunos eventos de la vida también pueden afectar su elegibilidad
							e inscripción en una póliza de seguro de vida, tales como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">Casarse o divorciarse</li>
							<li className="ml-6">Tener un hijo o adoptar un hijo</li>
							<li className="ml-6">Perder o cambiar de trabajo</li>
							<li className="ml-6">Jubilarse o llegar a cierta edad</li>
							<li className="ml-6">Mudanza a otro estado o país</li>
							<li className="ml-6">
								Desarrollar una condición de salud o quedar discapacitado
							</li>
						</ul>
						<span>
							Estos eventos de la vida pueden requerir que actualice su
							información, cambiar el monto de su cobertura, cambiar su tipo de
							póliza o agregar o quitar beneficiarios. También puede calificar
							para un programa especial período de inscripción que le permite
							inscribirse en una nueva póliza o modificar su póliza existente
							fuera del período de inscripción regular.
						</span>
					</TabsContent>
					<TabsContent
						value="benefits"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Beneficios
						</div>
						<span>
							La cantidad de gastos finales que puede recibir depende de varios
							factores, tales como:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								El tipo de servicio que elija (funeral, cremación o entierro).
							</li>
							<li className="ml-6">
								El estado donde se realiza el servicio y el costo promedio de
								servicios en esa zona.
							</li>
							<li className="ml-6">
								La disponibilidad de otras fuentes de financiación, como vida
								seguro, beneficios para veteranos o asistencia de FEMA.
							</li>
						</ul>
						<span>
							La cantidad máxima de gastos finales que puede recibir es de
							$9,000 por funeral por gastos relacionados con muertes por
							COVID-19. Para otros tipos de muertes, el monto máximo es de
							$5,000 por funeral.
						</span>
						<span>los gastos finales pueden cubrir gastos como:</span>
						<ul className="list-disc">
							<li className="ml-6">Servicios funerarios</li>
							<li className="ml-6">Cremación</li>
							<li className="ml-6">Entierro</li>
							<li className="ml-6">
								Costos asociados con la producción de certificados de defunción
							</li>
							<li className="ml-6">
								Costos debido a leyes u ordenanzas del gobierno local o estatal
							</li>
							<li className="ml-6">
								Transporte de hasta dos personas para identificar a la persona
								que fallecido
							</li>
							<li className="ml-6">Traslado de restos</li>
							<li className="ml-6">Ataúd o urna</li>
							<li className="ml-6">Lote funerario</li>
							<li className="ml-6">Marca o lápida</li>
							<li className="ml-6">Clérigo</li>
							<li className="ml-6">Ceremonia fúnebre</li>
							<li className="ml-6">Equipo o personal de la funeraria</li>
						</ul>
						<span>los gastos finales no pueden cubrir gastos como:</span>
						<ul className="list-disc">
							<li className="ml-6">Flores</li>
							<li className="ml-6">Comida</li>
							<li className="ml-6">Ropa</li>
							<li className="ml-6">Gastos de viaje de familiares o amigos</li>
							<li className="ml-6">Obituarios</li>
							<li className="ml-6">Conmemorativos</li>
							<li className="ml-6">Honorarios legales</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
