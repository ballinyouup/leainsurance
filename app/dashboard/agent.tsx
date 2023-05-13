import { Tabs, TabsList, TabsTrigger, TabsContent } from "$/tabs";
import { Button } from "../components/shadcn-ui/button";
import { Input } from "../components/shadcn-ui/input";

export default function AgentDashboard() {
	
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-9xl">
				<div className="relative h-40 w-full overflow-hidden bg-teal-900 bg-opacity-50 sm:h-64">
					<div className="absolute bottom-4 left-4 flex flex-col text-4xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-6xl md:text-8xl">
						<span className="uppercase">AGENT</span>
						<span>DASHBOARD</span>
					</div>
				</div>
				<Tabs
					defaultValue="info"
					className="grid h-full min-h-[600px] w-full grid-cols-1 sm:grid-cols-12"
					orientation="horizontal"
				>
					<TabsList className="col-span-4 grid h-fit grid-cols-1">
						<TabsTrigger value="info">Contact Info</TabsTrigger>
						<TabsTrigger value="upload">Upload Files</TabsTrigger>
					</TabsList>
					<TabsContent
						value="info"
						className="col-span-8 flex flex-col gap-4 bg-muted-foreground p-4 text-2xl text-primary-foreground"
					>
						<form>
							<Input
								name="clientId"
								placeholder="Enter Client ID..."
								maxLength={32}
								minLength={32}
								required
								autoComplete="false"
							/>
							<Button type="submit">Add Client</Button>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
