// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/medicare",
		"/obamacare",
		"/life-insurance",
		"/funeral-assistance",
	],
	beforeAuth: (request: NextRequest) => {
		const requestHeaders = new Headers(request.headers);
		const allowedOrigin =
			process.env.NODE_ENV === "development"
				? "http://localhost:3000"
				: "http://www.leainsurance.com";
		requestHeaders.set("Access-Control-Allow-Origin", allowedOrigin);
		requestHeaders.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
		requestHeaders.set(
			"Access-Control-Allow-Headers",
			"Content-Type,Authorization"
		);
		requestHeaders.set("Access-Control-Allow-Credentials", "true");

		// Handle pre-flight request
		if (request.method === "OPTIONS") {
			return NextResponse.next({
				status: 200,
				headers: requestHeaders,
			});
		}

		const response = NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});

		return response;
	},
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)"],
};
