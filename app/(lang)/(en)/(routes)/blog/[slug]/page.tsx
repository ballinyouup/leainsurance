/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
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
		h1: ({ children }: { children?: React.ReactNode }) => <h1>{children}</h1>,
		h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
		h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
		h4: ({ children }: { children?: React.ReactNode }) => <h4>{children}</h4>,
		h5: ({ children }: { children?: React.ReactNode }) => <h5>{children}</h5>,
		h6: ({ children }: { children?: React.ReactNode }) => <h6>{children}</h6>,
		normal: ({ children }: { children?: React.ReactNode }) => (
			<p className="[&>a]:font-medium [&>a]:text-primary [&>a]:underline">
				{children}
			</p>
		),
	},
	listItem: {
		bullet: ({ children }: { children?: React.ReactNode }) => (
			<li className="ml-4 list-disc">{children}</li>
		),
	},
	types: {
		image: ImageComponent,
		lineBreak: () => <br />,
	},
};

export default async function Page({ params }: { params: { slug: string } }) {
	const post =
		await client.fetch(`*[slug.current == "${params.slug}" && defined(author->name)]{
		"author": author->name,
		  body, title
	  }`);

	return (
		<div className="flex w-full flex-col items-center p-4">
			<div className="flex w-full max-w-5xl flex-col">
				<div className="py-4">
					<h1>{post[0].title}</h1>
					<p className="text-lg">By: {post[0].author}</p>
				</div>
				{post ? (
					<PortableText
						value={post[0].body ?? {}}
						components={components}
						onMissingComponent={false}
					/>
				) : null}
			</div>
		</div>
	);
}
