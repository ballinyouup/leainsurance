import { prisma } from "../db";
import { z } from "zod";
const formSchema = z.object({
	email: z.string().email("Not an email").max(64).min(7),
	streetAddress1: z.string().min(4).max(32).optional(),
	streetAddress2: z.string().min(0).max(16).optional(),
	city: z.string().min(1).max(17).optional(),
	state: z.string().min(1).max(3).optional(),
	zipCode: z.string().min(5).max(10).optional(),
});

type Form = z.infer<typeof formSchema>;

export const prismaActions = {
	createAccount: async (userId: string, email: string) => {
		const existingAccount = await prisma.account.findUnique({
			where: {
				id: userId,
			},
		});
		if (!existingAccount) {
			const newAccount = await prisma.account.create({
				data: {
					id: userId,
					email: email ?? "",
				},
			});
			return newAccount;
		}
	},
	updateAccount: async (userId: string, formData: Form) => {
		const existingAccount = await prisma.account.findUnique({
			where: {
				id: userId,
			},
		});
		if (existingAccount) {
			const parsedData = formSchema.parse(formData);
			const updatedAccount = await prisma.account.update({
				where: {
					id: existingAccount.id,
				},
				data: {
					email: parsedData.email ?? "",
					city: parsedData.city ?? "",
					state: parsedData.state ?? "",
					street1: parsedData.streetAddress1 ?? "",
					street2: parsedData.streetAddress2 ?? "",
					zipcode: parsedData.zipCode ?? "",
				},
			});
			return updatedAccount;
		} else {
			const parsedData = formSchema.parse(formData);
			const newAccount = await prisma.account.create({
				data: {
					id: userId,
					email: parsedData.email ?? "",
					city: parsedData.city ?? "",
					state: parsedData.state ?? "",
					street1: parsedData.streetAddress1 ?? "",
					street2: parsedData.streetAddress2 ?? "",
					zipcode: parsedData.zipCode ?? "",
				},
			});
			return newAccount;
		}
	},
	getAccount: async (userId: string) => {
		const account = await prisma.account.findUnique({
			where: {
				id: userId,
			},
		});
		return account;
	},
};
