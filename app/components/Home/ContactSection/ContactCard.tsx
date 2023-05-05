"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import Image from "next/image";
const firstName = z.string().min(2).max(32);
const lastName = z.string().min(2).max(32);
const email = z.string().email("Invalid Email").min(4).max(48);
const phoneNumber = z.string().min(14).max(14);

const formSchema = z.object({
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
		<div className="z-10 flex h-full w-fit flex-row items-start justify-start rounded-xl border border-black border-opacity-25 bg-white px-10 py-8 lg:w-fit lg:gap-12 lg:px-16 lg:py-20">
			<Image
				src="/family.png"
				alt="Family Image"
				width={500}
				height={500}
				className="z-10 hidden lg:block"
			/>
			<div>
				<div className="flex w-full max-w-sm flex-col gap-4">
					<span className="text-5xl font-bold uppercase text-black">
						Contact Us
					</span>
					<span>
						Fill out this form and our team will get back to you within 24 hours
					</span>
				</div>
				<div className="flex w-full max-w-sm flex-col gap-1">
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
					<button
						onClick={handleSubmit}
						disabled={!formSchema.safeParse(formData).success}
						className={
							!formSchema.safeParse(formData).success
								? "relative mt-2 flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent bg-slate-400 px-3 py-2 text-base font-bold text-white"
								: "relative mt-2 flex w-full max-w-sm cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent bg-tealPrimary px-3 py-2 text-base font-bold text-white before:absolute before:-left-96 before:-top-24 before:h-60 before:w-96 before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]"
						}
					>
						{submitLoading ? (
							<LoadingSpinner className="dark:text-gray-600 mr-2 h-4 w-4 animate-spin fill-black text-white" />
						) : formSchema.safeParse(formData).success ? (
							"Submit"
						) : (
							"Enter Your Info"
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
