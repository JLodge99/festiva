import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { CountryV3Dto } from '@festiva/queries/src/axios-client';
import React from 'preact/compat';

interface SelectScrollableProps
	extends React.ComponentPropsWithoutRef<typeof Select> {
	data: CountryV3Dto[];
}

export const SelectScrollable = ({ data, ...props }: SelectScrollableProps) => {
	return (
		<>
			<Select {...props}>
				<SelectTrigger className="w-48">
					<SelectValue placeholder="Select a country" />
				</SelectTrigger>
				<SelectContent selected>
					<SelectGroup>
						{data.map((country, index) => {
							return (
								<SelectItem
									key={country.countryCode}
									value={country.countryCode}
									seamless={index == 1}
								>
									{country.name}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};
