import * as React from 'react';

import { cn } from '@/lib/utils';
import { useCountryAvailableCountriesQuery } from '@festiva/queries/src/axios-client/Query';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ModeToggle } from '../mode-toggle';
import { SelectScrollable } from './select-scrollable';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	test?: boolean;
}

function Header({ className, ...props }: HeaderProps) {
	const { data: countriesData, isSuccess } =
		useCountryAvailableCountriesQuery({ staleTime: Infinity });
	const [countryCode, setCountryCode] = useLocalStorage('countrycode', 'US');

	return (
		<div
			className={cn(
				className,
				'h-12 sticky top-0 z-50 overflow-hidden flex items-center bg-background',
			)}
			{...props}
		>
			<div className="px-2 w-full grid grid-cols-3 grid-rows-1">
				<div className="flex items-center gap-5 ">
					<img src={'/favicon-32x32.png'}></img>

					{
						<SelectScrollable
							data={isSuccess ? countriesData : []}
							value={countryCode}
							onValueChange={setCountryCode}
						/>
					}
				</div>
				<h1 className="w-full text-center font-bold text-2xl flex justify-center max-sm:col-span-2 text-primary">
					Festiva
				</h1>
				<div className="col-start-8 flex justify-end items-center">
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}

export { Header };
