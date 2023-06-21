/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import urlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
const client = createClient({
	projectId: "be20oshw",
	dataset: "production",
	apiVersion: "2023-06-05",
	useCdn: false,
});

const ImageComponent = ({ value }: { value: SanityImageSource }) => {
	return (
		<img
			src={urlBuilder(client)
				.image(value)
				.width(200)
				.height(200)
				.fit("max")
				.auto("format")
				.url()}
			loading="lazy"
			alt="image"
			height={200}
			width={200}
		/>
	);
};
interface Event {
	_id: string;
	title: string;
	description: string;
	image: {
		_type: string;
		asset: {
			_type: string;
			_ref: string;
		};
	};
}

// function wait(ms: number) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Events() {
	// await wait(5000);

	const events = await client.fetch(
		`*[_type == "events"]{image, title, description, _id}`
	);

	return (
		<>
			<span className="self-center text-5xl font-bold">EVENTS</span>
			<div className="flex h-full w-full flex-col items-center p-5 text-white">
				{events.map((event: Event) => {
					return (
						<div
							className={`flex w-full max-w-5xl gap-4 border border-white bg-accent p-2 transition-transform hover:scale-[98%]`}
							key={event._id}
						>
							<ImageComponent value={event.image} />
							<div className="flex flex-col text-ellipsis">
								<h1 className="font-bold">{event.title}</h1>
								<span className="line-clamp-3 h-full">{event.description}</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}


