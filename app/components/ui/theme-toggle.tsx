"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button, type ButtonProps } from "$/button";
import { Icons } from "$/icons";

export function ThemeToggle({ children, ...props }: ButtonProps) {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			{...props}
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<Icons.moon className="rotate-0 scale-100 text-popover dark:-rotate-90 dark:scale-0" />
			<Icons.sun className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
			{children}
		</Button>
	);
}
