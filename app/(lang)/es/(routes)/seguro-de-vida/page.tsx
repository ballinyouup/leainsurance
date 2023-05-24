import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/tabs";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Life Insurance",
	description:
		"En Lea Insurance, entendemos la importancia de la buena salud y la seguridad financiera. Es por eso que ofrecemos una variedad de opciones de seguro, que incluyen Obamacare, Medicare, asistencia funeraria y seguro de vida. Nuestro compromiso con la excelencia en el servicio al cliente significa que puede confiar en nosotros para atender todas sus necesidades de seguros.",
	keywords: [
		"Seguro de vida, Seguro de salud, Servicios de salud, Seguro de vida FL, Seguro de vida Broward, Seguro de vida Miami, Seguro de salud Miami, Seguro de salud Broward",
	],
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
						<TabsTrigger value="overview">Descripción general</TabsTrigger>
						<TabsTrigger value="eligibility" className="flex flex-wrap">
							<span>Elegibilidad e &nbsp;</span>
							<span>Inscripción</span>
						</TabsTrigger>
						<TabsTrigger value="term" className="flex flex-wrap">
							<span>Seguro De Termino&nbsp;</span>
							<span>De vida</span>
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
							<div className="pb-2 text-4xl font-bold sm:text-5xl">
								DESCRIPCIÓN GENERAL
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
						value="term"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Seguro de término de vida
						</div>
						<span>
							El seguro de vida a término está diseñado para durar un cierto
							número de años, luego terminar El plazo lo eliges tú cuando
							contratas la póliza. Común son 10, 20 o 30 años El seguro de vida
							a término suele ser el tipo de seguro de vida más asequible porque
							sólo paga una beneficio por muerte si muere dentro del plazo. No
							genera efectivo valor o pago de dividendos
						</span>
						<span>
							El seguro de vida a término es una buena opción si desea cubrir un
							obligación financiera específica, como una hipoteca, un préstamo o
							una educación del niño. También puede proporcionar un reemplazo de
							ingresos para su dependientes durante sus años de trabajo. Sin
							embargo, el seguro de vida a término tiene algunos inconvenientes.
							Si sobrevive al término, su cobertura terminará y tendrás que
							renovarlo a un precio más alto o comprar uno nuevo política.
							Además, el seguro de vida a término no ofrece ninguna
							flexibilidad. o beneficios adicionales más allá del beneficio por
							muerte
						</span>
						<span>
							Algunas pólizas de seguro de vida a término pueden permitirle
							convertirlas en pólizas permanentes sin tener que someterse a un
							examen médico o proporcionar prueba de asegurabilidad. Esto puede
							ser útil si su cambios en su situación financiera o de salud y
							desea mantener su cobertura. Busque una póliza a término
							convertible si esto es importante A usted
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
							El seguro de vida permanente se mantiene vigente durante toda su
							vida a menos que deje de pagar las primas o cancele la póliza Es
							más caro que el seguro de vida a término porque proporciona
							cobertura de por vida y acumula valor en efectivo con el tiempo.
							El valor en efectivo es un porción de su prima que se acumula en
							una cuenta con impuestos diferidos dentro de su póliza. Puede
							acceder a su valor en efectivo a través de préstamos o retiros
							para cualquier propósito, como ingreso de jubilación, gastos de
							educación, o emergencias
						</span>
						<span>
							El seguro de vida permanente también paga dividendos a los
							asegurados con base en el desempeño y la rentabilidad de la
							empresa. Los dividendos no están garantizados, pero se pueden
							utilizar para aumentar su beneficio por fallecimiento, reducir sus
							primas o agregar más valor en efectivo a su póliza
						</span>
						<span>
							El seguro de vida permanente es una buena opción si desea dejar un
							legado para sus herederos, complementar sus ingresos de
							jubilación, o proteger su patrimonio de los impuestos. También
							puede proporcionar otros beneficios, como los beneficios por
							muerte acelerada, que le permiten recibir una parte de su
							beneficio por muerte antes de morir si está diagnosticado con una
							enfermedad terminal o necesita atención a largo plazo
						</span>
						<span>
							Existen diferentes tipos de seguros de vida permanentes, tales
							como seguro de vida entera, seguro de vida universal, vida
							variable y seguro de vida universal indexado. Cada tipo tiene su
							propias características y riesgos que debe comprender antes de
							comprar.
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
								El seguro de vida entera es el tipo más simple y tradicional. de
								seguro de vida permanente. Proporciona una muerte garantizada.
								beneficio, una prima fija y un crecimiento de valor en efectivo
								garantizado rate El seguro de vida entera es adecuado para
								personas que desean Cobertura predecible y estable con riesgo
								mínimo.
							</span>
							<span>
								Algunas de las ventajas del seguro de vida entera son:
							</span>
							<ul className="list-disc">
								<li className="ml-6">
									Dura toda la vida y no caduca mientras usted paga sus primas
								</li>
								<li className="ml-6">
									Crea un valor en efectivo con impuestos diferidos que se puede
									pedir prestado contra o retirado para cualquier propósito
								</li>
								<li className="ml-6">
									Paga dividendos a los asegurados con base en los rendimiento y
									rentabilidad
								</li>
								<li className="ml-6">
									Puede ser útil para fines de planificación patrimonial, como
									crear un fideicomiso o financiar una donación caritativa
								</li>
							</ul>
							<span>Algunos de los contras del seguro de vida entera son:</span>
							<ul className="list-disc">
								<li className="ml-6">
									Es más caro que el seguro de vida a término y puede que no sea
									asequible para algunas personas
								</li>
								<li className="ml-6">
									Tiene rendimientos más bajos que otros tipos de vida
									permanente. seguros u otras inversiones3.
								</li>
								<li className="ml-6">
									Tiene menos flexibilidad que otros tipos de vida permanente.
									seguro y puede no adaptarse a necesidades o preferencias
									cambiantes
								</li>
								<li className="ml-6">
									Puede tener cargos por rescate o multas si cancela o retirarse
									de su póliza antes de un período determinado
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
								El seguro de vida universal es un tipo de seguro permanente más
								flexible. seguro de vida que te permite ajustar tu prima y
								muerte monto del beneficio dentro de ciertos límites Seguro de
								vida universal también tiene una cuenta de valor en efectivo que
								devenga intereses que varía según las tarifas vigentes en el
								mercado Seguro de vida universal es adecuado para personas que
								desean tener más control sobre su cobertura y acumulación de
								valor en efectivo.
							</span>
							<span>
								Algunas de las ventajas del seguro de vida universal son:
							</span>
							<ul className="list-disc">
								<li className="ml-6">
									Le permite aumentar o reducir su prima y beneficio por
									fallecimiento de acuerdo a tus necesidades y presupuesto
								</li>
								<li className="ml-6">
									Tiene un mayor potencial para el crecimiento del valor en
									efectivo que todo seguro de vida, en función de la evolución
									del mercado
								</li>
								<li className="ml-6">
									Ofrece ventajas fiscales, como valor en efectivo con impuestos
									diferidos crecimiento y préstamos y retiros libres de
									impuestos
								</li>
								<li className="ml-6">
									Proporciona otros beneficios, como la muerte acelerada.
									beneficios, que le permiten recibir una parte de su muerte
									beneficio antes de morir si se le diagnostica una enfermedad
									terminal enfermedad o necesidad de atención a largo plazo
								</li>
							</ul>
							<span>
								Algunas de las desventajas del seguro de vida universal son:
							</span>
							<ul className="list-disc">
								<li className="ml-6">
									Tiene tarifas y cargos más altos que el seguro de vida entera,
									como como costos administrativos, cargos por mortalidad y
									entrega cargos
								</li>
								<li className="ml-6">
									No tiene garantías sobre el monto de su prima o los
									rendimientos del mercado, lo que significa que es posible que
									tenga que pagar más o recibir menos de esperado
								</li>
								<li className="ml-6">
									Tiene más riesgo que el seguro de vida entera, ya que su valor
									en efectivo puede disminuir o incluso desaparecer si el
									mercado funciona mal o si te saltas los pagos
								</li>
								<li className="ml-6">
									Requiere una gestión y un seguimiento más activos que la
									totalidad seguro de vida, ya que tienes que ajustar tu prima y
									muerte Benefíciese de acuerdo con sus necesidades cambiantes y
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
							El seguro de vida variable es un tipo de seguro de vida permanente
							que le permite invertir su valor en efectivo en varias subcuentas
							que son similares a los fondos mutuos El seguro de vida variable
							ofrece la potencial de mayores rendimientos pero también mayores
							riesgos que otros tipos de seguros de vida permanentes. Puede
							perder dinero si el las subcuentas funcionan mal. El seguro de
							vida variable también tiene tarifas y cargos más altos que otros
							tipos de vida permanente El seguro de vida variable es adecuado
							para personas que están dispuestos a asumir más riesgos y tener
							más conocimientos de inversión.
						</span>
						<span>
							Algunas de las ventajas del seguro de vida variable son:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Le da más control sobre cómo se invierte su valor en efectivo,
								ofreciéndote una cartera de subcuentas entre las que elegir
							</li>
							<li className="ml-6">
								Tiene un mayor potencial de crecimiento del valor en efectivo
								que otros tipos de seguro de vida permanente, dependiendo de la
								subcuenta actuación
							</li>
							<li className="ml-6">
								Ofrece ventajas fiscales, como el crecimiento del valor en
								efectivo con impuestos diferidos y transferencias libres de
								impuestos entre subcuentas
							</li>
							<li className="ml-6">
								Proporciona un beneficio por muerte mínimo garantizado,
								independientemente de cómo funcionan sus subcuentas
							</li>
						</ul>
						<span>
							Algunas de las desventajas del seguro de vida variable son:
						</span>
						<ul className="list-disc">
							<li className="ml-6">
								Tiene tarifas y cargos más altos que otros tipos de permanentes
								seguros de vida, tales como costos administrativos, cargos por
								mortalidad, cargos de rescate y tarifas de gestión de
								inversiones
							</li>
							<li className="ml-6">
								No tiene garantías sobre el monto de su prima o los rendimientos
								del mercado, lo que significa que es posible que tenga que pagar
								más o recibir menos de esperado
							</li>
							<li className="ml-6">
								Tiene más riesgo que otros tipos de seguros de vida permanente,
								ya que su valor en efectivo puede disminuir o incluso
								desaparecer si el las subcuentas funcionan mal
							</li>
							<li className="ml-6">
								Requiere una gestión y un seguimiento más activos que otros
								tipos de seguros de vida permanentes.
							</li>
						</ul>
					</TabsContent>
					<TabsContent
						value="indexed"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="pb-2 text-4xl font-bold uppercase sm:text-5xl">
							Seguro indexado
						</div>
						<span>
							El seguro de vida universal indexado es un tipo más flexible de
							seguro de vida permanente que te permite ajustar tu prima y el
							monto del beneficio por muerte dentro de ciertos límites Indexado
							universal el seguro de vida también tiene una cuenta de valor en
							efectivo que gana intereses basado en el rendimiento de un índice
							de acciones o bonos, como el S&P 500 o el seguro de vida universal
							indexado Nasdaq-100 ofrece la potencial de rendimientos más altos
							que otros tipos de vida permanente seguro, sino que también tiene
							una tasa de rendimiento mínima garantizada para protegerlo de las
							pérdidas del mercado
						</span>
						<span>
							El seguro de vida universal indexado es adecuado para personas que
							desean beneficiarse de las ganancias del mercado sin invertir
							directamente en el mercado. También puede proporcionar ventajas
							fiscales, como impuestos diferidos crecimiento del valor en
							efectivo y préstamos y retiros libres de impuestos Sin embargo, El
							seguro de vida universal indexado también tiene algunos
							inconvenientes. Tiene topes en los rendimientos que limitan su
							potencial alcista. También tiene tarifas y cargos más altos que
							otros tipos de vida permanente seguro. Y no garantiza el monto de
							su prima ni el mercado devoluciones
						</span>
					</TabsContent>
					<TabsContent
						value="howto"
						className="col-span-8 flex flex-col gap-4 p-4 text-lg"
					>
						<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
							<span>Cómo</span>
						</div>
						<span>
							La elección de una póliza de seguro de vida depende de sus
							necesidades personales y objetivos financieros, su presupuesto y
							su tolerancia al riesgo. Aquí están algunas preguntas que debes
							hacerte antes de contratar un seguro de vida política:
						</span>
						<ul className="flex list-disc flex-col gap-4">
							<li className="ml-6">
								¿Cuánta cobertura necesito? La cantidad de cobertura que
								necesita depende de varios factores, como sus ingresos, sus
								deudas, sus gastos y las necesidades de sus dependientes. Una
								regla común de pulgar es multiplicar su ingreso anual por 10 o
								15, pero puede quiere usar una calculadora de seguros de vida o
								consultar con un planificador financiero para obtener una
								estimación más precisa.
							</li>
							<li className="ml-6">
								¿Por cuánto tiempo necesito cobertura? La duración de la
								cobertura que necesita depende de cuánto tiempo desee
								proporcionar apoyo financiero para tus beneficiarios. Por
								ejemplo, si tiene niños pequeños o un hipoteca, es posible que
								desee un plazo más largo que si ha crecido hijos o sin deudas.
								El seguro de vida a término ofrece cobertura para un período
								específico, como 10, 20 o 30 años, mientras que permanente El
								seguro de vida ofrece cobertura para toda su vida.
							</li>
							<li className="ml-6">
								¿Cuánto puedo pagar en primas? El monto de las primas lo que
								paga depende del tipo y la cantidad de cobertura que elija, así
								como su edad, salud y estilo de vida. Seguro de término de vida
								típicamente tiene primas más bajas que el seguro de vida
								permanente, pero tampoco tiene valor en efectivo u otros
								beneficios. Vida permanente seguro tiene primas más altas que el
								seguro de vida a término, pero también genera valor en efectivo
								y paga dividendos. Es posible que desee compare cotizaciones de
								diferentes aseguradoras y encuentre una póliza que se ajusta a
								tu presupuesto.
							</li>
							<li className="ml-6">
								¿Quiero acumular valor en efectivo o simplemente tener un
								beneficio por fallecimiento? El componente de valor en efectivo
								del seguro de vida permanente puede ser un herramienta de ahorro
								o inversión que puede ayudarlo a lograr varios objetivos
								financieros, tales como ingresos de jubilación, gastos de
								educación, o emergencias. Sin embargo, también viene con costos
								más altos y riesgos que el seguro de vida a término. Si solo
								desea proporcionar una beneficio por muerte para sus
								beneficiarios y no necesita ningún beneficios adicionales, el
								seguro de vida a término puede ser una mejor opción para ti.
							</li>
							<li className="ml-6">
								¿Quiero participar en el mercado o tener una tarifa garantizada?
								de regreso? Algunos tipos de seguro de vida permanente le
								permiten invertir su valor en efectivo en varias subcuentas que
								son similares a fondos mutuos, como seguros de vida variable o
								indexados seguro de vida universal. Este tipo de pólizas ofrecen
								la potencial de mayores rendimientos pero también mayores
								riesgos que otros tipos de seguros de vida permanentes. Puede
								perder dinero si el las subcuentas funcionan mal. Si prefieres
								un estilo más conservador enfoque, es posible que desee elegir
								un tipo de vida permanente seguro que ofrece una tasa de
								rendimiento garantizada, como seguro de vida o seguro de vida
								universal.
							</li>
							<li className="ml-6">
								¿Quiero tener flexibilidad o estabilidad en mi póliza? Alguno
								tipos de seguros de vida permanentes le permiten ajustar su la
								prima y el monto del beneficio por muerte dentro de ciertos
								límites, como seguro de vida universal o seguro de vida
								universal indexado. Estos tipos de pólizas ofrecen más
								flexibilidad que otros tipos de seguro de vida permanente, pero
								también requieren más activo gestión y seguimiento. Si prefiere
								un lugar más estable y política predecible, es posible que desee
								elegir un tipo de permanente seguro de vida que tiene una prima
								fija y beneficio por muerte cantidad, como un seguro de vida
								entera o un seguro de vida variable.
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
