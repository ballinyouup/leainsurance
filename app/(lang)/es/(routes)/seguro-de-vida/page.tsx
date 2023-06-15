import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";
import { metadata as meta } from "../../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Seguro De Vida",
	...meta,
};
export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span>SEGURO</span>
						<span>DE VIDA</span>
					</div>
					<Image
						alt="Life Insurance Image"
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
						<TabsTrigger value="overview" className="flex flex-wrap">
							<span>DESCRIPCIÓN GENERAL&nbsp;</span>
							<span>DEL SEGURO DE VIDA</span>
						</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Elegibilidad e &nbsp;</span>
							<span>Inscripción</span>
						</TabsTrigger>
						<TabsTrigger value="term" className="flex flex-wrap">
							<span>Seguro De Vida&nbsp;</span>
							<span>A Termino</span>
						</TabsTrigger>
						<TabsTrigger value="permanent" className="flex flex-wrap">
							<span>Seguro de Vida&nbsp;</span>
							<span>Permanente</span>
						</TabsTrigger>
						<TabsTrigger value="whole" className="flex flex-wrap">
							<span>Seguro De Vida&nbsp;</span>
							<span>Entera</span>
						</TabsTrigger>
						<TabsTrigger value="universal" className="flex flex-wrap">
							<span>Seguro De Vida&nbsp;</span>
							<span>Universal</span>
						</TabsTrigger>
						<TabsTrigger value="variable" className="flex flex-wrap">
							<span>Seguro De Vida&nbsp;</span>
							<span>Variable</span>
						</TabsTrigger>
						<TabsTrigger value="indexed" className="flex flex-wrap">
							<span>Seguro De Vida&nbsp;</span>
							<span>Indexado</span>
						</TabsTrigger>
						<TabsTrigger value="howto">Cómo</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="flex flex-wrap pb-2 text-4xl font-bold sm:text-5xl">
								<span>DESCRIPCIÓN GENERAL&nbsp;</span>
								<span>DEL SEGURO DE VIDA</span>
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
							<li className="ml-6">Jubilarse o llegar a cierta edad</li>
							<li className="ml-6">Mudarse a otro estado o país.</li>
							<li className="ml-6">
								Desarrollar una condición de salud o quedar discapacitado.
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
						value="term"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							SEGURO DE VIDA A TÉRMINO
						</div>
						<span>
							El seguro de vida a término está diseñado para durar un cierto
							número de años y luego finalizar. Tú eliges el plazo al contratar
							la póliza. Los plazos comunes son 10, 20 o 30 años. El seguro de
							vida a término suele ser el tipo de seguro de vida más económico
							porque solo paga un beneficio por fallecimiento si mueres dentro
							del plazo. No genera valor en efectivo ni paga dividendos.
						</span>
						<span>
							El seguro de vida a término es una buena opción si deseas cubrir
							una obligación financiera específica, como una hipoteca, un
							préstamo o la educación de un hijo. También puede proporcionar
							reemplazo de ingresos para tus dependientes durante tus años
							laborales. Sin embargo, el seguro de vida a término tiene algunas
							desventajas. Si sobrevives al plazo, tu cobertura terminará y
							deberás renovarla a una tarifa más alta o comprar una nueva
							póliza. Además, el seguro de vida a término no ofrece flexibilidad
							ni beneficios adicionales más allá del beneficio por
							fallecimiento.
						</span>
						<span>
							Algunas pólizas de seguro de vida a término pueden permitirte
							convertirlas en pólizas permanentes sin tener que someterte a un
							examen médico o proporcionar pruebas de asegurabilidad. Esto puede
							ser útil si tu situación de salud o financiera cambia y deseas
							mantener tu cobertura. Busca una póliza de plazo convertible si
							esto es importante para ti.
						</span>
					</TabsContent>
					<TabsContent
						value="permanent"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Seguro de Vida Permanente
						</div>
						<span>
							El seguro de vida permanente se mantiene vigente durante toda tu
							vida a menos que dejes de pagar las primas o cedas la póliza. Es
							más costoso que el seguro de vida a plazo porque ofrece cobertura
							de por vida y acumula valor en efectivo con el tiempo. El valor en
							efectivo es una parte de tu prima que se acumula en una cuenta
							diferida de impuestos dentro de tu póliza. Puedes acceder a tu
							valor en efectivo a través de préstamos o retiros para cualquier
							propósito, como ingresos para la jubilación, gastos educativos o
							emergencias.
						</span>
						<span>
							El seguro de vida permanente también paga dividendos a los
							asegurados basados en el desempeño y la rentabilidad de la
							compañía. Los dividendos no están garantizados, pero se pueden
							utilizar para aumentar el beneficio por fallecimiento, reducir tus
							primas o agregar más valor en efectivo a tu póliza.
						</span>
						<span>
							El seguro de vida permanente es una buena opción si deseas dejar
							un legado para tus herederos, complementar tus ingresos de
							jubilación o proteger tu patrimonio de impuestos. También puede
							proporcionar otros beneficios, como beneficios de fallecimiento
							acelerados, que te permiten recibir una parte de tu beneficio por
							fallecimiento antes de morir si te diagnostican una enfermedad
							terminal o necesitas atención a largo plazo.
						</span>
						<span>
							Existen diferentes tipos de seguros de vida permanentes, como el
							seguro de vida entera, el seguro de vida universal, el seguro de
							vida variable y el seguro de vida universal indexado. Cada tipo
							tiene sus propias características y riesgos que debes entender
							antes de comprar.
						</span>
					</TabsContent>
					<TabsContent
						value="whole"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex w-full flex-col gap-4">
							<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
								Seguro de Vida Entera
							</div>
							<span>
								Seguro de vida entera es el tipo más simple y tradicional de
								seguro de vida permanente. Ofrece un beneficio por fallecimiento
								garantizado, una prima fija y una tasa de crecimiento de valor
								en efectivo garantizada. El seguro de vida entera es adecuado
								para personas que desean una cobertura predecible y estable con
								riesgo mínimo.
							</span>
							<span>
								Algunas de las ventajas del seguro de vida entera son:
							</span>
							<ul className="list-disc">
								<li className="ml-6">
									Dura toda la vida y no vence siempre que pagues tus primas.
								</li>
								<li className="ml-6">
									Genera un valor en efectivo diferido de impuestos que se puede
									tomar prestado o retirar para cualquier propósito.
								</li>
								<li className="ml-6">
									Paga dividendos a los asegurados basados en el rendimiento y
									la rentabilidad de la compañía.
								</li>
								<li className="ml-6">
									Puede ser útil para fines de planificación patrimonial, como
									la creación de un fideicomiso o financiamiento de donaciones
									benéficas.
								</li>
							</ul>
							<span>
								Algunas de las desventajas del seguro de vida entera son:
							</span>
							<ul className="list-disc">
								<li className="ml-6">
									Es más costoso que el seguro de vida a término y puede no ser
									asequible para algunas personas.
								</li>
								<li className="ml-6">
									Tiene retornos más bajos que otros tipos de seguros de vida
									permanentes o inversiones.
								</li>
								<li className="ml-6">
									Tiene menos flexibilidad que otros tipos de seguros de vida
									permanentes y puede no adaptarse a necesidades o preferencias
									cambiantes.
								</li>
								<li className="ml-6">
									Puede tener cargos por cancelación o penalidades si cancelas o
									retiras tu póliza antes de cierto período.
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent
						value="universal"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col gap-4 text-lg">
							<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
								Seguro de Vida Universal
							</div>
							<span>
								Seguro de vida universal es un tipo de seguro de vida permanente
								más flexible que te permite ajustar tu prima y el monto del
								beneficio por fallecimiento dentro de ciertos límites. El seguro
								de vida universal también tiene una cuenta de valor en efectivo
								que genera intereses y varía según las tasas del mercado actual.
								El seguro de vida universal es adecuado para personas que desean
								tener más control sobre su cobertura y acumulación de valor en
								efectivo.
							</span>
							<span>Algunas ventajas del seguro de vida universal son:</span>
							<ul className="list-disc">
								<li className="ml-6">
									Te permite aumentar o disminuir tu prima y el monto del
									beneficio por fallecimiento según tus necesidades y
									presupuesto.
								</li>
								<li className="ml-6">
									Tiene un mayor potencial de crecimiento del valor en efectivo
									que el seguro de vida entera, según el rendimiento del
									mercado.
								</li>
								<li className="ml-6">
									Ofrece ventajas fiscales, como el crecimiento del valor en
									efectivo diferido de impuestos y préstamos y retiros libres de
									impuestos.
								</li>
								<li className="ml-6">
									Proporciona otros beneficios, como beneficios por
									fallecimiento acelerados, que te permiten recibir una parte de
									tu beneficio por fallecimiento antes de fallecer si te
									diagnostican una enfermedad terminal o necesitas atención a
									largo plazo.
								</li>
							</ul>
							<span>Algunas desventajas del seguro de vida universal son:</span>
							<ul className="list-disc">
								<li className="ml-6">
									Tiene tarifas y cargos más altos que el seguro de vida entera,
									como costos administrativos, cargos de mortalidad y cargos por
									cancelación.
								</li>
								<li className="ml-6">
									No ofrece garantías sobre el monto de tu prima o los
									rendimientos del mercado, lo que significa que puedes tener
									que pagar más o recibir menos de lo esperado.
								</li>
								<li className="ml-6">
									Tiene más riesgo que el seguro de vida entera, ya que el valor
									en efectivo puede disminuir o incluso desaparecer si el
									mercado tiene un mal desempeño o si no realizas los pagos.
								</li>
								<li className="ml-6">
									Requiere una gestión y monitoreo más activos que el seguro de
									vida entera, ya que debes ajustar tu prima y el monto del
									beneficio por fallecimiento según tus necesidades cambiantes y
									las condiciones del mercado.
								</li>
							</ul>
						</div>
					</TabsContent>
					<TabsContent
						value="variable"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Seguro de Vida Variable
						</div>
						<span>
							Seguro de vida variable es un tipo de seguro de vida permanente
							que te permite invertir el valor en efectivo en diferentes
							subcuentas similares a fondos mutuos. El seguro de vida variable
							ofrece el potencial de obtener mayores rendimientos, pero también
							conlleva mayores riesgos que otros tipos de seguros de vida
							permanentes. Puedes perder dinero si las subcuentas tienen un
							rendimiento deficiente. Además, el seguro de vida variable tiene
							tarifas y cargos más altos que otros tipos de seguros de vida
							permanentes. El seguro de vida variable es adecuado para personas
							dispuestas a asumir más riesgos y que poseen más conocimientos en
							inversiones.
						</span>
						<span>Algunas ventajas del seguro de vida variable son:</span>
						<ul className="list-disc">
							<li className="ml-6">
								Te brinda mayor control sobre cómo se invierte el valor en
								efectivo, ofreciéndote una cartera de subcuentas para elegir.
							</li>
							<li className="ml-6">
								Tiene un mayor potencial de crecimiento del valor en efectivo
								que otros tipos de seguros de vida permanentes, dependiendo del
								rendimiento de las subcuentas.
							</li>
							<li className="ml-6">
								Ofrece ventajas fiscales, como el crecimiento del valor en
								efectivo diferido de impuestos y transferencias libres de
								impuestos entre subcuentas.
							</li>
							<li className="ml-6">
								Proporciona un beneficio de fallecimiento garantizado mínimo,
								independientemente del rendimiento de las subcuentas.
							</li>
						</ul>
						<span>Algunas desventajas del seguro de vida variable son:</span>
						<ul className="list-disc">
							<li className="ml-6">
								Tiene tarifas y cargos más altos que otros tipos de seguros de
								vida permanentes, como costos administrativos, cargos por
								mortalidad, cargos por cancelación y tarifas de gestión de
								inversiones.
							</li>
							<li className="ml-6">
								No garantiza el monto de tu prima o los rendimientos del
								mercado, lo que significa que puedes tener que pagar más o
								recibir menos de lo esperado.
							</li>
							<li className="ml-6">
								Tiene más riesgo que otros tipos de seguros de vida permanentes,
								ya que el valor en efectivo puede disminuir o incluso
								desaparecer si las subcuentas tienen un rendimiento deficiente.
							</li>
							<li className="ml-6">
								Requiere una gestión y monitoreo más activos que otros tipos de
								seguros de vida permanentes.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="indexed"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Seguro De Vida Indexado
						</div>
						<span>
							Seguro de vida indexado es un tipo de seguro de vida permanente
							más flexible que te permite ajustar tu prima y el monto del
							beneficio por fallecimiento dentro de ciertos límites. El seguro
							de vida indexado también cuenta con una cuenta de valor en
							efectivo que gana intereses basados en el desempeño de un índice
							de acciones o bonos, como el S&P 500 o el Nasdaq-100. El seguro de
							vida indexado ofrece el potencial de obtener mayores rendimientos
							que otros tipos de seguros de vida permanentes, pero también tiene
							una tasa de rendimiento mínima garantizada para protegerte de
							pérdidas en el mercado.
						</span>
						<span>
							El seguro de vida indexado es adecuado para personas que desean
							beneficiarse de las ganancias del mercado sin invertir
							directamente en él. También puede proporcionar ventajas fiscales,
							como el crecimiento del valor en efectivo diferido de impuestos y
							préstamos y retiros libres de impuestos. Sin embargo, el seguro de
							vida indexado también tiene algunas desventajas. Tiene límites en
							los rendimientos que limitan tu potencial de ganancias. También
							tiene tarifas y cargos más altos que otros tipos de seguros de
							vida permanentes. Y no garantiza el monto de tu prima o los
							rendimientos del mercado.
						</span>
					</TabsContent>
					<TabsContent
						value="howto"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col flex-wrap pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>CÓMO ELEGIR UNA PÓLIZA&nbsp;</span>
							<span>DE SEGURO DE VIDA</span>
						</div>
						<span>
							Elegir una póliza de seguro de vida depende de tus metas
							personales y financieras, tu presupuesto y tu tolerancia al
							riesgo. Aquí tienes algunas preguntas que debes hacerte antes de
							comprar una póliza de seguro de vida:
						</span>
						<ul className="flex list-disc flex-col gap-4">
							<li className="ml-6">
								¿Cuánta cobertura necesito? La cantidad de cobertura que
								necesitas depende de diversos factores, como tus ingresos, tus
								deudas, tus gastos y las necesidades de tus dependientes. Una
								regla general común es multiplicar tus ingresos anuales por 10 o
								15, pero tal vez quieras utilizar una calculadora de seguro de
								vida o consultar con un planificador financiero para obtener una
								estimación más precisa.
							</li>
							<li className="ml-6">
								¿Por cuánto tiempo necesito cobertura? El tiempo de cobertura
								que necesitas depende de cuánto tiempo deseas proporcionar apoyo
								financiero a tus beneficiarios. Por ejemplo, si tienes hijos
								pequeños o una hipoteca, es posible que desees un plazo más
								largo que si tienes hijos adultos o no tienes deudas. El seguro
								de vida a término ofrece cobertura por un período específico,
								como 10, 20 o 30 años, mientras que el seguro de vida permanente
								ofrece cobertura durante toda tu vida.
							</li>
							<li className="ml-6">
								¿Cuánto puedo permitirme pagar en primas? La cantidad de primas
								que pagas depende del tipo y la cantidad de cobertura que
								elijas, así como de tu edad, salud y estilo de vida. El seguro
								de vida a término suele tener primas más bajas que el seguro de
								vida permanente, pero tampoco tiene valor en efectivo ni otros
								beneficios. El seguro de vida permanente tiene primas más altas
								que el seguro de vida a término, pero también acumula valor en
								efectivo y paga dividendos. Puede que desees comparar
								cotizaciones de diferentes aseguradoras y encontrar una póliza
								que se ajuste a tu presupuesto.
							</li>
							<li className="ml-6">
								¿Quiero acumular valor en efectivo o simplemente tener un
								beneficio por fallecimiento? El componente de valor en efectivo
								del seguro de vida permanente puede ser una herramienta útil de
								ahorro o inversión que te ayude a alcanzar diversas metas
								financieras, como ingresos para la jubilación, gastos de
								educación o emergencias. Sin embargo, también conlleva costos y
								riesgos más altos que el seguro de vida a término. Si solo
								deseas proporcionar un beneficio por fallecimiento a tus
								beneficiarios y no necesitas ningún beneficio adicional, el
								seguro de vida a término puede ser una mejor opción para ti.
							</li>
							<li className="ml-6">
								¿Quiero participar en el mercado o tener una tasa de rendimiento
								garantizada? Algunos tipos de seguro de vida permanente te
								permiten invertir el valor en efectivo en diversas subcuentas
								similares a fondos mutuos, como el seguro de vida variable o el
								seguro de vida universal indexado. Estos tipos de pólizas
								ofrecen el potencial de mayores rendimientos, pero también
								mayores riesgos que otros tipos de seguro de vida permanente.
								Puedes perder dinero si las subcuentas tienen un mal desempeño.
								Si prefieres un enfoque más conservador, es posible que desees
								elegir un tipo de seguro de vida permanente que ofrezca una tasa
								de rendimiento garantizada, como el seguro de vida entera o el
								seguro de vida universal.
							</li>
							<li className="ml-6">
								¿Quiero tener flexibilidad o estabilidad en mi póliza? Algunos
								tipos de seguro de vida permanente te permiten ajustar tu prima
								y la cantidad del beneficio por fallecimiento dentro de ciertos
								límites, como el seguro de vida universal o el seguro de vida
								universal indexado. Estos tipos de pólizas ofrecen más
								flexibilidad que otros tipos de seguro de vida permanente, pero
								también requieren una gestión y supervisión más activas. Si
								prefieres una póliza más estable y predecible, es posible que
								desees elegir un tipo de seguro de vida permanente con prima
								fija y cantidad del beneficio por fallecimiento fija, como el
								seguro de vida entera o el seguro de vida variable.
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
