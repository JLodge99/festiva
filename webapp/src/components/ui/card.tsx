import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Badge } from './badge';

const cardVariant = cva('', {
	variants: {
		border: {
			default: '',
			selected: 'border-primary',
		},
		header: {
			default: '',
			selected: 'text-primary',
		},
	},
	defaultVariants: {
		border: 'default',
		header: 'default',
	},
});

interface ExtendedCardType
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariant> {}

const Card = React.forwardRef<HTMLDivElement, ExtendedCardType>(
	({ className, border, header, ...props }, ref) => (
		<div className="relative pb-5">
			<div
				ref={ref}
				className={cn(
					cardVariant({ border }),
					'rounded-lg border bg-card text-card-foreground shadow-sm',
					className,
				)}
				{...props}
			/>
			{(border == 'selected' || header == 'selected') && (
				<Badge className="absolute z-50 bottom-2 left-0 right-0 ml-auto mr-auto w-fit">
					Today
				</Badge>
			)}
		</div>
	),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariant>
>(({ className, header, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			cardVariant({ header }),
			'bg-secondary rounded-t-lg',
			className,
		)}
		{...props}
	/>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			'text-2xl font-semibold leading-none tracking-tight',
			className,
		)}
		{...props}
	/>
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex items-center p-6 pt-0', className)}
		{...props}
	/>
));
CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
