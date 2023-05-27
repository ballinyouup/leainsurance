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
							Elegibilidad e Inscripción
						</TabsTrigger>
						<TabsTrigger value="original">Medicare original</TabsTrigger>
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
								DESCRIPCIÓN GENERAL
							</div>
							<span>
								Medicare es un programa de seguro de salud federal que ayuda
								millones de estadounidenses pagan por sus necesidades de
								atención médica. Si tiene 65 años o más, está discapacitado o
								tiene ciertas enfermedades crónicas condiciones, puede ser
								elegible para la cobertura de Medicare.
							</span>
							<span>
								Establecido en 1965, Medicare ha evolucionado para incluir
								diferentes partes (A, B, C y D) que se adaptan a diversas
								necesidades de atención médica.
							</span>
							<span>
								Este programa es administrado por los Centros de Medicare y
								Servicios de Medicaid (CMS), con la inscripción manejada por
								Social Administración de Seguridad.
							</span>
							<span>
								Las entidades privadas son contratadas por CMS para proporcionar
								servicios servicios, incluido el procesamiento de reclamos, la
								auditoría y la calidad vigilancia.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Elegibilidad y</span>
							<span>Inscripción</span>
						</div>
						<p className="flex flex-col gap-6 text-lg">
							<div>
								<span className="font-bold">
									Para ser elegible para Medicare, las personas deben ser:
								</span>
								<ul className="ml-8 list-disc">
									<li>
										Tiene 65 años o más y es ciudadano estadounidense o
										residente legal que ha vivido en los EE. UU. durante al
										menos cinco años.
									</li>
									<li>
										Tiene menos de 65 años y tiene una discapacidad que lo
										califica para los beneficios del Seguro Social durante al
										menos 24 meses.
									</li>
									<li>
										Tiene menos de 65 años y tiene enfermedad renal en etapa
										terminal (ESRD) o esclerosis lateral amiotrófica (ELA)
									</li>
								</ul>
							</div>
							<div>
								<span className="font-bold">Puedes inscribirte:</span>
								<ul className="ml-8 list-disc">
									<li>En línea en www.ssa.gov</li>
									<li>Por teléfono al 1-800-772-1213 (TTY 1-800-325-0778)</li>
									<li>En persona en su oficina local del Seguro Social</li>
								</ul>
							</div>
							<span>
								El mejor momento para inscribirse en Medicare es durante su
								período inicial. período de inscripción (IEP), que es un período
								de siete meses que comienza tres meses antes de su cumpleaños
								número 65 y finaliza tres meses después de eso. Si se inscribe
								durante este período, usted evitará multas por inscripción
								tardía o brechas en la cobertura.
							</span>
							<span>
								Si pierde su IEP, aún puede inscribirse en Medicare durante el
								período de matrícula general (GEP), que comienza el 1 de enero
								al 31 de marzo de cada año. Sin embargo, es posible que tenga
								que pagar más primas y espere hasta el 1 de julio para que
								comience su cobertura.
							</span>
							<span>
								También puede cambiar su cobertura de Medicare durante el
								período anual período de inscripción abierta (OEP), que va del
								15 de octubre al 7 de diciembre de cada año. Durante este
								tiempo, puede cambiar de Medicare Original a un plan Medicare
								Advantage, o viceversa, o cambiar su plan de medicamentos
								recetados.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="original"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>ORIGINALES</span>
							<span>MEDICARE</span>
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-xl font-bold">
								Medicare Original consta de dos partes:
							</span>
							<ul className="ml-8 list-disc">
								<li>Parte A (seguro de hospital)</li>
								<li>Parte B (seguro médico)</li>
							</ul>
							<span className="text-xl font-bold">
								Parte A (Seguro de Hospital)
							</span>
							<span>
								La Parte A cubre la atención hospitalaria para pacientes
								internados, centro de enfermería especializada cuidados
								paliativos, cuidados paliativos y algunos servicios de atención
								médica en el hogar. Mayoría las personas no pagan una prima por
								la Parte A si ellos o su cónyuge pagó impuestos de Medicare
								mientras trabajaba durante al menos 10 años (40 cuarteles).
							</span>
							<span>
								La mayoría de las personas no pagan una prima mensual por la
								Parte A si ellos o su cónyuge pagó impuestos de Medicare
								mientras trabajaba. Sin embargo, si usted no califica para la
								Parte A sin prima, puede comprarla por hasta $506 por mes en
								2023. El deducible anual de la Parte A es $1,556 en 2023.
							</span>
							<span className="text-xl font-bold">Parte B (Seguro Médico)</span>
							<span>
								La Parte B cubre servicios médicos necesarios y preventivos.
								servicios, como visitas al médico, atención ambulatoria,
								atención médica equipos y algunos servicios de atención médica
								domiciliaria. La Parte B requiere una prima mensual, que
								generalmente se deduce de su Social Beneficios de seguridad.
							</span>
							<span>
								Todos pagan una prima mensual por la Parte B. La prima estándar
								cantidad es $164.90 por mes en 2023. Sin embargo, si su ingreso
								es por encima de cierto nivel, es posible que pague más debido a
								la Monto de ajuste mensual relacionado con los ingresos (IRMAA).
								El anual el deducible para la Parte B es de $226 en 2023.
							</span>
							<span>
								Después de pagar su deducible, normalmente paga el 20% del Monto
								aprobado por Medicare para los servicios cubiertos. Se llama
								coseguro También puede pagar una cantidad fija llamada copago
								para algunos servicios.
							</span>
							<span>
								Medicare Original no cubre todo. por ejemplo, no cubre
								medicamentos recetados, cuidado dental, cuidado de la vista,
								audífonos, atención a largo plazo o cirugía estética. Tu puedes
								necesitar para comprar cobertura adicional o pagar de su
								bolsillo por estos servicios.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="advantage"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
							<span>MEDICARE</span>
							<span>VENTAJA</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<span>
								Medicare Advantage (MA) es una forma alternativa de obtener
								Cobertura de Medicare. Lo ofrecen las compañías de seguros
								privadas. que tienen un contrato con Medicare para proporcionar
								todos los beneficios de la Parte A y la Parte B. La mayoría de
								los planes MA también incluyen la Parte D (recetas cobertura de
								medicamentos) y ofrecen beneficios adicionales como cuidado
								dental, cuidado de la vista, audífonos, programas de bienestar y
								más.
							</span>
							<span>
								Los planes MA varían en términos de costos y beneficios. Puede
								pagar un prima mensual para su plan MA además de su Parte B de
								primera calidad. También puede pagar deducibles, copagos,
								coseguros, y límites de gastos de bolsillo para su plan MA.
								Estos costos dependen el plan que elija y los servicios que
								utilice.
							</span>
							<span>
								Debe seguir las reglas de su plan MA para obtener cobertura
								servicios. Por ejemplo, es posible que necesite usar proveedores
								en su red del plan, obtenga referencias de su médico de atención
								primaria (PCP) u obtener autorización previa para ciertos
								servicios.
							</span>
							<span>
								Puede inscribirse en un plan MA durante su IEP u OEP o durante
								un período de inscripción especial (SEP) si califica para uno.
								Alguno ejemplos de SEP son cuando se muda fuera de su plan área
								de servicio, perder la cobertura patrocinada por su empleador o
								tener una cambio en su estado de Medicaid o Ayuda Adicional. Tú
								también puedes cambiar de un plan MA a otro durante el Medicare
								Advantage período de inscripción abierta (MA OEP), que va del 1
								de enero al 31 de marzo de cada año. Durante este tiempo,
								también puede cambiar de un plan MA a Medicare Original e
								inscríbase en un plan de la Parte D. Sin embargo, no puede
								cambiar de Medicare Original a un plan MA durante la MA OEP.
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
								<span>Suplemento</span>
							</div>
							<span>
								Suplemento de Medicare (también conocido como Medigap) es un
								tipo de seguro que puede ayudarlo a pagar algunos de los costos
								que Medicare Original no cubre, como deducibles, coseguro,
								copagos y atención de emergencia para viajes al extranjero. Los
								planes Medigap están estandarizados y regulados por las
								autoridades federales y gobiernos estatales. Hay 10 planes
								Medigap diferentes disponible, cada uno identificado por una
								letra (A, B, C, D, F, G, K, L, M y N). Cada plan ofrece un nivel
								diferente de cobertura y beneficios.
							</span>
							<span>
								Para inscribirse en un plan Medigap, debe tener Medicare Parte A
								y Parte B. Puede comprar un plan Medigap de cualquier compañía
								de seguros que tiene licencia para venderlo en su estado. El
								mejor momento para comprar un plan Medigap es durante su período
								de inscripción abierta de Medigap, que es un período de seis
								meses que comienza el mes en que cumple 65 años e inscríbase en
								la Parte B. Durante este período, tiene una garantía derecho de
								emisión para comprar cualquier plan Medigap que se venda en su
								estado, independientemente de su estado de salud o condiciones
								preexistentes. Tú no se le puede cobrar más ni se le puede negar
								la cobertura en función de su salud.
							</span>
							<span>
								Si pierde su período de inscripción abierta de Medigap, aún
								puede podrá comprar un plan Medigap, pero es posible que tenga
								que pasar por suscripción médica y pagar una prima más alta o
								ser denegada Cobertura basada en su salud. Sin embargo, hay
								algunos situaciones en las que puede tener un derecho de emisión
								garantizado para comprar un Plan Medigap fuera de su período de
								inscripción abierta, como cuando pierde la cobertura patrocinada
								por su empleador o cuando cambiar de un plan Medicare Advantage
								a Medicare Original.
							</span>
							<span>
								El costo de un plan Medigap depende de varios factores, como el
								plan que elija, la compañía de seguros a la que compre, su edad,
								su ubicación y si califica para algún descuento. Pagará una
								prima mensual por su plan Medigap además a su prima de la Parte
								B. También puede pagar deducibles, copagos, coseguro y límites
								de gastos de bolsillo para su plan medigap. Estos costos varían
								según el plan y el proveedor.
							</span>
							<span>
								Los planes Medigap no cubren todo. Por ejemplo, ellos no cubrir
								medicamentos recetados, cuidado a largo plazo, cuidado dental,
								cuidado de la vista atención médica, audífonos o enfermería
								privada. Es posible que necesite comprar cobertura adicional o
								pagar de su bolsillo por estos servicios.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="prescription"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col gap-4 text-lg">
							<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
								<span>Prescripción</span>
								<span>Cobertura de medicamentos</span>
							</div>
							<span>
								La cobertura de medicamentos recetados (también conocida como
								Parte D) es una opción beneficio que le ayuda a pagar sus
								medicamentos recetados. Los planes de la Parte D son ofrecidos
								por compañías de seguros privadas que contrato con Medicare para
								proporcionar cobertura de medicamentos. Puedes obtener Cobertura
								de la Parte D ya sea a través de un medicamento recetado
								independiente (PDP) que trabaja con Medicare Original o a través
								de un Plan Medicare Advantage que incluye cobertura de
								medicamentos.
							</span>
							<span>
								Para inscribirse en un plan de la Parte D, debe tener la Parte A
								de Medicare y/o Parte B. Puede inscribirse en un plan de la
								Parte D durante su período inicial. período de inscripción
								(IEP), que es el mismo que su IEP para la Parte B. También puede
								cambiar su plan de la Parte D durante la apertura anual período
								de inscripción (OEP), que va del 15 de octubre a diciembre 7
								cada año.
							</span>
							<span>
								El costo de un plan de la Parte D depende de varios factores,
								como el plan que elige, los medicamentos que toma, la farmacia
								que usa, y si califica para algún programa de asistencia. Vas a
								pagar una prima mensual por su plan de la Parte D además de su
								Prima de la Parte B (y cualquier prima de MA o Medigap). También
								puede pagar deducibles, copagos, coseguro y límites de gastos de
								bolsillo para su plan de la Parte D. Estos costos varían según
								el plan y el proveedor.
							</span>
							<span>
								Los planes de la Parte D tienen diferentes niveles de cobertura
								dependiendo de cómo cuánto gasta en drogas cada año. Estos
								niveles son:
							</span>
							<ul>
								<li>
									La etapa del deducible: Pagas el 100% del costo de tus
									medicamentos hasta alcanzar el monto de su deducible ($480 en
									2023).
								</li>
								<li>
									La etapa de cobertura inicial: pagas un copago o coseguro para
									cada medicamento hasta alcanzar el límite de cobertura inicial
									($4,430 en 2023).
								</li>
								<li>
									La etapa de brecha de cobertura: Usted paga el 25% del costo
									de la marca medicamentos y el 37% del costo de los
									medicamentos genéricos hasta llegar al umbral de gastos de
									bolsillo ($7,050 en 2023).
								</li>
								<li>
									La etapa de cobertura catastrófica: Usted paga un pequeño
									copago o coseguro por cada medicamento por el resto del año.
								</li>
							</ul>
							<span>
								Los planes de la Parte D no cubren todos los medicamentos. Cada
								plan tiene su propia lista. de medicamentos cubiertos llamado
								formulario. El formulario puede cambiar de año en año o durante
								el año. Deberías comprobar el formulario de su plan de la Parte
								D para ver si sus medicamentos están cubiertos y en qué nivel se
								encuentran. También debe verificar si su plan tiene alguna
								restricción o requisito para sus medicamentos, como autorización
								previa, límites de cantidad o terapia escalonada.
							</span>
							<span>
								Los planes de la Parte D tienen un período sin cobertura
								(también conocido como período sin cobertura) que ocurre cuando
								usted y su plan han gastado una cierta cantidad en drogas
								($4,430 en 2023). En la brecha de cobertura, usted paga el 25%
								de el costo de los medicamentos de marca y el 37% del costo de
								los genéricos medicamentos hasta que alcance el umbral de gastos
								de bolsillo ($7,050 en 2023). Después de eso, ingresa a la etapa
								de cobertura catastrófica, donde paga un pequeño copago o
								coseguro por cada medicamento para el resto del año.
							</span>
							<span>
								Los planes de la Parte D no cubren todos los medicamentos.
								Algunos medicamentos están excluidos de la cobertura de la Parte
								D por ley, como medicamentos para bajar de peso o ganancia,
								fertilidad, fines cosméticos o disfunción eréctil. Tú puede
								necesitar comprar cobertura adicional o pagar de su bolsillo por
								estas drogas
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
									cobertura selecciona. Medicare Original tiene deducibles,
									copagos y coseguro, mientras que los planes Medicare Advantage
									y Medigap pueden tienen diferentes estructuras de costos
									compartidos. He aquí un breve descripción general de algunos
									costos y beneficios comunes asociados con Seguro médico del
									estado:
								</span>
								<span className="text-xl font-bold">Parte A:</span>
								<li className="ml-6">
									Primas: Son pagos mensuales que usted hace para tener
									Cobertura de Medicare. Puede pagar las primas de la Parte A
									(si no no califica para la Parte A), Parte B, Parte D, MA y
									planes Medigap. El monto de su prima depende del plan usted
									elige y su nivel de ingresos.
								</li>
								<span className="text-xl font-bold">Parte B:</span>
								<li className="ml-6">
									Deducibles: Estos son montos que usted paga de su bolsillo
									antes de que su cobertura de Medicare comience a pagar. puedes
									pagar deducibles para los planes Parte A, Parte B, Parte D, MA
									y Medigap. El monto de su deducible depende del plan que
									elija.
								</li>
								<span className="text-xl font-bold">Costos de Medigap:</span>
								<li className="ml-6">
									Copagos: Estos son montos fijos que usted paga por cada
									servicio o artículo que recibe. Puede pagar copagos por la
									Parte A, Planes de la Parte B, Parte D, MA y Medigap. la
									cantidad de tu copago depende del plan que elija y el servicio
									o artículo que obtienes.
								</li>
								<li className="ml-6">
									Coseguro: estos son porcentajes del costo que paga por cada
									servicio o artículo que obtenga. Puede pagar un coseguro por
									Planes Parte A, Parte B, Parte D, MA y Medigap. La cantidad de
									su coseguro depende del plan que elija y de la servicio o
									artículo que recibe.
								</li>
								<li className="ml-6">
									Límites de gastos de bolsillo: estos son los montos máximos
									que paga de su bolsillo por los servicios cubiertos en un año.
									una vez que alcances su límite de gastos de bolsillo, su plan
									paga el 100% del costo de servicios cubiertos por el resto del
									año. puede que tengas límites de gastos de bolsillo para los
									planes de la Parte D y MA. La cantidad de el límite de gastos
									de su bolsillo depende del plan que elija.
								</li>
								<span>
									Los beneficios de Medicare dependen del tipo de cobertura que
									usted tienes y los servicios que necesitas. En general, puede
									esperar obtener algunos o todos los siguientes beneficios de
									Medicare:
								</span>
								<li className="ml-6">
									Seguro hospitalario: Cubre estancias hospitalarias, atención
									en un centro de enfermería especializada, cuidados paliativos
									y algunos cuidados en el hogar cuidado de la salud. Obtiene
									este beneficio de los planes de la Parte A o MA.
								</li>
								<li className="ml-6">
									Seguro médico: Esto cubre visitas al médico, ambulatorio
									servicios médicos preventivos, equipo médico duradero y
									algunos cuidado de la salud en el hogar. Obtiene este
									beneficio de la Parte B o MA planes
								</li>
								<li className="ml-6">
									Cobertura de medicamentos recetados: Esto cubre medicamentos y
									algunas vacunas. Obtienes este beneficio de parte Planes D o
									MA que incluyen cobertura de medicamentos.
								</li>
								<li className="ml-6">
									Seguro suplementario: Esto cubre algunos de los costos que
									Medicare Original no cubre, como deducibles, coseguro, copagos
									y atención de emergencia para viajes al extranjero. Obtiene
									este beneficio de los planes Medigap.
								</li>
								<li className="ml-6">
									Beneficios adicionales: Estos son beneficios adicionales que
									algunos MA los planes ofrecen más allá de lo que cubre
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
							<span>ADICIONAL</span>
							<span>BENEFICIOS</span>
						</div>
						<div className="flex flex-col gap-4 text-lg">
							<ul className="list-disc">
								<span>
									Algunos planes Medicare Advantage ofrecen beneficios
									adicionales que Medicare Original no cubre. Estos beneficios
									pueden variar según plan y proveedor. Algunos ejemplos de
									beneficios adicionales son:
								</span>
								<li className="ml-6">
									Cuidado dental: Esto cubre servicios dentales preventivos y
									restaurativos. servicios, como exámenes, limpiezas, empastes,
									coronas y dentadura postiza.
								</li>
								<li className="ml-6">
									Cuidado de la vista: Esto cubre exámenes de la vista,
									anteojos, lentes de contacto y cirugía de cataratas.
								</li>
								<li className="ml-6">
									Audífonos: Esto cubre pruebas de audición, audífonos y pilas
									para audífonos.
								</li>
								<li className="ml-6">
									Programas de bienestar: Son programas que te ayudan a mejorar
									su salud y bienestar, como clases de fitness, salud coaching,
									asesoramiento nutricional y enfermedades crónicas gestión.
								</li>
								<li className="ml-6">
									Transporte: Esto cubre viajes hacia y desde centros médicos
									citas, farmacias u otros lugares relacionados con la salud.
								</li>
								<li className="ml-6">
									Artículos de venta libre (OTC): Esto cubre ciertos
									medicamentos sin receta y artículos relacionados con la salud,
									como analgésicos calmantes, vitaminas, vendas y termómetros.
								</li>
								<li className="ml-6">
									Entrega de comidas: Esto cubre las comidas entregadas a
									domicilio después de un hospitalización o por ciertas
									condiciones crónicas.
								</li>
								<li className="ml-6">
									Modificaciones en el hogar: Esto cubre cambios en su hogar
									para hacer hacerlo más seguro y accesible, como rampas, barras
									de apoyo o salvaescaleras.
								</li>
								<span>
									Para saber qué beneficios adicionales ofrece su plan MA, usted
									puede consultar el resumen de beneficios de su plan, la
									evidencia de cobertura o sitio web. También puede comparar
									diferentes planes MA y sus beneficios adicionales utilizando
									el Buscador de planes de Medicare herramienta. También debe
									verificar si su plan tiene reglas o limitaciones para usar
									estos beneficios adicionales, tales como previa autorización,
									restricciones de red o límites de cantidad.
								</span>
							</ul>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
