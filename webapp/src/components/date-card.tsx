import { PublicHolidayV3Dto } from '@festiva/queries/src/axios-client';
import { nth } from '@festiva/utils';
import { Card, CardContent, CardHeader } from './ui/card';

interface DateCardProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Card>, 'data'> {
	data: PublicHolidayV3Dto;
}

export const DateCard = ({ data, ...props }: DateCardProps) => {
	const { date } = data;
	const isToday = date.toDateString() == new Date().toDateString();
	return (
		<Card
			className="min-w-16"
			{...props}
			border={isToday ? 'selected' : 'default'}
		>
			<CardHeader header={isToday ? 'selected' : 'default'}>
				<h2
					className="text-md font-semibold truncate h-8 p-1 text-center"
					title={data.name}
				>
					{data.name}
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
