import { Skeleton } from './ui/skeleton';

export const CardSkeleton = ({ key }: { key: number }) => (
	<div className="flex gap-3 flex-col w-full" key={key}>
		<Skeleton className="h-[20px]" />
		<Skeleton className="h-[100px]" />
	</div>
);
