import * as React from 'react';

import { cn } from '@/lib/utils';
import { ModeToggle } from '../mode-toggle';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	test?: boolean;
}

function Header({ className, ...props }: HeaderProps) {
	return (
		<div
			className={cn(
				className,
				'h-12 sticky top-0 z-50 overflow-hidden flex items-center bg-background',
			)}
			{...props}
		>
			<div className="px-2 w-full grid grid-cols-3 grid-rows-1">
				<h1 className="w-full text-center font-bold text-2xl flex justify-center max-sm:col-span-2 text-primary col-start-2">
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
