import { cn } from '@/lib/utils';
import { CountryV3Dto } from '@festiva/queries/src/axios-client';
import {
	useCountryAvailableCountriesQuery,
	usePublicHolidayNextPublicHolidaysQuery,
	usePublicHolidayNextPublicHolidaysWorldwideQuery,
} from '@festiva/queries/src/axios-client/Query';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useState } from 'preact/hooks';
import { DatesCarousel } from './dates-carousel';
import { Button } from './ui/button';
import { SelectScrollable } from './ui/select-scrollable';

export function Content({
	className,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	// const [countryCode] = useLocalStorage<string>('countrycode');
	const [countryCodes, setCountryCodes] = useLocalStorage(
		'countrycodes',
		`US,MX,DE,JP`,
	);
	const [selectedCountry, setSelectedCountry] =
		useState<CountryV3Dto['countryCode']>('');

	const { data: worldwideHolidays, isSuccess: worldWideSuccess } =
		usePublicHolidayNextPublicHolidaysWorldwideQuery({
			staleTime: Infinity,
		});

	const { data: countriesData, isSuccess: countriesSuccess } =
		useCountryAvailableCountriesQuery({ staleTime: Infinity });

	return (
		<div
			className={cn(
				'flex flex-col px-24 max-sm:px-5 gap-10 relative py-5 overflow-x-hidden',
				className,
			)}
			{...props}
		>
			<div className="">
				<DatesCarousel
					dates={
						worldWideSuccess
							? worldwideHolidays.sort(
									(a, b) =>
										new Date(a.date).getTime() -
										new Date(b.date).getTime(),
								)
							: []
					}
					header={
						<>
							<span>Upcoming</span> (
							<span className="text-primary">Worldwide</span>)
						</>
					}
					loading={!worldWideSuccess}
					showCountry
				/>
			</div>
			<div className="">
				{countryCodes.split(',')?.map((country) => (
					<DatesCarousel
						key={country}
						dates={usePublicHolidayNextPublicHolidaysQuery(
							{
								countryCode: country,
							},
							{ staleTime: Infinity },
						).data?.sort(
							(a, b) =>
								new Date(a.date).getTime() -
								new Date(b.date).getTime(),
						)}
						header={
							<>
								<span>Upcoming</span> (
								<span className="text-primary">
									{countriesData?.find(
										(x) => x.countryCode == country,
									)?.name ?? country}
								</span>
								)
							</>
						}
						loading={
							!usePublicHolidayNextPublicHolidaysQuery({
								countryCode: country,
							}).isSuccess
						}
					/>
				))}
			</div>
			<div className="flex flex-row justify-center items-end gap-5 pb-24">
				<div className="relative">
					<div className="space-y-4 relative">
						<span>Add row</span>
						<SelectScrollable
							data={countriesSuccess ? countriesData : []}
							itemKey={(row) => row.countryCode}
							itemValue={(row) => row.countryCode}
							displayValue={(row) => row.name}
							value={selectedCountry}
							onValueChange={(value) => setSelectedCountry(value)}
						/>
					</div>
					<span
						className={cn(
							!countryCodes
								.split(',')
								.includes(selectedCountry) && 'hidden',
							'absolute text-xs text-destructive truncate w-fit mt-0',
						)}
					>
						Country already selected
					</span>
				</div>
				<div>
					<Button
						onClick={() => {
							setCountryCodes(
								(prev) => `${prev},${selectedCountry}`,
							);
							setSelectedCountry('');
						}}
						disabled={
							!selectedCountry.length ||
							countryCodes.split(',').includes(selectedCountry)
						}
					>
						Add
					</Button>
				</div>
			</div>
		</div>
	);
}
