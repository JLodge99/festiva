import { PublicHolidayV3Dto } from '@festiva/queries/src/axios-client';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ReactNode } from 'preact/compat';
import { DateCard } from './date-card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';

interface DatesCarouselProps {
	dates: PublicHolidayV3Dto[];
	header?: ReactNode;
}

export function DatesCarousel({ dates, header }: DatesCarouselProps) {
	const isSmallDevice = useMediaQuery('not all and (min-width: 640px)');

	return (
		<>
			{header && (
				<h1 className="mb-5 text-xl font-semibold ">{header}</h1>
			)}
			<Carousel
				opts={{
					align: 'start',
				}}
				className="w-full min-w-64"
			>
				<CarouselContent>
					{dates.map((holiday, index) => (
						<CarouselItem
							key={index}
							className="basis-1/3 lg:basis-1/6"
						>
							<DateCard data={holiday} selected={index == 0} />
						</CarouselItem>
					))}
				</CarouselContent>
				{!isSmallDevice && (
					<>
						<CarouselPrevious />
						<CarouselNext />
					</>
				)}
			</Carousel>
		</>
	);
}
