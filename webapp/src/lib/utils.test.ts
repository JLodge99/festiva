import { describe, expect, test } from 'vitest';
import { cn } from './utils';

describe('cn function', () => {
	test('should merge class names correctly', () => {
		const result = cn('class1', 'class2');
		expect(result).toBe('class1 class2');
	});

	test('should handle conditional classes', () => {
		const isConditional = true;
		const isHidden = false;
		const result = cn('base', isConditional && 'conditional', isHidden && 'hidden');
		expect(result).toBe('base conditional');
	});

	test('should handle undefined and null values', () => {
		const result = cn('base', undefined, null, 'valid');
		expect(result).toBe('base valid');
	});

	test('should handle empty strings', () => {
		const result = cn('base', '', 'valid');
		expect(result).toBe('base valid');
	});

	test('should handle arrays of classes', () => {
		const result = cn(['class1', 'class2'], 'class3');
		expect(result).toBe('class1 class2 class3');
	});

	test('should handle objects with boolean values', () => {
		const result = cn({
			'class1': true,
			'class2': false,
			'class3': true
		});
		expect(result).toBe('class1 class3');
	});

	test('should merge Tailwind classes correctly (deduplication)', () => {
		// This tests the twMerge functionality
		const result = cn('px-2 py-1', 'px-4');
		expect(result).toBe('py-1 px-4'); // px-4 should override px-2
	});

	test('should handle complex combinations', () => {
		const isActive = true;
		const isDisabled = false;
		const result = cn(
			'base-class',
			{
				'active': isActive,
				'disabled': isDisabled
			},
			isActive && 'active-state',
			['additional', 'classes']
		);
		expect(result).toBe('base-class active active-state additional classes');
	});

	test('should handle no arguments', () => {
		const result = cn();
		expect(result).toBe('');
	});

	test('should handle single argument', () => {
		const result = cn('single-class');
		expect(result).toBe('single-class');
	});
});