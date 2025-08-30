import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';

import { Button, buttonVariants } from './button';

describe('Button component', () => {
	test('should render with text content', () => {
		const { container } = render(<Button>Hello</Button>);
		expect(container.textContent).toMatch('Hello');
	});

	test('should render as button element by default', () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole('button');
		expect(button.tagName).toBe('BUTTON');
	});

	test('should apply default variant classes', () => {
		render(<Button>Default</Button>);
		const button = screen.getByRole('button');
		expect(button.className).toContain('bg-primary');
		expect(button.className).toContain('text-primary-foreground');
	});

	test('should apply variant classes correctly', () => {
		render(<Button variant="destructive">Delete</Button>);
		const button = screen.getByRole('button');
		expect(button.className).toContain('bg-destructive');
		expect(button.className).toContain('text-destructive-foreground');
	});

	test('should apply size classes correctly', () => {
		render(<Button size="sm">Small</Button>);
		const button = screen.getByRole('button');
		expect(button.className).toContain('h-9');
		expect(button.className).toContain('px-3');
	});

	test('should handle custom className', () => {
		render(<Button className="custom-class">Custom</Button>);
		const button = screen.getByRole('button');
		expect(button.className).toContain('custom-class');
	});

	test('should handle disabled state', () => {
		render(<Button disabled>Disabled</Button>);
		const button = screen.getByRole('button');
		expect(button.hasAttribute('disabled')).toBe(true);
	});

	test('should pass through other props', () => {
		render(<Button data-testid="test-button" type="submit">Submit</Button>);
		const button = screen.getByTestId('test-button');
		expect(button.getAttribute('type')).toBe('submit');
	});
});

describe('buttonVariants', () => {
	test('should generate correct classes for default variant', () => {
		const classes = buttonVariants();
		expect(classes).toContain('bg-primary');
		expect(classes).toContain('text-primary-foreground');
		expect(classes).toContain('h-10');
		expect(classes).toContain('px-4');
	});

	test('should generate correct classes for different variants', () => {
		const destructive = buttonVariants({ variant: 'destructive' });
		expect(destructive).toContain('bg-destructive');

		const outline = buttonVariants({ variant: 'outline' });
		expect(outline).toContain('border');
		expect(outline).toContain('bg-background');
	});

	test('should generate correct classes for different sizes', () => {
		const small = buttonVariants({ size: 'sm' });
		expect(small).toContain('h-9');
		expect(small).toContain('px-3');

		const large = buttonVariants({ size: 'lg' });
		expect(large).toContain('h-11');
		expect(large).toContain('px-8');
	});
});
