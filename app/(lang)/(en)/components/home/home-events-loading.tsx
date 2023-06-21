import { Skeleton } from "@/app/components/shadcn-ui/skeleton";
export function EventsLoading() {
	return (
		<>
			<span className="self-center text-5xl font-bold">EVENTS</span>
			<div className="flex h-full w-full flex-col items-center p-5 text-white">
				<div
					className={`flex w-full max-w-5xl gap-4 border border-white bg-accent p-2 transition-transform hover:scale-[98%]`}
				>
					<Skeleton className="h-[200px] w-[250px]" />
					<div className="flex w-full flex-col gap-2.5">
						<Skeleton className="h-5 w-1/2" />
						<Skeleton className="h-5 w-2/3" />
						<Skeleton className="h-5 w-1/2" />
						<Skeleton className="h-5 w-2/3" />
						<Skeleton className="h-5 w-1/2" />
						<Skeleton className="h-5 w-2/3" />
						<Skeleton className="h-5 w-1/2" />
					</div>
				</div>
			</div>
		</>
	);
}
