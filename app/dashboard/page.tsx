import { Payment } from "./columns";
import { auth, clerkClient } from "@clerk/nextjs";
import { clerkActions } from "../server/actions/clerk";
import AgentDashboard from "./agent";
import ClientDashboard from "./client";
import { prismaActions } from "../server/actions/prisma";
import { Account } from "@prisma/client";
async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "fm@gmail.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "am@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "bm@example.com",
		},
		// ...
	];
}

export default async function Page() {
	const { userId } = auth();
	const user = await clerkClient.users.getUser(userId!);

	if (!user.publicMetadata.role && userId) {
		await clerkActions.updateRole(userId, "client");
	}

	const userData = await prismaActions.getAccount(userId as string);
	return (
		<>
			{user.publicMetadata.role === "agent" ? (
				<>
					{/* @ts-expect-error Async Server Component */}
					<AgentDashboard />
				</>
			) : (
				<>
					<ClientDashboard userData={userData as Account} />
				</>
			)}
		</>
	);
}
