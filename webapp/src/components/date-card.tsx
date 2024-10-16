import { PublicHolidayV3Dto } from '@festiva/queries/src/axios-client';
import { useCountryAvailableCountriesQuery } from '@festiva/queries/src/axios-client/Query';
import { nth } from '@festiva/utils';
import { Card, CardContent, CardHeader } from './ui/card';

interface DateCardProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Card>, 'data'> {
	data: PublicHolidayV3Dto;
	showCountry?: boolean;
}

export const DateCard = ({ data, showCountry, ...props }: DateCardProps) => {
	const { date } = data;
	const isToday = date.toDateString() == new Date().toDateString();

	const { data: countriesData } = useCountryAvailableCountriesQuery({
		staleTime: Infinity,
	});
	return (
		<Card
			className="min-w-16 cursor-default select-none"
			{...props}
			border={isToday ? 'selected' : 'default'}
			country={
				showCountry &&
				countriesData?.find((x) => x.countryCode == data.countryCode)
					?.name
			}
		>
			<CardHeader header={isToday ? 'selected' : 'default'}>
				<h2
					className="text-md font-semibold truncate h-8 p-1 text-center"
					title={data.name}
				>
					{data.localName}
				</h2>
			</CardHeader>
			<CardContent className="flex p-0 flex-col justify-between">
				<span className="text-center p-1 text-xl truncate">
					{date.toLocaleDateString('default', { weekday: 'long' })}
				</span>
				<span className="text-center p-1 text-5xl font-semibold">
					{`${date.getDate()}${nth(date.getDate())}`}
				</span>
				<span className="text-center p-1 pb-3 text-xl truncate">
					{date.toLocaleString('default', { month: 'long' })}
				</span>
			</CardContent>
		</Card>
	);
};
