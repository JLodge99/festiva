import { CardSkeleton } from './card-skeleton';

export const DateCarouselSkeleton = ({ num }: { num: number }) => (
	<div className="flex gap-4">
		{Array(num)
			.fill(0)
			.map((_val, index) => (
				<CardSkeleton key={index} />
			))}
	</div>
);
