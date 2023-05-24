import Image from "next/image";
import Partners from "./home-partners";
interface IWhyCard {
	alt: string;
	src: string;
	title: string;
	text: string;
	ImageSrc: string;
	ImageAlt: string;
	inverted?: boolean;
}

const WhyCard: React.FC<IWhyCard> = ({
	alt,
	src,
	title,
	text,
	ImageSrc,
	ImageAlt,
	inverted = false,
}) => {
	return (
		<div className="z-20 flex h-full w-full items-center justify-center p-5">
			<div
				className={`mt-8 flex w-full max-w-7xl flex-col gap-2 self-center rounded-lg border border-primary p-8 md:flex-row ${
					inverted ? "bg-accent text-white md:flex-row-reverse" : "text-primary"
				}`}
			>
				<div
					className={`flex w-full flex-col items-start justify-center gap-8 rounded-lg p-2 sm:p-8 md:w-1/2`}
				>
					<div
						className={`w-fit rounded-lg border border-primary ${
							inverted ? "bg-accent-foreground" : "bg-accent"
						} p-2`}
					>
						<Image
							className={inverted ? "" : "invert"}
							alt={alt}
							width={24}
							height={24}
							src={src}
						/>
					</div>
					<div className="flex max-w-lg flex-col">
						<span className="text-3xl font-bold">{title}</span>
						<span className="text-xl">{text}</span>
					</div>
				</div>
				<div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-96 md:w-1/2">
					<Image
						src={ImageSrc}
						alt={ImageAlt}
						height={5000}
						width={3333}
						className={
							inverted
								? "absolute -top-40 rounded-lg"
								: "absolute rounded-lg object-fill"
						}
					/>
				</div>
			</div>
		</div>
	);
};

