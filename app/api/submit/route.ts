import { Form } from "@/app/components/Home/ContactSection/ContactCard";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body: Form = await request.json();
		const response = await fetch(
			`https://api.airtable.com/v0/appU4K0xQACnmxMg9/Users`,
			{
				headers: {
					Authorization: `Bearer ${process.env.AIRTABLE_API_KEY as string}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					records: [
						{
							fields: {
								"First Name": body.firstName,
								"Last Name": body.lastName,
								"Phone Number": body.phoneNumber,
								Email: body.email,
							},
						},
					],
				}),
				method: "POST",
			}
		);
		if (response.status === 200) {
			return new NextResponse("Success");
		}
	} catch (error) {
		return new NextResponse("Error");
	}
}
