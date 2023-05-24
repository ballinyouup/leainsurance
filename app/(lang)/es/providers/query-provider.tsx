"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Client {
	children?: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider: React.FC<Client> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
export default QueryProvider;
