/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import { PortableText, toPlainText } from "@portabletext/react";
import Link from "next/link";
const client = createClient({
	projectId: "be20oshw",
	dataset: "production",
	apiVersion: "2023-06-05",
	useCdn: false,
});

const components = {
	block: {
		normal: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
	},
};

interface Post {
	author: string;
	slug: {
		current: string;
	};
	body: [];
	title: string;
}

export default async function Page() {
	const posts = await client.fetch(`*[_type == "posts"]{
		"author": author->name,
		  body, title, slug
	  }`);

	return (
		<div className="flex h-full w-full flex-col items-center p-2 text-white">
			{posts.map((post: Post) => {
				return (
					<Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
						<div
							className={`flex w-full max-w-5xl flex-col text-ellipsis border border-white bg-accent p-2 transition-transform hover:scale-[98%]`}
							key={post.slug.current}
						>
							<div>
								<h1 className="font-bold">{post.title}</h1>
								<p className="text-lg">By: {post.author}</p>
							</div>

							<div className="line-clamp-3 h-[80px]">
								{toPlainText(post.body)}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
