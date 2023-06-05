/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
const client = createClient({
	projectId: "be20oshw",
	dataset: "production",
	apiVersion: "2023-06-05",
	useCdn: false,
});

const ImageComponent = ({ value }: any) => {
	return (
		<img
			src={urlBuilder(client)
				.image(value)
				.width(400)
				.fit("max")
				.auto("format")
				.url()}
			loading="lazy"
			alt="image"
		/>
	);
};

const components = {
	block: {
		h1: ({ children }: any) => <h1 className="text-4xl">{children}</h1>,
	},
	listItem: {
		bullet: ({ children }: any) => (
			<li className="ml-4 list-disc">{children}</li>
		),
	},
	types: {
		image: ImageComponent,
	},
};

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await client.fetch(`*[slug.current == "${params.slug}"]`);
	return (
		<div className="h-screen w-full p-8">
			{post && <PortableText value={post[0]?.body} components={components} />}
		</div>
	);
}
