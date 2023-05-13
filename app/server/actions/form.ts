"use server";
import { z } from "zod";
import { prismaActions } from "./prisma";
const formSchema = z.object({
	email: z.string().email("Not an email").max(64).min(7).optional(),
	streetAddress1: z.string().min(4).max(32).optional(),
	streetAddress2: z.string().min(0).max(16).optional(),
	city: z.string().min(1).max(17).optional(),
	state: z.string().min(1).max(3).optional(),
	zipCode: z.string().min(5).max(10).optional(),
});

type Form = z.infer<typeof formSchema>;

export async function handleEditForm(formData: Form, userId: string) {
	const parsedData = formSchema.parse(formData);
	const submitted = await prismaActions.updateAccount(userId, {
		email: parsedData.email as string,
		city: parsedData.city,
		state: parsedData.state,
		streetAddress1: parsedData.streetAddress1,
		streetAddress2: parsedData.streetAddress2,
		zipCode: parsedData.zipCode,
	});
    return submitted;
}
