import * as React from 'react';

import { cn } from '@/lib/utils';
import GhInvertoDark from '../../assets/GitHub_Invertocat_Dark.svg?react';
import GhInvertoLight from '../../assets/GitHub_Invertocat_Light.svg?react';
import { ModeToggle } from '../mode-toggle';
import { Button } from './button';

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
				<div className="col-start-8 flex justify-end items-center gap-2">
					<ModeToggle />
					<Button variant="ghost" size="icon">
						<a
							href="https://github.com/JLodge99"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full h-full"
							title="Github Link"
						>
							<div>
								<GhInvertoDark className=" absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<GhInvertoLight className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							</div>
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}

export { Header };
