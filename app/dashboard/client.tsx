import { Payment } from "./columns";
import DashboardForm from "./form";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../components/shadcn-ui/tabs";
import { auth } from "@clerk/nextjs";
import { prismaActions } from "../server/actions/prisma";
import { type Account } from "@prisma/client";
prismaActions;
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
export default async function ClientDashboard() {
	const { userId } = auth();
	const userData = await prismaActions.getAccount(userId as string);
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-9xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span>CLIENT</span>
						<span>DASHBOARD</span>
					</div>
				</div>
				<Tabs
					defaultValue="info"
					className="grid h-full min-h-[600px] w-full grid-cols-1 sm:grid-cols-12"
					orientation="horizontal"
				>
					<TabsList className="col-span-4 grid h-fit grid-cols-1">
						<TabsTrigger value="info">Contact Info</TabsTrigger>
						<TabsTrigger value="upload">Upload Files</TabsTrigger>
					</TabsList>
					<TabsContent
						value="info"
						className="col-span-8 flex flex-col gap-4 bg-muted-foreground p-4 text-2xl text-primary-foreground"
					>
						<DashboardForm userData={userData as Account} />
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
