import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import React from 'preact/compat';

interface SelectScrollableProps<T>
	extends React.ComponentPropsWithoutRef<typeof Select> {
	data: T[];
	itemKey: (rowKey: T) => string;
	itemValue: (rowKey: T) => string;
	displayValue: (rowKey: T) => React.ReactNode;
}

export const SelectScrollable = <T,>({
	data,
	itemKey,
	itemValue,
	displayValue,
	...props
}: SelectScrollableProps<T>) => {
	return (
		<>
			<Select {...props}>
				<SelectTrigger className="w-48">
					<SelectValue placeholder="Select a country" />
				</SelectTrigger>
				<SelectContent selected>
					<SelectGroup>
						{data.map((x, index) => {
							return (
								<SelectItem
									key={itemKey?.(x)}
									value={itemValue?.(x)}
									seamless={index == 1}
								>
									{displayValue?.(x)}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};
