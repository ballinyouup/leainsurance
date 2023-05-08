"use client";

import { Button } from "../../shadcn-ui/button";

const HeroButton = () => {
	return (
		<div className="flex w-full flex-row justify-start gap-4 sm:max-w-xl">
			<Button onClick={() => scrollTo({ top: 9999999, behavior: "smooth" })}>
				Contact Us
			</Button>
			<Button>
				<a href="tel:+18886854221">Call Today</a>
			</Button>
		</div>
	);
};

export default HeroButton;
