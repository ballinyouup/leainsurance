"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import LoadingSpinner from "../ui/spinner";
import Image from "next/image";
import { Button } from "../shadcn-ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn-ui/tabs";
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

const Contact = () => {
	const [submitLoading, setSubmitLoading] = useState(false);
	const [formData, setFormData] = useState<Form>({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
	});

	const handleSubmit = async (type: "client" | "agent") => {
		try {
			if (formSchema.parse(formData)) {
				setSubmitLoading(true);
				const response = await fetch(
					type === "agent" ? "/api/agents" : "/api/submit",
					{
						body: JSON.stringify(formData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
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
		<Tabs
			defaultValue="clients"
			className="relative mt-8 flex h-full w-full items-center justify-center gap-20 px-5 lg:mt-0 lg:flex-row lg:py-20"
		>
			<div className="z-10 flex h-full w-fit flex-row items-start justify-start rounded-xl border-opacity-25 bg-background md:border md:border-primary-foreground lg:w-fit lg:gap-12 lg:px-8 lg:py-10">
				<Image
					src="/family.png"
					alt="Family Image"
					width={500}
					height={500}
					className="z-10 hidden lg:block"
					quality="100"
				/>
				<div className="flex flex-col gap-4 rounded-lg border border-muted-foreground bg-muted px-8 py-10">
					<div className="flex w-full max-w-sm flex-col gap-4 text-primary">
						<TabsList className="grid h-full w-full grid-cols-2 gap-2 rounded-lg">
							<TabsTrigger
								value="clients"
								className="flex items-center justify-center rounded-lg text-center text-2xl"
							>
								<span>Clients</span>
							</TabsTrigger>
							<TabsTrigger
								value="agents"
								className="flex items-center justify-center rounded-lg text-center text-2xl"
							>
								<span>Agents</span>
							</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="clients" className="flex flex-col gap-2">
						<div className="flex w-full max-w-sm flex-col">
							<span className="text-4xl font-bold uppercase sm:text-5xl">
								Contact Us
							</span>
							<span>
								Fill out this form and our team will get back to you within 24
								hours
							</span>
						</div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit("client");
							}}
							className="mt-4 flex w-full max-w-sm flex-col gap-1 text-primary"
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
												? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
												: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
												? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
												: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
									formData.email !== "" &&
									!email.safeParse(formData.email).success
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
									<LoadingSpinner className="mr-2 h-4 w-4 animate-spin fill-black text-white dark:text-primary" />
								) : formSchema.safeParse(formData).success ? (
									"Submit"
								) : (
									"Enter Your Info"
								)}
							</Button>
						</form>
					</TabsContent>
					<TabsContent value="agents" className="flex flex-col gap-2">
						<div className="flex w-full max-w-sm flex-col">
							<span className="text-4xl font-bold uppercase sm:text-5xl">
								Work with Us
							</span>
							<span>
								Fill out this form and our team will get back to you within 24
								hours
							</span>
						</div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit("agent");
							}}
							className="mt-4 flex w-full max-w-sm flex-col gap-1 text-primary"
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
												? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
												: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
												? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
												: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
									formData.email !== "" &&
									!email.safeParse(formData.email).success
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
										? "h-10 w-full max-w-sm rounded-xl border border-red-600 border-opacity-50 bg-background indent-3"
										: "h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 bg-background indent-3"
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
									<LoadingSpinner className="mr-2 h-4 w-4 animate-spin fill-black text-white dark:text-primary" />
								) : formSchema.safeParse(formData).success ? (
									"Submit"
								) : (
									"Enter Your Info"
								)}
							</Button>
						</form>
					</TabsContent>
				</div>
			</div>
			<svg
				id="visual"
				viewBox="0 0 960 540"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.1"
				className="absolute -top-[1000px] z-0 h-[1600px] w-[2000px] -scale-y-125 max-[530px]:h-[4000px] max-[530px]:w-[3200px] max-[364px]:-top-[1800px] sm:-top-[1000px] lg:-top-[800px]"
			>
				<path
					d="M0 87L14.5 107.8C29 128.7 58 170.3 87.2 190.2C116.3 210 145.7 208 174.8 194.5C204 181 233 156 262 163.2C291 170.3 320 209.7 349 213.2C378 216.7 407 184.3 436.2 169.2C465.3 154 494.7 156 523.8 143.5C553 131 582 104 611 96.7C640 89.3 669 101.7 698 101.7C727 101.7 756 89.3 785.2 86.7C814.3 84 843.7 91 872.8 99C902 107 931 116 945.5 120.5L960 125L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z"
					fill="#041e1c"
				></path>
				<path
					d="M0 206L14.5 217.7C29 229.3 58 252.7 87.2 277C116.3 301.3 145.7 326.7 174.8 322.2C204 317.7 233 283.3 262 277C291 270.7 320 292.3 349 298.7C378 305 407 296 436.2 288.8C465.3 281.7 494.7 276.3 523.8 263.8C553 251.3 582 231.7 611 228C640 224.3 669 236.7 698 235.7C727 234.7 756 220.3 785.2 221.3C814.3 222.3 843.7 238.7 872.8 250.3C902 262 931 269 945.5 272.5L960 276L960 123L945.5 118.5C931 114 902 105 872.8 97C843.7 89 814.3 82 785.2 84.7C756 87.3 727 99.7 698 99.7C669 99.7 640 87.3 611 94.7C582 102 553 129 523.8 141.5C494.7 154 465.3 152 436.2 167.2C407 182.3 378 214.7 349 211.2C320 207.7 291 168.3 262 161.2C233 154 204 179 174.8 192.5C145.7 206 116.3 208 87.2 188.2C58 168.3 29 126.7 14.5 105.8L0 85Z"
					fill="#032220"
				></path>
				<path
					d="M0 401L14.5 393.7C29 386.3 58 371.7 87.2 379.7C116.3 387.7 145.7 418.3 174.8 429.2C204 440 233 431 262 425.7C291 420.3 320 418.7 349 413.3C378 408 407 399 436.2 396.3C465.3 393.7 494.7 397.3 523.8 396.3C553 395.3 582 389.7 611 387.8C640 386 669 388 698 393.5C727 399 756 408 785.2 415.2C814.3 422.3 843.7 427.7 872.8 434C902 440.3 931 447.7 945.5 451.3L960 455L960 274L945.5 270.5C931 267 902 260 872.8 248.3C843.7 236.7 814.3 220.3 785.2 219.3C756 218.3 727 232.7 698 233.7C669 234.7 640 222.3 611 226C582 229.7 553 249.3 523.8 261.8C494.7 274.3 465.3 279.7 436.2 286.8C407 294 378 303 349 296.7C320 290.3 291 268.7 262 275C233 281.3 204 315.7 174.8 320.2C145.7 324.7 116.3 299.3 87.2 275C58 250.7 29 227.3 14.5 215.7L0 204Z"
					fill="#002624"
				></path>
				<path
					d="M0 471L14.5 466.5C29 462 58 453 87.2 457.5C116.3 462 145.7 480 174.8 485.3C204 490.7 233 483.3 262 475.2C291 467 320 458 349 453.5C378 449 407 449 436.2 456.2C465.3 463.3 494.7 477.7 523.8 480.3C553 483 582 474 611 466C640 458 669 451 698 456.5C727 462 756 480 785.2 489C814.3 498 843.7 498 872.8 498C902 498 931 498 945.5 498L960 498L960 453L945.5 449.3C931 445.7 902 438.3 872.8 432C843.7 425.7 814.3 420.3 785.2 413.2C756 406 727 397 698 391.5C669 386 640 384 611 385.8C582 387.7 553 393.3 523.8 394.3C494.7 395.3 465.3 391.7 436.2 394.3C407 397 378 406 349 411.3C320 416.7 291 418.3 262 423.7C233 429 204 438 174.8 427.2C145.7 416.3 116.3 385.7 87.2 377.7C58 369.7 29 384.3 14.5 391.7L0 399Z"
					fill="#004542"
				></path>
				<path
					d="M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 496L945.5 496C931 496 902 496 872.8 496C843.7 496 814.3 496 785.2 487C756 478 727 460 698 454.5C669 449 640 456 611 464C582 472 553 481 523.8 478.3C494.7 475.7 465.3 461.3 436.2 454.2C407 447 378 447 349 451.5C320 456 291 465 262 473.2C233 481.3 204 488.7 174.8 483.3C145.7 478 116.3 460 87.2 455.5C58 451 29 460 14.5 464.5L0 469Z"
					fill="#006762"
				></path>
			</svg>
		</Tabs>
	);
};

export default Contact;
