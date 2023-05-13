"use client";
import { Button } from "../components/shadcn-ui/button";
import { Input } from "../components/shadcn-ui/input";
import { Label } from "../components/shadcn-ui/label";
import { useState } from "react";
import { z } from "zod";
import { useAuth } from "@clerk/nextjs";
import { Account } from "@prisma/client";
import { handleEditForm } from "../server/actions/form";

const DashboardForm = ({ userData }: { userData: Account }) => {
	const { userId } = useAuth();
	const formSchema = z.object({
		email: z.string().email().max(64).min(7).optional(),
		streetAddress1: z.string().min(4).max(32).optional(),
		streetAddress2: z.string().min(0).max(16).optional(),
		city: z.string().min(1).max(17).optional(),
		state: z.string().min(1).max(3).optional(),
		zipCode: z.string().min(5).max(10).optional(),
	});

	const [formData, setFormData] = useState({
		email: userData?.email ?? "",
		streetAddress1: userData?.street1 ?? "",
		streetAddress2: userData?.street2 ?? "",
		city: userData?.city ?? "",
		state: userData?.state ?? "",
		zipCode: userData?.zipcode ?? "",
	});
	const [edit, setEdit] = useState(false);

	return (
		<form className="col-span-9 flex flex-col">
			<div className="flex flex-col gap-4">
				<Label>Policy ID:</Label>
				<Label>Policy Plan:</Label>
				<Label>Policy Renewal Date:</Label>
				{edit ? (
					<div className="flex flex-col gap-2">
						<Label>Email:</Label>
						<Input
							value={formData.email ?? ""}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									email: e.target.value,
								}));
							}}
						/>
						<Label>Street Address 1:</Label>
						<Input
							value={formData.streetAddress1 ?? ""}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									streetAddress1: e.target.value,
								}));
							}}
						/>
						<Label>Street Address 2:</Label>
						<Input
							value={formData.streetAddress2 ?? ""}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									streetAddress2: e.target.value,
								}));
							}}
						/>
						<div className="flex w-full gap-8">
							<div className="w-full">
								<Label>City:</Label>
								<Input
									value={formData.city ?? ""}
									onChange={(e) => {
										setFormData((prevFormData) => ({
											...prevFormData,
											city: e.target.value,
										}));
									}}
								/>
							</div>
							<div className="w-full">
								<Label>State:</Label>
								<Input
									value={formData.state ?? ""}
									onChange={(e) => {
										setFormData((prevFormData) => ({
											...prevFormData,
											state: e.target.value,
										}));
									}}
								/>
							</div>
							<div className="w-full">
								<Label>Zip Code:</Label>
								<Input
									value={formData.zipCode ?? ""}
									onChange={(e) => {
										setFormData((prevFormData) => ({
											...prevFormData,
											zipCode: e.target.value,
										}));
									}}
								/>
							</div>
						</div>
					</div>
				) : (
					<div className="flex flex-col gap-6">
						<div className="flex w-full flex-col gap-3">
							<Label>Email</Label>
							<Label>{formData.email ?? ""}</Label>
						</div>
						<div className="flex w-full flex-col gap-3">
							<Label>Street Address 1:</Label>
							<Label>{formData.streetAddress1 ?? ""}</Label>
						</div>
						<div className="flex w-full flex-col gap-3">
							<Label>Street Address 2:</Label>
							<Label>{formData.streetAddress2 ?? ""}</Label>
						</div>
						<div className="flex w-full gap-8">
							<div className="flex w-full flex-col gap-3">
								<Label>City:</Label>
								<Label>{formData.city ?? ""}</Label>
							</div>
							<div className="flex w-full flex-col gap-2">
								<Label>State:</Label>
								<Label>{formData.state ?? ""}</Label>
							</div>
							<div className="flex w-full flex-col gap-2">
								<Label>Zip Code:</Label>
								<Label>{formData.zipCode ?? ""}</Label>
							</div>
						</div>
					</div>
				)}
			</div>
			{edit ? (
				<Button
					type="submit"
					className="w-fit"
					onClick={(e) => {
						e.preventDefault();
						setEdit(!edit);
						const parsedData = formSchema.parse(formData);
						handleEditForm(parsedData, userId as string);
					}}
				>
					Save
				</Button>
			) : (
				<Button
					className="mt-10 w-fit"
					onClick={(e) => {
						e.preventDefault();
						setEdit(!edit);
					}}
				>
					Edit
				</Button>
			)}
		</form>
	);
};

export default DashboardForm;
