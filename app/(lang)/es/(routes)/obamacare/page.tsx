import { Metadata } from "next";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "$/tabs";
import Image from "next/image";
export const metadata: Metadata = {
	title: "Obamacare",
	description:
		"En HealthServicesFL.com, entendemos la importancia de la buena salud y la seguridad financiera. Es por eso que ofrecemos una variedad de opciones de seguro, que incluyen Obamacare, Medicare, asistencia funeraria y seguro de vida. Nuestro compromiso con la excelencia en el servicio al cliente significa que puede confiar en nosotros para atender todas sus necesidades de seguros.",
	keywords: [
		"Obamacare, Seguro médico, Servicios de salud, ACA, ACA FL, Obamacare FL, Obamacare Broward, Obamacare Miami, Seguro médico Miami, Seguro médico Broward",
	],
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
						<TabsTrigger value="overview">Descripción general</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Elegibilidad&nbsp;</span>
							<span>e Inscripción</span>
						</TabsTrigger>
						<TabsTrigger value="types">Tipos de Planes</TabsTrigger>
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
							<div className="pb-2 text-4xl font-bold sm:text-5xl">
								OVERVIEW
							</div>
							<span>
								La Ley del Cuidado de Salud a Bajo Precio (ACA), también
								conocida como Obamacare, es una reforma integral de salud
								promulgada en 2010. Su principal El objetivo es hacer que el
								seguro de salud sea más asequible y accesible. para todos los
								estadounidenses, independientemente de su edad, ingresos o
								antecedentes condiciones.
							</span>
							<span>
								Obamacare ofrece varios tipos de asistencia de costos, como
								créditos fiscales para primas, subsidios de reducción de costos
								compartidos, Medicaid expansión, y el Programa de Seguro Médico
								para Niños (CHIP).
							</span>
							<span>
								Obamacare también establece estándares mínimos para los planes
								de salud, como cubriendo beneficios esenciales de salud,
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
								Para ser elegible para Obamacare, debe ser ciudadano
								estadounidense o inmigrante legalmente presente, y no debe ser
								encarcelado.
							</span>
							<span>
								También debe tener un ingreso familiar entre el 100% y el 400%
								de el nivel federal de pobreza (FPL) para calificar para el
								impuesto de prima créditos, o entre el 100% y el 250% del FPL
								para calificar para subsidios para la reducción de costos
								compartidos. Puede verificar su elegibilidad y solicitar
								Obamacare a través del Seguro de Salud Marketplace, que es una
								plataforma en línea donde puedes comparar y comprar planes de
								salud. También puede presentar su solicitud por teléfono, por
								correo, o en persona con la ayuda de un asistente capacitado.
							</span>
							<span>
								El período de inscripción abierta para los planes de salud 2023
								comienza el 1 de noviembre de 2022 y finaliza el 15 de enero de
								2023. Durante este tiempo, puede inscribirse en un nuevo plan o
								cambiar su plan actual.
							</span>
							<span>
								Si no cumple con la fecha límite de inscripción abierta, es
								posible que aún pueda inscribirse en un plan de salud si
								califica para un plan especial período de inscripción debido a
								un evento de la vida, como la pérdida de otros cobertura,
								casarse, tener un bebé o en base a un estimado ingresos del
								hogar. También puede inscribirse en Medicaid o CHIP en cualquier
								tiempo si es elegible.
							</span>
						</p>
					</TabsContent>
					<TabsContent
						value="types"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Tipos de Planes
						</div>
						<p>
							<span>
								Obamacare ofrece cuatro tipos de planes de salud: bronce, plata,
								oro y platino. Estos planes difieren en cuánto cubren y cuánto
								paga de su bolsillo. Generalmente, los planes de bronce tienen
								las primas más bajas pero los deducibles y copagos más altos,
								mientras que los planes platino tienen las primas más altas pero
								las más bajas deducibles y copagos. Los planes Silver son los
								más populares. porque son elegibles para los créditos fiscales
								de prima y subsidios para la reducción de costos compartidos.
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
									Todos los planes de Obamacare también deben cubrir los
									servicios preventivos sin costo para usted, como exámenes de
									detección, inmunizaciones, asesoramiento, y chequeos. Además,
									todos los planes de Obamacare deben cubrir condiciones
									preexistentes sin cobrarle más o negarle tu cobertura.
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
							Los créditos fiscales para primas son un tipo de asistencia de
							costos que ayudan a reducir su prima mensual para un plan
							Obamacare. la cantidad de su El crédito fiscal de la prima depende
							de los ingresos de su hogar, el tamaño de la familia, y el costo
							de los planes de salud en su área. Puedes elegir Reciba su crédito
							fiscal de prima por adelantado para reducir su cuota mensual.
							pagos de primas o reclamarlo cuando presente su impuesto federal
							sobre la renta devolver.
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Tiene un ingreso familiar entre el 100% y el 400% del FPL
								($13,590-$54,360 para un individuo o $27,750-$111,000 para un
								familia de cuatro en 2023).
							</li>
							<li className="ml-6">
								No es elegible para otra cobertura de salud asequible, como como
								seguro patrocinado por el empleador, Medicare, Medicaid o CHIP.
							</li>
							<li className="ml-6">
								Se inscribe en un plan de salud a través del Mercado.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="csrs"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Costos compartidos</span>
							<span>Subsidios de Reducción</span>
						</div>
						<span>
							Los subsidios para la reducción de costos compartidos son otro
							tipo de costo asistencia que ayudan a reducir los gastos de su
							bolsillo para un plan Obamacare. Estos subsidios reducen sus
							deducibles, copagos, coseguro y máximos de bolsillo. La cantidad
							de su subsidio de reducción de costos compartidos depende de su
							hogar ingresos y el tipo de plan que elija.
						</span>
						<ul className="list-disc">
							<span>
								Para calificar para los subsidios de reducción de costos
								compartidos, debe cumplir los siguientes criterios:
							</span>
							<li className="ml-6">
								Tiene un ingreso familiar entre el 100% y el 250% del FPL
								($13,590-$33,975 para una persona o $27,750-$69,375 para una
								familia de cuatro en 2023).
							</li>
							<li className="ml-6">
								Se inscribe en un plan plata a través del Mercado.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="medicaid"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Medicaid Expansión</span>
							<span>& CHIP</span>
						</div>
						<span>
							Medicaid es un programa conjunto federal-estatal que brinda
							servicios de salud cobertura a personas de escasos recursos,
							niños, embarazadas, adultos mayores, y personas con discapacidad.
							CHIP es un programa similar que cubre a los niños y algunas
							mujeres embarazadas que tienen un poco más alto ingresos que
							Medicaid. Ambos programas son administrados por los estados.
							dentro de las pautas federales y ofrecen beneficios integrales en
							poco o ningún costo para los afiliados.
						</span>
						<span>
							La ACA amplió la elegibilidad de Medicaid a casi todos los adultos
							con ingresos de hasta el 138% del FPL ($18,754 para una persona o
							$38,295 para una familia de cuatro en 2023). Sin embargo, la Corte
							Suprema dictaminó que los estados podían elegir si adoptar o no la
							expansión. A partir de enero de 2023, 41 estados (incluido DC) han
							adoptó la expansión de Medicaid y 10 estados no lo han hecho. El
							federal el gobierno paga el 90% del costo de cubrir la expansión
							población.
						</span>
						<span>
							Algunos estados que no han adoptado la expansión de Medicaid han
							buscaron enfoques alternativos para expandir la cobertura a
							personas de bajos ingresos adultos, como las exenciones de la
							Sección 1115 que imponen trabajo requisitos, primas, copagos u
							otras condiciones en elegibilidad o beneficios. Sin embargo, estas
							exenciones se han enfrentado a desafíos y han sido retirados por
							CMS bajo el Biden Administración.
						</span>
						<span>
							El ARPA incluía un incentivo fiscal de dos años para la no
							expansión estados a adoptar la expansión de Medicaid aumentando su
							tasa federal equivalente en 5 puntos porcentuales durante dos
							años. Entonces Hasta ahora, solo Carolina del Norte ha aceptado
							esta oferta y aprobado Expansión de Medicaid en marzo de 2023, y
							se espera que comience la cobertura en julio de 2023. Otros
							estados que no están en expansión pueden considerar la adopción de
							la expansión en 2023 mediante acción legislativa o votación
							iniciativas.
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
								Al elegir un plan de Obamacare, debe considerar varios factores,
								tales como:
							</span>
							<li className="ml-6">
								La prima mensual: Esta es la cantidad que paga cada mes por su
								plan de salud, independientemente de la cantidad de atención
								médica que use. Puede calificar para créditos fiscales de prima
								para reducir esta cantidad.
							</li>
							<li className="ml-6">
								El deducible: Esta es la cantidad que paga de su bolsillo antes
								su plan de salud comienza a pagar por los servicios cubiertos.
								Generalmente, los planes con primas más bajas tienen deducibles
								y vicios más altos viceversa
							</li>
							<li className="ml-6">
								El copago: Esta es una cantidad fija que paga por un servicio,
								como una visita al médico o un medicamento recetado. Los copagos
								varían según el plan y el tipo de servicio.
							</li>
							<li className="ml-6">
								El coseguro: Este es un porcentaje del costo de un seguro
								servicio que usted paga después de alcanzar su deducible. Para
								ejemplo, si su coseguro es del 20 %, usted paga el 20 % del
								costo y su plan paga el 80%.
							</li>
							<li className="ml-6">
								El desembolso máximo: Esto es lo máximo que tiene que pagar
								servicios cubiertos en un año. Después de alcanzar este límite,
								su plan paga el 100% del costo de los servicios cubiertos. El el
								desembolso máximo incluye su deducible, copagos y coseguro, pero
								no sus primas.
							</li>
							<li className="ml-6">
								La red: Este es el grupo de proveedores (médicos, hospitales,
								farmacias, etc.) con las que su plan tiene contrato para
								proporcionar servicios a tarifas más bajas. Puede pagar más o no
								obtener cobertura en todo si acude a un proveedor fuera de su
								red.
							</li>
							<li className="ml-6">
								Los beneficios: Estos son los servicios que cubre su plan. Todo
								Los planes de Obamacare deben cubrir los beneficios esenciales
								de salud y servicios preventivos sin costo para usted. Algunos
								planes también pueden ofrecer beneficios adicionales, como
								servicios dentales, de la vista o de bienestar programas
							</li>
						</ul>
						<span className="text-2xl font-bold">
							Cómo obtener ayuda con la inscripción
						</span>
						<ul className="list-disc">
							<span>
								Si necesita ayuda para inscribirse en un plan de Obamacare,
								tiene Varias opciones:
							</span>
							<li className="ml-6">
								Puede llamar al Centro de llamadas del Mercado al 1-800-318-2596
								(TTY: 1-855-889-4325) y hable con un representante capacitado
								que pueda responder a sus preguntas y ayudarlo a inscribirse por
								teléfono.
							</li>
							<li className="ml-6">
								Puede visitar HealthCare.gov/find-assistance/ y buscar por
								ciudad y estado o código postal para encontrar ayudantes locales
								en su comunidad que puede proporcionar asistencia gratuita en
								persona con la inscripción. Estos los ayudantes incluyen
								navegadores, consejeros de aplicación certificados, agentes,
								corredores y otras organizaciones.
							</li>
							<li className="ml-6">
								Puede usar HealthCare.gov/see-plans/ para ver planes y precios
								disponibles en su área antes de presentar la solicitud. También
								puedes usar HealthCare.gov/local-help/ para encontrar ayudantes
								locales en su comunidad que puede proporcionar asistencia
								gratuita en persona con inscripción.
							</li>
						</ul>
						<span className="text-2xl font-bold">
							Cómo informar cambios en los ingresos o el tamaño del hogar
						</span>
						<span>
							Es importante informar cualquier cambio en sus ingresos o en su
							hogar. size al Marketplace lo antes posible. Estos cambios pueden
							afectar su elegibilidad para los planes de Obamacare y la
							asistencia de costos, así como su responsabilidad fiscal. Por
							ejemplo, si sus ingresos aumenta, puede calificar para un crédito
							fiscal de prima menor y debe dinero cuando presente su declaración
							de impuestos. Si sus ingresos disminuyen, puede calificar para más
							crédito fiscal de prima y obtener un reembolso cuando presente tus
							impuestos Si tiene un bebé, se casa o se divorcia, usted puede
							necesitar cambiar su plan de salud o inscribirse en uno nuevo.
						</span>
						<span>
							Puede informar cambios en sus ingresos o el tamaño de su hogar en
							línea, al teléfono, o por correo. También puede usar la aplicación
							Marketplace para actualizar tu información. Deberá proporcionar
							pruebas de los cambios, tales como talones de pago, declaraciones
							de impuestos, certificados de nacimiento o matrimonio certificados
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
							que no son requerida por la ley, pero puede mejorar su salud y
							bienestar. Estos los beneficios pueden incluir:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Cobertura dental: este beneficio cubre servicios preventivos,
								básicos y servicios dentales importantes, como exámenes,
								limpiezas, empastes, coronas e implantes. Algunos planes también
								pueden cubrir la ortodoncia para niños menores de 19 años.
							</li>
							<li className="ml-6">
								Cobertura de la vista: este beneficio cubre exámenes de la
								vista, anteojos y lentes de contacto. Algunos planes también
								pueden cubrir cirugías oculares, como LASIK o eliminación de
								cataratas.
							</li>
							<li className="ml-6">
								Programas de bienestar: estos programas brindan incentivos o
								recompensas por participar en actividades saludables, como
								ejercicio, asesoramiento sobre nutrición, dejar de fumar o
								controlar el estrés.
							</li>
							<li className="ml-6">
								Servicios de telesalud: estos servicios le permiten acceder a
								servicios de salud proveedores de atención de forma remota por
								teléfono, video o en línea plataformas Puede usar los servicios
								de telesalud para atención primaria, atención de urgencia,
								atención de salud mental o atención especializada.
							</li>
							<li className="ml-6">
								Beneficios de COVID-19: algunos planes pueden ofrecer beneficios
								adicionales relacionados con la pandemia de COVID-19, como
								pruebas gratuitas, tratamiento y vacunación; exención de costos
								compartidos para telesalud servicios; períodos de gracia
								extendidos para pagos de primas; o casa entrega de medicamentos
								recetados.
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
