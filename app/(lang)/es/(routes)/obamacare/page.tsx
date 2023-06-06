import { Tabs, TabsList, TabsTrigger, TabsContent } from "$/tabs";
import Image from "next/image";
import { metadata as meta } from "../../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Obamacare",
	...meta,
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<span className="absolute bottom-4 left-4 text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						OBAMACARE
					</span>
					<Image
						alt="Obamacare Image"
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
						<TabsTrigger value="overview" className="flex flex-wrap">
							<span>Descripción general&nbsp;</span>
							<span>De Obamacare</span>
						</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Elegibilidad&nbsp;</span>
							<span>e Inscripción</span>
						</TabsTrigger>
						<TabsTrigger value="types" className="flex flex-wrap">
							<span>Tipos de Planes&nbsp;</span>
							<span>De Salud</span>
						</TabsTrigger>
						<TabsTrigger value="tax" className="flex flex-wrap">
							<span>Impuesto sobre&nbsp;</span>
							<span>primas créditos</span>
						</TabsTrigger>
						<TabsTrigger value="csrs" className="flex flex-wrap">
							<span>Costo compartido&nbsp;</span>
							<span>Subsidios de Reducción</span>
						</TabsTrigger>
						<TabsTrigger value="medicaid" className="flex flex-wrap">
							<span>Medicaid &&nbsp;</span>
							<span>CHIP</span>
						</TabsTrigger>
						<TabsTrigger value="guide">Guía de Obamacare</TabsTrigger>
						<TabsTrigger value="additional">Beneficios adicionales</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="flex flex-wrap pb-2 text-4xl font-bold sm:text-5xl">
								<span>Descripción general&nbsp;</span>
								<span>De Obamacare</span>
							</div>
							<span>
								El Affordable Care Act (ACA), también conocido como Obamacare,
								es una completa ley de reforma del sistema de salud promulgada
								en 2010. Su objetivo principal es hacer que el seguro médico sea
								más asequible y accesible para todos los estadounidenses, sin
								importar su edad, ingresos o condiciones preexistentes.
							</span>
							<span>
								Obamacare ofrece varios tipos de ayuda financiera, como créditos
								fiscales para primas, subsidios de reducción de costos
								compartidos, expansión de Medicaid y el Programa de Seguro
								Médico para Niños (CHIP).
							</span>
							<span>
								Además, Obamacare establece estándares mínimos para los planes
								de salud, como la cobertura de beneficios de salud esenciales,
								servicios preventivos y condiciones preexistentes.
							</span>
						</div>
					</TabsContent>
					<TabsContent
						value="eligibility"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
							<span>Elegibilidad&nbsp;</span>
							<span>e Inscripción</span>
						</div>
						<p className="flex flex-col gap-6 text-lg">
							<span>
								Para ser elegible para Obamacare, debes ser ciudadano
								estadounidense o inmigrante legalmente presente, y no debes
								estar encarcelado.
							</span>
							<span>
								También debes tener un ingreso familiar entre el 100% y el 400%
								del nivel federal de pobreza (FPL) para calificar para los
								créditos fiscales de prima, o entre el 100% y el 250% del FPL
								para calificar para los subsidios de reducción de costos
								compartidos. Puedes verificar tu elegibilidad y solicitar
								Obamacare a través del Mercado de Seguros de Salud, que es una
								plataforma en línea donde puedes comparar y buscar planes de
								salud. También puedes solicitarlo por teléfono, por correo o en
								persona con la ayuda de un asistente capacitado.
							</span>
							<span>
								El período de inscripción abierta para los planes de salud del
								2023 comienza el 1 de noviembre de 2022 y termina el 15 de enero
								de 2023. Durante este tiempo, puedes inscribirte en un nuevo
								plan o cambiar tu plan actual.
							</span>
							<span>
								Si te pierdes la fecha límite de inscripción abierta, es posible
								que aún puedes inscribirte en un plan de salud si calificas para
								un período de inscripción especial debido a un evento de vida,
								como perder otra cobertura, casarte, tener un bebé o según los
								ingresos estimados del hogar. También puedes inscribirte en
								Medicaid o CHIP en cualquier momento si eres elegible.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="types"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Tipos de Planes&nbps;</span>
							<span>De Salud</span>
						</div>
						<p>
							<span>
								El Obamacare ofrece cuatro tipos de planes de salud: bronce,
								plata, oro y platino. Estos planes difieren en la cantidad de
								cobertura y cuánto debes pagar de tu bolsillo. Por lo general,
								los planes de bronce tienen las primas más bajas pero los
								deducibles y copagos más altos, mientras que los planes de
								platino tienen las primas más altas pero los deducibles y
								copagos más bajos. Los planes de plata son los más populares
								porque son elegibles tanto para créditos fiscales de primas como
								para subsidios de reducción de costos compartidos.
							</span>
							<ul className="list-disc">
								<span>
									Todos los planes de Obamacare deben cubrir 10 beneficios de
									salud esenciales:
								</span>
								<li className="ml-6">Servicios ambulatorios para pacientes</li>
								<li className="ml-6">Servicios de emergencia</li>
								<li className="ml-6">Atención de maternidad y recién nacido</li>
								<li className="ml-6">
									Servicios de salud mental y trastornos por uso de sustancias
								</li>
								<li className="ml-6">Medicamentos recetados</li>
								<li className="ml-6">
									Servicios y dispositivos de rehabilitación y habilitación
								</li>
								<li className="ml-6">Servicios de laboratorio</li>
								<li className="ml-6">
									Servicios preventivos y de bienestar y enfermedades crónicas
									gestión
								</li>
								<li className="ml-6">
									Servicios pediátricos, incluida la atención oral y de la vista
								</li>
								<span>
									Todos los planes de Obamacare también deben cubrir servicios
									preventivos sin costo para ti, como pruebas, vacunas,
									asesoramiento y chequeos. Además, todos los planes de
									Obamacare deben cubrir condiciones preexistentes sin cobrarte
									más o negarte cobertura.
								</span>
							</ul>
						</p>
					</TabsContent>
					<TabsContent
						value="tax"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Créditos fiscales de prima
						</div>
						<span>
							Los créditos fiscales de prima: son un tipo de asistencia
							económica que ayuda a reducir tu prima mensual para un plan de
							Obamacare. El monto de tu crédito fiscal premium depende de los
							ingresos de tu hogar, el tamaño de tu familia y el costo de los
							planes de salud en tu área. Puedes elegir recibir tu crédito
							fiscal de prima por adelantado para reducir tus pagos mensuales de
							prima, o reclamarlo al presentar tu declaración de impuestos
							federales.
						</span>
						<span>
							Para calificar para los créditos fiscales de prima, debes cumplir
							con los siguientes criterios:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Tener un ingreso del hogar entre el 100% y el 400% del Nivel
								Federal de Pobreza ($13,590-$54,360 para un individuo o
								$27,750-$111,000 para una familia de cuatro personas en 2023).
							</li>
							<li className="ml-6">
								No ser elegible para otra cobertura de salud asequible, como
								seguro patrocinado por el empleador, Medicare, Medicaid o CHIP.
							</li>
							<li className="ml-6">
								Inscribirte en un plan de salud a través del Mercado.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="csrs"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>SUBSIDIOS PARA REDUCCIÓN&nbps;</span>
							<span>DEL COSTO COMPARTIDO</span>
						</div>
						<span>
							Los subsidios para reducción del costo compartido son otro tipo de
							ayuda económica que ayudan a disminuir los costos de tu plan de
							Obamacare que debes pagar de tu bolsillo. Estos subsidios reducen
							tus deducibles, copagos, coseguros y límites máximos de gastos. El
							monto de tu subsidio de reducción de costos depende de tus
							ingresos familiares y del tipo de plan que elijas.
						</span>
						<ul className="list-disc">
							<span>
								Para calificar para los subsidios para reducción del costo
								compartidos, debes cumplir con los siguientes criterios:
							</span>
							<li className="ml-6">
								Tienes un ingreso familiar entre el 100% y el 250% del Nivel
								Federal de Pobreza (13,590 USD a 33,975 USD para una persona o
								27,750 USD a 69,375 USD para una familia de cuatro en 2023).
							</li>
							<li className="ml-6">
								Te inscribes en un plan de plata a través del Mercado.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="medicaid"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>EXPANSION DE&nbsp;</span>
							<span>MEDICAID Y CHIP</span>
						</div>
						<span>
							Medicaid es un programa conjunto federal-estatal que brinda
							cobertura de salud a personas de bajos ingresos, niños, mujeres
							embarazadas, personas mayores y personas con discapacidades. CHIP
							es un programa similar que cubre a niños y algunas mujeres
							embarazadas que tienen ingresos ligeramente más altos que
							Medicaid. Ambos programas son administrados por los estados
							siguiendo pautas federales y ofrecen beneficios integrales a bajo
							o ningún costo para los inscritos.
						</span>
						<span>
							La ACA amplió la elegibilidad de Medicaid a casi todos los adultos
							con ingresos de hasta el 138% del Nivel Federal de Pobreza (18,754
							dólares para un individuo o 38,295 dólares para una familia de
							cuatro en 2023). Sin embargo, la Corte Suprema dictaminó que los
							estados podían elegir si adoptar o no la expansión. Hasta enero de
							2023, 41 estados (incluido DC) han adoptado la expansión de
							Medicaid y 10 estados no lo han hecho. El gobierno federal paga el
							90% del costo de cubrir a la población de expansión.
						</span>
						<span>
							Algunos estados que no han adoptado la expansión de Medicaid han
							seguido enfoques alternativos para ampliar la cobertura a adultos
							de bajos ingresos, como las exenciones de la Sección 1115 que
							imponen requisitos de trabajo, primas, copagos u otras condiciones
							de elegibilidad o beneficios. Sin embargo, estas exenciones han
							enfrentado desafíos legales y han sido retiradas por la CMS bajo
							la Administración Biden.
						</span>
						<span>
							El ARPA incluyó un incentivo fiscal de dos años para que los
							estados no expansores adopten la expansión de Medicaid, aumentando
							su tasa regular de coincidencia federal en 5 puntos porcentuales
							durante dos años. Hasta ahora, solo Carolina del Norte ha aceptado
							esta oferta y aprobó la expansión de Medicaid en marzo de 2023,
							con cobertura esperada a partir de julio de 2023. Otros estados no
							expansores pueden considerar adoptar la expansión en 2023 mediante
							acciones legislativas o iniciativas electorales.
						</span>
					</TabsContent>
					<TabsContent
						value="guide"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Guía de Obamacare
						</div>
						<span className="text-2xl font-bold">Cómo comparar planes</span>
						<ul className="list-disc">
							<span>
								Al elegir un plan de Obamacare, debes considerar varios
								factores, como:
							</span>
							<li className="ml-6">
								La prima mensual: Esta es la cantidad que pagas cada mes por tu
								plan de salud, independientemente de cuánto cuidado de salud
								utilices. Puede que califiques para créditos fiscales para
								reducir esta cantidad.
							</li>
							<li className="ml-6">
								El deducible: Esta es la cantidad que pagas de tu bolsillo antes
								de que tu plan de salud comience a pagar por los servicios
								cubiertos. Por lo general, los planes con primas más bajas
								tienen deducibles más altos y viceversa.
							</li>
							<li className="ml-6">
								El copago: Esta es una cantidad fija que pagas por un servicio
								cubierto, como una visita al médico o un medicamento recetado.
								Los copagos varían según el plan y el tipo de servicio.
							</li>
							<li className="ml-6">
								El coaseguro: Este es un porcentaje del costo de un servicio
								cubierto que pagas después de alcanzar tu deducible. Por
								ejemplo, si tu coaseguro es del 20%, pagas el 20% del costo y tu
								plan paga el 80%.
							</li>
							<li className="ml-6">
								El máximo de gastos de tu bolsillo: Esta es la cantidad máxima
								que debes pagar por servicios cubiertos en un año. Después de
								alcanzar este límite, tu plan paga el 100% del costo de los
								servicios cubiertos. El máximo de gastos de tu bolsillo incluye
								tu deducible, copagos y coseguro, pero no las primas.
							</li>
							<li className="ml-6">
								La red: Este es el grupo de proveedores (médicos, hospitales,
								farmacias, etc.) con los que tu plan tiene contratos para
								brindar servicios a tarifas más bajas. Es posible que pagues más
								o no recibas cobertura si acudes a un proveedor fuera de tu red.
							</li>
							<li className="ml-6">
								Los beneficios: Estos son los servicios que tu plan cubre. Todos
								los planes de Obamacare deben cubrir beneficios de salud
								esenciales y servicios preventivos sin costo para ti. Algunos
								planes también pueden ofrecer beneficios adicionales, como
								odontología, visión o programas de bienestar.
							</li>
						</ul>
						<span className="text-2xl font-bold">
							Cómo obtener ayuda con la inscripción
						</span>
						<ul className="list-disc">
							<span>
								Si necesitas ayuda para inscribirte en un plan de Obamacare,
								tienes varias opciones:
							</span>
							<li className="ml-6">
								Puedes contactar a tu agente de seguros en LEA insurance Agency
								(888) 695 4221
							</li>
							<li className="ml-6">
								Puedes llamar al Centro de Llamadas del Mercado al
								1-800-318-2596 (TTY: 1-855-889-4325) y hablar con un
								representante capacitado que puede responder tus preguntas y
								ayudarte a inscribirte por teléfono.
							</li>
							<li className="ml-6">
								Puedes visitar HealthCare.gov/find-assistance/ y buscar por
								ciudad, estado o código postal para encontrar ayudantes locales
								en tu comunidad que pueden brindar asistencia gratuita en
								persona con la inscripción. Estos ayudantes incluyen
								navegadores, consejeros de solicitudes certificados, agentes,
								corredores y otras organizaciones.
							</li>
							<li className="ml-6">
								Puedes usar HealthCare.gov/see-plans/ para ver los planes y
								precios disponibles en tu área antes de solicitar. También
								puedes usar HealthCare.gov/local-help/ para encontrar ayudantes
								locales en tu comunidad que pueden brindar asistencia gratuita
								en persona con la inscripción.
							</li>
						</ul>
						<span className="text-2xl font-bold">
							Cómo Informar Cambios en los Ingresos o el Tamaño del Hogar
						</span>
						<span>
							Es importante informar cualquier cambio en tus ingresos o tamaño
							del hogar al Mercado tan pronto como sea posible. Estos cambios
							pueden afectar tu elegibilidad para los planes de Obamacare y la
							asistencia económica, así como tu responsabilidad tributaria. Por
							ejemplo, si tus ingresos aumentan, es posible que califiques para
							menos crédito tributario de prima y debas dinero al presentar tus
							impuestos. Si tus ingresos disminuyen, es posible que califiques
							para más crédito tributario de prima y obtengas un reembolso al
							presentar tus impuestos. Si tienes un bebé, te casas o te
							divorcias, es posible que necesites cambiar tu plan de salud o
							inscribirte en uno nuevo.
						</span>
						<span>
							Puedes informar los cambios en tus ingresos o tamaño del hogar en
							línea, por teléfono o por correo. También puedes usar la
							aplicación del Mercado para actualizar tu información. Deberás
							proporcionar pruebas de los cambios, como recibos de pago,
							declaraciones de impuestos, certificados de nacimiento o
							certificados de matrimonio.
						</span>
					</TabsContent>
					<TabsContent
						value="additional"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Beneficios adicionales
						</div>
						<span>
							Algunos planes de Obamacare pueden ofrecer beneficios adicionales
							que no son requeridos por ley, pero que pueden mejorar tu salud y
							bienestar. Estos beneficios pueden incluir:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Cobertura dental: Este beneficio cubre servicios dentales
								preventivos, básicos y mayores, como exámenes, limpiezas,
								empastes, coronas e implantes. Algunos planes también pueden
								cubrir ortodoncia para niños menores de 19 años.
							</li>
							<li className="ml-6">
								Cobertura de la visión: Este beneficio cubre exámenes oculares,
								gafas y lentes de contacto. Algunos planes también pueden cubrir
								cirugías oculares, como LASIK o extracción de cataratas.
							</li>
							<li className="ml-6">
								Programas de bienestar: Estos programas ofrecen incentivos o
								recompensas por participar en actividades saludables, como
								ejercicio, asesoramiento nutricional, cesación del tabaquismo o
								manejo del estrés.
							</li>
							<li className="ml-6">
								Servicios de telemedicina: Estos servicios te permiten acceder a
								proveedores de atención médica de forma remota a través del
								teléfono, video o plataformas en línea. Puedes utilizar los
								servicios de telemedicina para atención primaria, atención de
								urgencia, atención de salud mental o atención especializada.
							</li>
							<li className="ml-6">
								Beneficios COVID-19: Algunos planes pueden ofrecer beneficios
								adicionales relacionados con la pandemia de COVID-19, como
								pruebas, tratamiento y vacunación gratuitos; eliminación de
								costos compartidos para servicios de telemedicina; periodos de
								gracia extendidos para el pago de primas; o entrega a domicilio
								de medicamentos recetados.
							</li>
						</ul>
						<span>
							Esperamos que esta información sea útil y te ayude a encontrar el
							plan de salud adecuado para ti.
						</span>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
