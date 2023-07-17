import { z } from "zod";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const firstName = z.string().min(2).max(32);
const lastName = z.string().min(2).max(32);
const email = z.string().email("Invalid Email").min(4).max(48);
const phoneNumber = z.string().min(14).max(14);
const zipCode = z.string().min(5).max(5);
const insurance = z.string();

const formSchema = z.object({
	firstName: firstName,
	lastName: lastName,
	email: email,
	phoneNumber: phoneNumber,
	zipCode: zipCode,
	insurance: insurance
});
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const parsedBody = formSchema.parse(body);
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
								"First Name": parsedBody.firstName,
								"Last Name": parsedBody.lastName,
								"Phone Number": parsedBody.phoneNumber,
								Email: parsedBody.email,
								"Zip Code": parsedBody.zipCode ?? "",
								Insurance: parsedBody.insurance
							},
						},
					],
				}),
				method: "POST",
			}
		);
		if (response.status === 200) {
			return new NextResponse("Success", { status: 200 });
		} else {
			return new NextResponse("Error", { status: response.status });
		}
	} catch (error) {
		console.error(error);
		return new NextResponse("Error", { status: 500 });
	}
}
