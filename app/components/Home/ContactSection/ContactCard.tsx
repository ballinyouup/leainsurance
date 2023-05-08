"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import Image from "next/image";
import { Button } from "../../shadcn-ui/button";
const firstName = z.string().min(2).max(32);
const lastName = z.string().min(2).max(32);
const email = z.string().email("Invalid Email").min(4).max(48);
const phoneNumber = z.string().min(14).max(14);

export const formSchema = z.object({
	firstName: firstName,
	lastName: lastName,
	email: email,
	phoneNumber: phoneNumber,
});

export type Form = z.infer<typeof formSchema>;

const ContactCard = () => {
	const [submitLoading, setSubmitLoading] = useState(false);
	const [formData, setFormData] = useState<Form>({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
	});

	const handleSubmit = async () => {
		try {
			if (formSchema.parse(formData)) {
				setSubmitLoading(true);
				const response = await fetch("/api/submit", {
					body: JSON.stringify(formData),
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status === 200) {
					toast.success("Successfully submitted form!");
					setSubmitLoading(false);
					setFormData({
						firstName: "",
						lastName: "",
						email: "",
						phoneNumber: "",
					});
				}
			} else {
				toast.error("Error Submitting Form.");
			}
		} catch (error) {
			if (error) {
				setSubmitLoading(false);
				toast.error("Error submitting form");
			}
		}
	};

	return (
		<div className="z-10 flex h-full w-fit flex-row items-start justify-start rounded-xl border border-black border-opacity-25 bg-white lg:w-fit lg:gap-12 lg:px-8 lg:py-10">
			<Image
				src="/family.png"
				alt="Family Image"
				width={500}
				height={500}
				className="z-10 hidden lg:block"
			/>
			<div className="rounded-lg border border-slate-300 bg-slate-100 px-8 py-10">
				<div className="flex w-full max-w-sm flex-col gap-4">
					<span className="text-4xl font-bold uppercase text-black sm:text-5xl">
						Contact Us
					</span>
					<span>
						Fill out this form and our team will get back to you within 24 hours
					</span>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					className="flex w-full max-w-sm flex-col gap-1"
				>
					<div className="flex gap-2 sm:gap-4">
						<div className="flex flex-col">
							<label>First Name:</label>
							<input
								type="text"
								placeholder="First name..."
								className={
									formData.firstName !== "" &&
									!firstName.safeParse(formData.firstName).success
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
								}
								value={formData.firstName}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										firstName: e.target.value,
									}));
								}}
								required
							/>
						</div>
						<div className="flex flex-col">
							<label>Last Name:</label>
							<input
								type="text"
								placeholder="Last Name..."
								className={
									formData.lastName !== "" &&
									!lastName.safeParse(formData.lastName).success
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
								}
								value={formData.lastName}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										lastName: e.target.value,
									}));
								}}
								required
							/>
						</div>
					</div>
					<label>Email:</label>
					<input
						type="email"
						placeholder="Enter Email..."
						className={
							formData.email !== "" && !email.safeParse(formData.email).success
								? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 indent-3"
								: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
						}
						value={formData.email}
						onChange={(e) => {
							setFormData((prevFormData) => ({
								...prevFormData,
								email: e.target.value,
							}));
						}}
						required
					/>
					<label>Phone Number:</label>
					<input
						type="tel"
						placeholder="000-000-0000"
						className={
							formData.phoneNumber !== "" &&
							!phoneNumber.safeParse(formData.phoneNumber).success
								? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 indent-3"
								: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
						}
						value={formData.phoneNumber}
						onChange={(e) => {
							const rawValue = e.target.value.replace(/\D/g, "");
							const formattedValue = rawValue
								.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
								.replace(/(\d{3})(\d{3})(\d{0,4})/, "($1) $2-$3");
							setFormData((prevFormData) => ({
								...prevFormData,
								phoneNumber: formattedValue,
							}));
						}}
						required
					/>
					<Button
						type="submit"
						disabled={!formSchema.safeParse(formData).success}
					>
						{submitLoading ? (
							<LoadingSpinner className="dark:text-gray-600 mr-2 h-4 w-4 animate-spin fill-black text-white" />
						) : formSchema.safeParse(formData).success ? (
							"Submit"
						) : (
							"Enter Your Info"
						)}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactCard;
