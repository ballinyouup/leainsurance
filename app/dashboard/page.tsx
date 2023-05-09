import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { auth } from "@clerk/nextjs";
import { env } from "../env.mjs";
import { redirect } from "next/navigation";
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

export default async function DemoPage() {
	const data = await getData();
	const { userId } = auth();
	if (userId !== env.ADMIN_ID) {
		redirect("/");
	}
	return (
		<div className="flex w-full items-center justify-center">
			<div className="grid w-full max-w-9xl grid-cols-12 justify-end gap-4 bg-primary-foreground p-10">
				<div className="col-span-3 h-full rounded-md border">test</div>
				<DataTable columns={columns} data={data} className="col-span-9" />
			</div>
		</div>
	);
}
