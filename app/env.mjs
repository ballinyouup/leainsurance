import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "NEXT_PUBLIC",
	server: {
		POSTGRES_URL: z.string().url(),
		CLERK_SECRET_KEY: z.string().min(1),
		ADMIN_ID: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
	},
	runtimeEnv: {
		POSTGRES_URL: process.env.POSTGRES_URL,
		CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
		ADMIN_ID: process.env.ADMIN_ID,
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
	},
});
