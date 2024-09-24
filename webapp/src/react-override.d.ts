// react-override.d.ts
import 'react';

declare module 'react' {
	export type ElementRef<
		T extends
			| keyof JSX.IntrinsicElements
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			| React.JSXElementConstructor<any>
			| { className?: string },
	> = React.RefObject<T>;
}
