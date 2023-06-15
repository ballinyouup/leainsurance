import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";
import { metadata as meta } from "../../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Medicare",
	...meta,
};

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
						<TabsTrigger value="overview">Descripción general</TabsTrigger>
						<TabsTrigger value="eligibility">
							Inscripción y Elegibilidad
						</TabsTrigger>
						<TabsTrigger value="original">Medicare originales</TabsTrigger>
						<TabsTrigger value="advantage">Ventaja de Medicare</TabsTrigger>
						<TabsTrigger value="supplement">Suplemento de Medicare</TabsTrigger>
						<TabsTrigger value="prescription" className="flex flex-wrap">
							<span>Prescripción &nbsp;</span> <span>Medicamentos &nbsp;</span>
							<span>Cobertura</span>
						</TabsTrigger>
						<TabsTrigger value="costs">Costos y Cobertura</TabsTrigger>
						<TabsTrigger value="additional">Beneficios adicionales</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="pb-2 text-4xl font-bold sm:text-5xl">
								MEDICARE SIN COMPLICACIONES, TU GUIA PASO A PASO
							</div>
							<span>
								Medicare es un programa federal de seguros de salud que ayuda a
								millones de estadounidenses a pagar sus necesidades de atención
								médica. Ya sea que tengas 65 años o más, estés discapacitado o
								tengas ciertas condiciones crónicas, es posible que seas
								elegible para la cobertura de Medicare.
							</span>
							<span>
								Establecido en 1965, Medicare ha evolucionado para incluir
								diferentes partes (A, B, C y D) que se adaptan a diversas
								necesidades de atención médica.
							</span>
							<span>
								Este programa es administrado por los Centros de Servicios de
								Medicare y Medicaid (CMS), y la inscripción es manejada por la
								Administración del Seguro Social.
							</span>
							<span>
								CMS contrata entidades privadas para proporcionar servicios
								específicos, como procesamiento de reclamaciones, auditorías y
								supervisión de calidad.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Inscripción y</span>
							<span>Elegibilidad</span>
						</div>
						<p className="flex flex-col gap-6 text-lg">
							<div>
								<span className="font-bold">
									Para ser elegible para Medicare, las personas deben cumplir
									con los siguientes requisitos:
								</span>
								<ul className="ml-8 list-disc">
									<li>
										Tener 65 años o más y ser ciudadano estadounidense o
										residente legal que haya vivido en los Estados Unidos
										durante al menos cinco años.
									</li>
									<li>
										Tener menos de 65 años y tener una discapacidad que cumpla
										con los requisitos para recibir beneficios del Seguro Social
										durante al menos 24 meses.
									</li>
									<li>
										Tener menos de 65 años y tener enfermedad renal en etapa
										terminal (ESRD) o esclerosis lateral amiotrófica (ALS).
									</li>
								</ul>
							</div>
							<div>
								<span className="font-bold">Cómo inscribirte:</span>
								<ul className="ml-8 list-disc">
									<li>En línea en www.ssa.gov</li>
									<li>Por teléfono al 1-800-772-1213 (TTY 1-800-325-0778)</li>
									<li>En persona en su oficina local del Seguro Social</li>
								</ul>
							</div>
							<span>
								El mejor momento para inscribirse en Medicare es durante tu
								período de inscripción inicial (IEP), que es un período de siete
								meses que comienza tres meses antes del mes de tu cumpleaños
								número 65 y termina tres meses después. Si te inscribes durante
								este período, evitarás cualquier penalidad por inscripción
								tardía o brechas en la cobertura.
							</span>
							<span>
								Si te pierdes tu IEP, aún puedes inscribirte en Medicare durante
								el período de inscripción general (GEP), que se lleva a cabo del
								1 de enero al 31 de marzo de cada año. Sin embargo, es posible
								que tengas que pagar primas más altas y esperar hasta el 1 de
								julio para que tu cobertura comience.
							</span>
							<span>
								También puedes cambiar tu cobertura de Medicare durante el
								período de inscripción abierta anual (OEP), que se lleva a cabo
								del 15 de octubre al 7 de diciembre de cada año. Durante este
								tiempo, puedes cambiar de Medicare Original a un plan de
								Medicare Advantage, o viceversa, o cambiar tu plan de
								medicamentos recetados.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="original"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>MEDICARE</span>
							<span>ORIGINALES</span>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-xl font-bold">
								Medicare Original se compone de dos partes:
							</span>
							<ul className="ml-8 list-disc">
								<li>Parte A (Seguro Hospitalario)</li>
								<li>Parte B (Seguro Médico)</li>
							</ul>
							<span className="text-xl font-bold">
								Parte A (Seguro Hospitalario)
							</span>
							<span>
								La Parte A cubre la atención hospitalaria, la atención en
								centros de enfermería especializada, la atención de hospicio y
								algunos servicios de atención médica en el hogar. La mayoría de
								las personas no pagan una prima por la Parte A si ellos o su
								cónyuge pagaron impuestos de Medicare mientras trabajaban al
								menos 10 años (40 trimestres).
							</span>
							<span>
								La mayoría de las personas no pagan una prima mensual por la
								Parte A si ellos o su cónyuge pagaron impuestos de Medicare
								mientras trabajaban. Sin embargo, si no califica para la Parte A
								sin prima, puede comprarla por hasta $506 al mes en 2023. El
								deducible anual para la Parte A es de $1,556 en 2023.
							</span>
							<span className="text-xl font-bold">Parte B (Seguro Médico)</span>
							<span>
								La Parte B cubre servicios médicamente necesarios y servicios
								preventivos, como visitas al médico, atención ambulatoria,
								equipos médicos y algunos servicios de atención médica en el
								hogar. La Parte B requiere una prima mensual, que generalmente
								se deduce de sus beneficios de Seguridad Social.
							</span>
							<span>
								Todos pagan una prima mensual por la Parte B. El monto de la
								prima estándar es de $164.90 al mes en 2023. Sin embargo, si sus
								ingresos están por encima de cierto nivel, es posible que tenga
								que pagar más debido al monto mensual ajustado según los
								ingresos (IRMAA, por sus siglas en inglés). El deducible anual
								para la Parte B es de $226 en 2023.
							</span>
							<span>
								Después de pagar su deducible, generalmente paga el 20% del
								monto aprobado por Medicare por los servicios cubiertos. Esto se
								llama coaseguro. También es posible que pague una cantidad fija
								llamada copago por algunos servicios.
							</span>
							<span>
								Medicare Original no cubre todo. Por ejemplo, no cubre
								medicamentos recetados, atención dental, atención visual,
								audífonos, atención a largo plazo o cirugía estética. Es posible
								que necesite comprar una cobertura adicional o pagar de su
								bolsillo por estos servicios.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="advantage"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col flex-wrap pb-6 text-4xl font-bold sm:text-5xl">
							<span>VENTAJAS DE&nbsp;</span>
							<span>MEDICARE ADVANTAGE</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<span>
								Medicare Advantage (MA) es una forma alternativa de obtener
								cobertura de Medicare. Es ofrecido por compañías de seguros
								privadas que tienen contratos con Medicare para brindar todos
								los beneficios de la Parte A y la Parte B. La mayoría de los
								planes de MA también incluyen la Parte D (cobertura de
								medicamentos recetados) y ofrecen beneficios adicionales como
								atención dental, atención visual, audífonos, programas de
								bienestar y más.
							</span>
							<span>
								Los planes de MA varían en términos de costos y beneficios. Es
								posible que deba pagar una prima mensual por su plan de MA
								además de su prima de la Parte B. También es posible que deba
								pagar deducibles, copagos, coaseguros y límites de gastos de su
								plan de MA. Estos costos dependen del plan que elija y de los
								servicios que utilice.
							</span>
							<span>
								Debe seguir las reglas de su plan de MA para obtener servicios
								cubiertos. Por ejemplo, es posible que deba utilizar proveedores
								dentro de la red de su plan, obtener referidos de su proveedor
								de atención primaria (PCP) y obtener autorización previa para
								ciertos servicios.
							</span>
							<span>
								Puede inscribirse en un plan de MA durante su IEP (Período de
								Inscripción Inicial) o OEP (Período de Inscripción Abierta) o
								durante un período de inscripción especial (SEP) si cumple con
								los requisitos. Algunos ejemplos de SEP son cuando se muda fuera
								del área de servicio de su plan, pierde la cobertura patrocinada
								por su empleador o tiene un cambio en su estado de Medicaid o
								Ayuda Adicional. También puede cambiar de un plan de MA a otro
								durante el período de inscripción abierta de Medicare Advantage
								(MA OEP), que se extiende del 1 de enero al 31 de marzo de cada
								año. Durante este tiempo, también puede cambiar de un plan de MA
								a Medicare Original y unirse a un plan de la Parte D. Sin
								embargo, no puede cambiar de Medicare Original a un plan de MA
								durante el MA OEP.
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
								<span>Suplementario</span>
							</div>
							<span>
								Medicare Suplementario (también conocido como Medigap) es un
								tipo de seguro privado que puede ayudarte a pagar algunos de los
								costos que Medicare Original no cubre, como deducibles,
								coaseguros, copagos y atención médica de emergencia en el
								extranjero. Los planes de Medigap están estandarizados y
								regulados por los gobiernos federal y estatal. Hay 10 planes de
								Medigap diferentes disponibles, cada uno identificado por una
								letra (A, B, C, D, F, G, K, L, M y N). Cada plan ofrece un nivel
								diferente de cobertura y beneficios.
							</span>
							<span>
								Para inscribirte en un plan de Medigap, debes tener la Parte A y
								la Parte B de Medicare. Puedes comprar un plan de Medigap de
								cualquier compañía de seguros autorizada para venderlo en tu
								estado. El mejor momento para comprar un plan de Medigap es
								durante tu período de inscripción abierta de Medigap, que es un
								período de seis meses que comienza el mes en que cumplas 65 años
								y te inscribas en la Parte B. Durante este período, tienes el
								derecho de emisión garantizado para comprar cualquier plan de
								Medigap que se venda en tu estado, independientemente de tu
								estado de salud o condiciones preexistentes. No te pueden cobrar
								más ni negar la cobertura basándose en tu salud.
							</span>
							<span>
								Si te pierdes tu período de inscripción abierta de Medigap, aún
								puedes comprar un plan de Medigap, pero es posible que tengas
								que pasar por una evaluación médica y pagar una prima más alta o
								que te nieguen la cobertura basándose en tu salud. Sin embargo,
								hay algunas situaciones en las que puedes tener el derecho de
								emisión garantizado para comprar un plan de Medigap fuera de tu
								período de inscripción abierta, como cuando pierdes la cobertura
								patrocinada por tu empleador o cuando cambias de un plan de
								Medicare Advantage a Medicare Original.
							</span>
							<span>
								El costo de un plan de Medigap depende de varios factores, como
								el plan que elijas, la compañía de seguros de la que compres, tu
								edad, tu ubicación y si calificas para algún descuento. Pagarás
								una prima mensual por tu plan de Medigap además de tu prima de
								la Parte B. También es posible que pagues deducibles, copagos,
								coseguros y límites de gastos de tu plan de Medigap. Estos
								costos varían según el plan y el proveedor.
							</span>
							<span>
								Los planes de Medigap no cubren todo. Por ejemplo, no cubren
								medicamentos recetados, atención a largo plazo, atención dental,
								atención visual, audífonos o enfermería privada. Es posible que
								necesites comprar cobertura adicional o pagar de tu bolsillo por
								estos servicios.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="prescription"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col gap-4 text-lg">
							<div className="flex flex-col flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
								<span>COBERTURA DE&nbsp;</span>
								<span>MEDICAMENTOS RECETADOS</span>
							</div>
							<span>
								La cobertura de medicamentos con receta (también conocida como
								Parte D) es un beneficio opcional que te ayuda a pagar tus
								medicamentos recetados. Los planes de la Parte D son ofrecidos
								por compañías de seguros privadas que tienen contratos con
								Medicare para brindar cobertura de medicamentos. Puedes obtener
								cobertura de la Parte D a través de un plan de medicamentos con
								receta independiente (PDP) que funciona con Medicare Original o
								a través de un plan de Medicare Advantage que incluye cobertura
								de medicamentos.
							</span>
							<span>
								Para inscribirte en un plan de la Parte D, debes tener la Parte
								A y/o la Parte B de Medicare. Puedes unirte a un plan de la
								Parte D durante tu período de inscripción inicial (IEP), que es
								el mismo que tu IEP para la Parte B. También puedes cambiar tu
								plan de la Parte D durante el período de inscripción abierta
								anual (OEP), que va desde el 15 de octubre hasta el 7 de
								diciembre de cada año.
							</span>
							<span>
								El costo de un plan de la Parte D depende de varios factores,
								como el plan que elijas, los medicamentos que tomes, la farmacia
								que uses y si calificas para algún programa de asistencia.
								Pagarás una prima mensual por tu plan de la Parte D además de tu
								prima de la Parte B (y cualquier prima de MA o Medigap). También
								puedes tener que pagar deducibles, copagos, coaseguros y límites
								de gastos de tu plan de la Parte D. Estos costos varían según el
								plan y el proveedor.
							</span>
							<span>
								Los planes de la Parte D tienen diferentes niveles de cobertura
								según cuánto gastes en medicamentos cada año. Estos niveles son:
							</span>
							<ul>
								<li>
									Etapa del deducible: Pagas el 100% del costo de tus
									medicamentos hasta alcanzar tu deducible ($480 en 2023).
								</li>
								<li>
									Etapa de cobertura inicial: Pagas un copago o coaseguro por
									cada medicamento hasta alcanzar el límite de cobertura inicial
									($4,430 en 2023).
								</li>
								<li>
									Brecha de cobertura: Pagas el 25% del costo de los
									medicamentos de marca y el 37% del costo de los medicamentos
									genéricos hasta alcanzar el umbral de gastos de tu bolsillo
									($7,050 en 2023).
								</li>
								<li>
									Etapa de cobertura catastrófica: Pagas un pequeño copago o
									coseguro por cada medicamento durante el resto del año.
								</li>
							</ul>
							<span>
								Los planes de la Parte D no cubren todos los medicamentos. Cada
								plan tiene su propia lista de medicamentos cubiertos llamada
								formulario. El formulario puede cambiar de un año a otro o
								durante el año. Debes consultar el formulario de tu plan de la
								Parte D para ver si tus medicamentos están cubiertos y en qué
								categoría se encuentran. También debes verificar si tu plan
								tiene alguna restricción o requisito para tus medicamentos, como
								autorización previa, límites de cantidad o terapia escalonada.
							</span>
							<span>
								Los planes de la Parte D tienen una brecha de cobertura (también
								conocido como agujero de la dona) que ocurre cuando tú y tu plan
								han gastado una cierta cantidad en medicamentos ($4,430 en
								2023). En la brecha de cobertura, pagas el 25% del costo de los
								medicamentos de marca y el 37% del costo de los medicamentos
								genéricos hasta alcanzar el máximo de gastos de tu bolsillo
								($7,050 en 2023). Después de eso, entras en la etapa de
								cobertura catastrófica, donde pagas un pequeño copago o coseguro
								por cada medicamento durante el resto del año.
							</span>
							<span>
								Los planes de la Parte D no cubren todos los medicamentos.
								Algunos medicamentos están excluidos de la cobertura de la Parte
								D por ley, como los medicamentos para pérdida o aumento de peso,
								fertilidad, fines cosméticos o disfunción eréctil. Es posible
								que necesites comprar cobertura adicional o pagar de tu bolsillo
								por estos medicamentos.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="costs"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Costos y</span>
							<span>Cobertura</span>
						</div>
						<div>
							<ul className="flex list-disc flex-col gap-4 text-lg">
								<span>
									Los costos y beneficios de Medicare pueden variar según la
									cobertura que elijas. Medicare Original tiene deducibles,
									copagos y coaseguros, mientras que los planes de Medicare
									Advantage y Medigap pueden tener diferentes estructuras de
									costos compartidos. Aquí tienes un resumen breve de algunos
									costos y beneficios comunes asociados con Medicare:
								</span>
								<span className="text-xl font-bold">Parte A:</span>
								<li className="ml-6">
									Primas: Son pagos mensuales que realizas para tener cobertura
									de Medicare. Puedes pagar primas por la Parte A (si no
									calificas para la Parte A sin prima), Parte B, Parte D, planes
									de Medicare Advantage y Medigap. El monto de tu prima depende
									del plan que elijas y tu nivel de ingresos.
								</li>
								<span className="text-xl font-bold">Parte B:</span>
								<li className="ml-6">
									Deducibles: Son cantidades que pagas de tu bolsillo antes de
									que tu cobertura de Medicare comience a pagar. Puedes pagar
									deducibles para la Parte A, Parte B, Parte D, planes de
									Medicare Advantage y Medigap. El monto de tu deducible depende
									del plan que elijas.
								</li>
								<span className="text-xl font-bold">Costos de Medigap:</span>
								<li className="ml-6">
									Copagos: Son cantidades fijas que pagas por cada servicio o
									artículo que recibes. Puedes pagar copagos para la Parte A,
									Parte B, Parte D, planes de Medicare Advantage y Medigap. El
									monto de tu copago depende del plan que elijas y el servicio o
									artículo que recibas.
								</li>
								<li className="ml-6">
									Coaseguros: Son porcentajes del costo que pagas por cada
									servicio o artículo que recibes. Puedes pagar coaseguros para
									la Parte A, Parte B, Parte D, planes de Medicare Advantage y
									Medigap. El monto de tu coaseguro depende del plan que elijas
									y el servicio o artículo que recibas.
								</li>
								<li className="ml-6">
									Límites de gastos de tu bolsillo: Son cantidades máximas que
									pagas de tu bolsillo por servicios cubiertos en un año. Una
									vez que alcanzas tu límite de gastos de tu bolsillo, tu plan
									paga el 100% del costo de los servicios cubiertos durante el
									resto del año. Puedes tener límites de gastos de tu bolsillo
									para los planes de Parte D y Medicare Advantage. El monto de
									tu límite de gastos de tu bolsillo depende del plan que
									elijas.
								</li>
								<span>
									Los beneficios de Medicare dependen del tipo de cobertura que
									tengas y los servicios que necesites. En general, puedes
									esperar obtener algunos o todos los siguientes beneficios de
									Medicare:
								</span>
								<li className="ml-6">
									Seguro hospitalario: Cubre estadías hospitalarias, cuidado en
									instalaciones de enfermería especializada, cuidados paliativos
									y algunos servicios de atención domiciliaria. Se obtiene este
									beneficio a través de la Parte A o planes de Medicare
									Advantage.
								</li>
								<li className="ml-6">
									Seguro médico: Cubre visitas médicas, servicios ambulatorios,
									cuidado preventivo, equipos médicos duraderos y algunos
									servicios de atención domiciliaria. Se obtiene este beneficio
									a través de la Parte B o planes de Medicare Advantage.
								</li>
								<li className="ml-6">
									Cobertura de medicamentos recetados: Cubre medicamentos
									recetados y algunas vacunas. Obtén este beneficio a través de
									la Parte D o planes de Medicare Advantage que incluyen
									cobertura de medicamentos.
								</li>
								<li className="ml-6">
									Seguro Suplementario: Cubre algunos de los costos que Medicare
									Original no cubre, como deducibles, coaseguros, copagos y
									atención de emergencia en el extranjero. Puedes obtener este
									beneficio a través de los planes de Medigap.
								</li>
								<li className="ml-6">
									Beneficios adicionales: Son beneficios adicionales que algunos
									planes de Medicare Advantage ofrecen más allá de lo que cubre
									Medicare Original, como cuidado dental, cuidado de la vista,
									audífonos, programas de bienestar y más.
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent
						value="additional"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>ADICIONALES</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<ul className="list-disc">
								<span>
									Algunos planes de Medicare Advantage ofrecen beneficios
									adicionales que no cubre el Medicare Original. Estos
									beneficios pueden variar según el plan y el proveedor. Algunos
									ejemplos de beneficios adicionales son:
								</span>
								<li className="ml-6">
									Cuidado dental: Esto incluye servicios dentales preventivos y
									restaurativos, como exámenes, limpiezas, empastes, coronas y
									dentaduras.
								</li>
								<li className="ml-6">
									Cuidado de la vista: Esto cubre exámenes oculares, anteojos,
									lentes de contacto y cirugía de cataratas.
								</li>
								<li className="ml-6">
									Audífonos: Esto cubre pruebas auditivas, audífonos y baterías
									para audífonos.
								</li>
								<li className="ml-6">
									Programas de bienestar: Estos son programas que te ayudan a
									mejorar tu salud y bienestar, como clases de ejercicios,
									entrenamiento en salud, asesoramiento nutricional y manejo de
									enfermedades crónicas.
								</li>
								<li className="ml-6">
									Transporte: Esto cubre viajes hacia y desde citas médicas,
									farmacias u otros lugares relacionados con la salud.
								</li>
								<li className="ml-6">
									Artículos de venta libre (OTC): Esto cubre ciertos
									medicamentos sin receta y artículos relacionados con la salud,
									como analgésicos, vitaminas, vendas y termómetros.
								</li>
								<li className="ml-6">
									Entrega de comidas: Esto cubre comidas entregadas a domicilio
									después de una estancia en el hospital o para ciertas
									condiciones crónicas.
								</li>
								<li className="ml-6">
									Modificaciones del hogar: Esto cubre cambios en tu hogar para
									que sea más seguro y accesible, como rampas, barras de agarre
									o sillas salvaescaleras.
								</li>
								<span>
									Para conocer los beneficios adicionales que ofrece tu plan de
									MA, puedes consultar el resumen de beneficios, la evidencia de
									cobertura o el sitio web de tu plan. También puedes comparar
									diferentes planes de MA y sus beneficios adicionales
									utilizando la herramienta de búsqueda de planes de Medicare.
									También debes verificar si tu plan tiene reglas o limitaciones
									para utilizar estos beneficios adicionales, como autorización
									previa, restricciones de red o límites de cantidad.
								</span>
							</ul>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