const WhySection = () => {
	return (
		<section className="z-10 flex w-full flex-col items-center justify-center gap-6 bg-background lg:items-start">
			<WhyCard
				alt={"Heart Icon"}
				src={
					"data:image/png;base64,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"
				}
				title={"Servicio personalizado"}
				text={
					"En L.E.A Insurance, comenzamos cada relación con una conversación. Nuestros asesores lo conocen a usted y sus necesidades de atención médica y luego recomiendan el mejor plan para usted."
				}
				ImageSrc={"/why1image.jpg"}
				ImageAlt={"hombre negro sonriente"}
			/>
			<WhyCard
				alt={"Trust Icon"}
				src={
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2cS4hcRRSGv2giRFHjI1FiNOBroQsFlWxcGQOCixgUNQgy8ZGdCEIMBKQj7sRHTEDiLuJCUERNghtdiIrKLHxFZ3R8RkEZiXGMGB1nnCsFp7Ftevqeun0fdavOB2fTUKdO/adudb3uBcMwDMMwDMMwjHZxLrAV2A9MADPAceAw8CawE7jKw9/VwMNS9rD4mhHfrwL3AudU2J7WsArYA8wCmcLeA64f4m8D8L7Sl6vzKWAlibIBOKoUq9+eBZb3+FouvxXx9QuwnsS4G5grKFjXxoHVYuMj+nKxbCGhnj83omBdmxArw9dcCk/CqhGGnTrsCHA2EbMnAJHzbBcRTzVnAxA4z2ZjnaJuVTT+W2AzsAI4HVgHPAb8XEDI74BHgGvE1wrx/Y2i7D1EyH6F+O4/YhCnymLsuFL4MWDZIr5WKpLwChEykdNo1zvzuBR4d5Hyf0uPP1nh57acWD4jQmZyGu2GCA2uZ+/uKzsp2w9aTsuJ5Vci5FhOo9d6+rsD+AvY27cq1nBRTiwu1uj4JKfROwr4XFMwlk5OLB8TIc8oHvuzaojDLbR+y4nFPVXRsV4xg9lXQxzPKeK4jgg5EZhSNH5ThTFsUtQ/JbFGyZhCgKPyJ1k2a2WvJ6/+O4mYpcCnChE+Us7ntbhZ0geKeg9JjFFzLbCgEOOlkoaCE4AXFPUtSGxJsFchiLOnS6irf9GW1MxnMU7xOEh5iOLsUNYxJftNSXGlrGQ1ArlbDL5sUQ51fwJXkChjygTMAxs9/N7ocezpYkiaXR4HJTcp/N2g3LZ29mQN7QuepcABjyTcPMTXRo9h7UAKU06fefpbHsPRoMXSrXImoL3g5SYCRg/u2PBDjyTc1VN2s8eY7xZbZ/RWbPzHauWZbSYznPvk/PYfZZnvgfN76jMGcAnwo0cSNFPNTHw634YCJ9QPSmE19hNwmaZi4/+7l1+XIL67nn5xj1/DgwuAL0cQ311RudCnQmPwue9kAfEnRzgzNvo4E3jHQ/zxlF+8qAp3QHNQIf7rKe5s1sUyObhfTPx9Q64kGiVyf9/ia0Huji4psxJjOLcAf8jmm7slZzTAOjGj5bgkvijvIbgd1a/kvYQoX9QIjQeHbOZN2xNWLTsV09rpIS+OGBWL37VHCXjX8gHgZeBzueGc1WR1ie/sCwJiiRyO+2wNZAElwFf87tWVILgceLth4bMRElBE/O55QuOMeVz3yAJMQFHxnT1Pw2iv+GU12bEaxZ/3/FZR6YwSfFaRHaox/m0Valt58FlF9nhN8buX+RojVPHnZTJQdfyufGOEKn4m9/2rjt/EZ7AwbwAnmfjNDDu7Tfx6Rf9dZjtP2JhfrrAHgfMC+89KasxfE1j8SYmflZwAE79AAl4rKQkmfoutU0IHaKzntN06Jj4mftO9MEut5zu2ByBClqr4KSehQ2CklIQOgZJCEjoETsxJ6NASYlsTLIz4faFGiCUJR4DbaSltTcK0XBTbJt+aaDXbUxhzY0xCp+mgU06Cid9gEkz8BpNg4jeYBBO/wSSY+A2uExq9PWAYhmEYhmEYhkFg/Atb2XdlS3OeLQAAAABJRU5ErkJggg=="
				}
				title={"Tranquilidad de espíritu"}
				text={
					"Puede estar tranquilo sabiendo que L.E.A Insurance estará allí para usted en todas las etapas de la vida. Ya sea que esté formando una familia o haciendo una mudanza, nuestros asesores pueden ayudarlo a ajustar su plan según sea necesario."
				}
				ImageSrc={"/why2image.jpg"}
				ImageAlt={"dos mujeres, abrazar, un, mujer mayor, sonriente"}
				inverted={true}
			/>
			<WhyCard
				alt={"Doctor Icon"}
				src={
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nO2dW4xeUxSAP4bpYKYRZoxLTUI8MXjxQiSoWwlaoU3jVeKB1lBNJK1UPLgkEpeKaxEST0QjLSGCIGn09qakQtQQpIpiRnV0flt2sv5m0qRn7fOfc/6z15n9JStppv/+z1p77evaa58fEolEIpFIJBKJRELnXGAt8AUwCThFqsYp4nXcATwBjGKYXuBpoBVgdEwOcDNkGnhKbDGFV/jDnMbG6AAn8oE1JzzToaGxOsDJMGpmzG810AHTwDkYYG0BI2N2gAMewwBfNtgBn2OAyQY74C8MUHcFz3b9zRvgjOtv3gBnXH/zBjjj+ps3wBnX37wBzrj+qgFHEDcuOSA5oBCpB9RMckDNJAdE7oAjiRtnfRI+oBjQR7zMUXSfwgB/KkYMES+Diu6/Y4DvFCPOJ+7TPJch32CATxUjlhAvNyu6f4QBXlGMeJR4eUTRfR0GuEsxYjvxsk3R/XYMcJFixH/AGcTHSEA2xwUY4CjgD8WQNcTHakXnXw3sYQ7yumLMz8AxxEMf8JOi82sY4kbFGC9jxMOdAfpegyH8jnK3YtBeYLhuRYGTZIOVpesPMrSa4v6AVrW+biWBNwP0vBeDDEkik2ac7/51MRag32/A8RhlTWDS60016HZ9QODQy0oMcyzwbYCR/wALu6jXQnmmptdOmc9Mc6VsvkJ6wvIuDTvTAfr4TdklNITHAwxuyxuyMimb4cAJN+bNYsf46z2bchjvl4XLSur+fTLR783x/PUG0mc6Ouz4OkclePkRWAWc3mFsZ3XADvdQ8TckB2goIzKx5amQ9ni8BXhYYvb+4OQE6Vm98u/z5P98SHlrh9ek/FXa02g4QxKSdpHJFuDEEhqYX0i8Jw1tUmSn/G1Zh725dOYWuMbqKpD3gf4C9swDXgpcXfnPvBhDT/OxlYcK3qh0BcVXxgNATwE7FgETHTzbRwluIAIulrG325W/A7iwhD1FkQbUqjkUc5BeOcrc04WK/0UqrujN90Ul9d5WLD0BWf55R+yqoOJ3yXeXscSc1+GwkzUcnUpke4a863en7CeKrnBm8nIFDSS6jIsFgasKp4iPeF5Vol4jAXq9JXGk40QuBTYoZaalZ0XFLQWdcABYWrJOywsc3qxSyt5BhCyQQ3yXU/wQdnUF+ryrtHyNjRnl3yFSBuUlIJMBFe8/82TJY/5Mvsp4dkj4+rKM8n7HHDWDAQ6oquLbZB2zhuymBzLKp3dRBPB3QQfMVXpv9DhFqmY849l+taMxP6O8T+2PHlezA97OePaGLpRntjtgpfJ8v9Q8HPcpZVdgAFezA3zI4F9Fh42y2ukXma+0/Pb9s5MxgKvZAZ5XA/TIKz68YQIXgQOGcx7ya+IvNp6CEVwEDvBcW1KsqtXlpLTGOMBzW0En+LK3YgwXkQM818khT97K3y29yBwuMge0QyTPAvsC9NsnLzWvOmQyqxyQJ1blP2OaKcXAOrPasuI8XvbTAPYoRp5do26jAeO+ebYqRvqD97q4R9HtMxrACwH5PkUSrTqlJyC/6TkawNKAic7nYMZ432wxDWBAORRxMlFf3kWdrggI0E1IhkQjWBfQ2qYkg6Gn4vzWsYDK9/I8DeKsQKPbc8LdskIpkgHdpl++a0WOnNb9kb6gpNJ3+7iI5EEayNHAJxFUriabmnDVNSsu/30ElXw4GY/kfRiVMhqpE8at/OxVGQwCH0c27DS+5R/KHLlFqQXrqpQpmXBN/exh2Zwp4YqiP6eVRyZknd+4pWbR9foSib9slkhkGb1jSr5rsxzCLG7SDjeRSCQSiUQikUgQHf8Dg+u1DAKQMawAAAAASUVORK5CYII="
				}
				title={"La cantidad correcta de protección"}
				text={
					"Nuestros asesores trabajarán con usted para asegurarse de que siempre tenga la cantidad adecuada de protección. Con L.E.A Insurance puede estar seguro de que está obteniendo la mejor cobertura y el mejor precio disponible."
				}
				ImageSrc={"/why3image.jpg"}
				ImageAlt={"Paciente consultando a un médico"}
			/>
			<Partners />
		</section>
	);
};

export default WhySection;