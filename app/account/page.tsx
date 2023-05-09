import {
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	UserProfile,
} from "@clerk/nextjs";

const Page = () => {
	return (
		<div className="flex w-full items-center justify-center p-10">
			<SignedIn>
				<UserProfile
					appearance={{
						elements: { card: { width: "1550px" } },
					}}
				/>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</div>
	);
};

export default Page;
