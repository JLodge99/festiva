import { cn } from '@/lib/utils';
import {
	usePublicHolidayNextPublicHolidaysQuery,
	usePublicHolidayNextPublicHolidaysWorldwideQuery,
} from '@festiva/queries/src/axios-client/Query';
import { useLocalStorage } from '@uidotdev/usehooks';
import { DatesCarousel } from './dates-carousel';

export function Content({
	className,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [countryCode] = useLocalStorage<string>('countrycode');
	const { data: worldwideHolidays, isSuccess: worldWideSuccess } =
		usePublicHolidayNextPublicHolidaysWorldwideQuery();
	const { data: localHolidays, isSuccess: localHolidaysSuccess } =
		usePublicHolidayNextPublicHolidaysQuery({ countryCode });
	return (
		<div
			className={cn(
				'flex flex-col px-24 max-sm:px-5 gap-20 relative py-5 overflow-x-hidden',
				className,
			)}
			{...props}
		>
			<div className="">
				{worldWideSuccess && (
					<DatesCarousel
						dates={worldwideHolidays}
						header={
							<>
								<span>Upcoming</span> (
								<span className="text-primary">Worldwide</span>)
							</>
						}
					/>
				)}
			</div>
			<div className="">
				{localHolidaysSuccess && (
					<DatesCarousel
						dates={localHolidays}
						header={
							<>
								<span>Upcoming</span> (
								<span className="text-primary">
									{countryCode}
								</span>
								)
							</>
						}
					/>
				)}
			</div>
		</div>
	);
}
