import { describe, expect, test } from 'vitest';
import { trimArrayEnd, isParameterObject } from './helpers';

describe('trimArrayEnd function', () => {
	test('should remove undefined values from the end of array', () => {
		const input = [1, 2, 3, undefined, undefined];
		const result = trimArrayEnd(input);
		expect(result).toEqual([1, 2, 3]);
	});

	test('should return original array if no undefined values at end', () => {
		const input = [1, 2, 3, 4, 5];
		const result = trimArrayEnd(input);
		expect(result).toBe(input); // Should be the same reference
	});

	test('should handle array with undefined values in middle', () => {
		const input = [1, undefined, 3, undefined, undefined];
		const result = trimArrayEnd(input);
		expect(result).toEqual([1, undefined, 3]);
	});

	test('should handle empty array', () => {
		const input: any[] = [];
		const result = trimArrayEnd(input);
		expect(result).toEqual([]);
	});

	test('should handle array with all undefined values', () => {
		const input = [undefined, undefined, undefined];
		const result = trimArrayEnd(input);
		expect(result).toEqual([]);
	});

	test('should handle array with single defined value', () => {
		const input = [42];
		const result = trimArrayEnd(input);
		expect(result).toBe(input);
	});

	test('should handle array with single undefined value', () => {
		const input = [undefined];
		const result = trimArrayEnd(input);
		expect(result).toEqual([]);
	});
});

describe('isParameterObject function', () => {
	test('should return false for null and undefined', () => {
		expect(isParameterObject(null)).toBe(false);
		expect(isParameterObject(undefined)).toBe(false);
	});

	test('should return false for arrays', () => {
		expect(isParameterObject([])).toBe(false);
		expect(isParameterObject([1, 2, 3])).toBe(false);
		expect(isParameterObject(['a', 'b'])).toBe(false);
	});

	test('should return false for primitive types', () => {
		expect(isParameterObject(42)).toBe(false);
		expect(isParameterObject('string')).toBe(false);
		expect(isParameterObject(true)).toBe(false);
		expect(isParameterObject(false)).toBe(false);
	});

	test('should return false for Date objects', () => {
		expect(isParameterObject(new Date())).toBe(false);
	});

	test('should return true for plain objects', () => {
		expect(isParameterObject({})).toBe(true);
		expect(isParameterObject({ key: 'value' })).toBe(true);
		expect(isParameterObject({ a: 1, b: 2 })).toBe(true);
	});

	test('should return true for object instances', () => {
		class TestClass {}
		expect(isParameterObject(new TestClass())).toBe(true);
	});

	test('should handle edge cases', () => {
		expect(isParameterObject(Object.create(null))).toBe(true);
		expect(isParameterObject({ length: 5 })).toBe(true); // Object with length property, not array
	});
});