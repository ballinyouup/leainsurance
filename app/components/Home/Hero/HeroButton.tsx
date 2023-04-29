"use client";

import Button from "../../Button/Button";

const HeroButton = () => {
	return (
		<div className="flex w-full flex-row justify-start gap-4 sm:max-w-xl">
			<Button>
				<button onClick={() => scrollTo({ top: 9999999, behavior: "smooth" })}>
					Contact Us
				</button>
			</Button>
			<Button>
				<a href="tel:+17864447717">Call Today</a>
			</Button>
		</div>
	);
};

export default HeroButton;
