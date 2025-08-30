import { describe, expect, test } from 'vitest';
import { nth } from './util';

describe('nth function', () => {
	test('should return "st" for numbers ending in 1 (except 11)', () => {
		expect(nth(1)).toBe('st');
		expect(nth(21)).toBe('st');
		expect(nth(31)).toBe('st');
		expect(nth(101)).toBe('st');
		expect(nth(121)).toBe('st');
	});

	test('should return "nd" for numbers ending in 2 (except 12)', () => {
		expect(nth(2)).toBe('nd');
		expect(nth(22)).toBe('nd');
		expect(nth(32)).toBe('nd');
		expect(nth(102)).toBe('nd');
		expect(nth(122)).toBe('nd');
	});

	test('should return "rd" for numbers ending in 3 (except 13)', () => {
		expect(nth(3)).toBe('rd');
		expect(nth(23)).toBe('rd');
		expect(nth(33)).toBe('rd');
		expect(nth(103)).toBe('rd');
		expect(nth(123)).toBe('rd');
	});

	test('should return "th" for numbers 11, 12, 13', () => {
		expect(nth(11)).toBe('th');
		expect(nth(12)).toBe('th');
		expect(nth(13)).toBe('th');
	});

	test('should handle numbers ending in 11, 12, 13 correctly (not special case)', () => {
		expect(nth(111)).toBe('st'); // 111 % 10 = 1, so 'st'
		expect(nth(112)).toBe('nd'); // 112 % 10 = 2, so 'nd'
		expect(nth(113)).toBe('rd'); // 113 % 10 = 3, so 'rd'
	});

	test('should return "th" for numbers ending in 4-10, 0', () => {
		expect(nth(4)).toBe('th');
		expect(nth(5)).toBe('th');
		expect(nth(6)).toBe('th');
		expect(nth(7)).toBe('th');
		expect(nth(8)).toBe('th');
		expect(nth(9)).toBe('th');
		expect(nth(10)).toBe('th');
		expect(nth(0)).toBe('th');
		expect(nth(20)).toBe('th');
		expect(nth(100)).toBe('th');
	});

	test('should handle edge cases', () => {
		expect(nth(14)).toBe('th');
		expect(nth(15)).toBe('th');
		expect(nth(16)).toBe('th');
		expect(nth(17)).toBe('th');
		expect(nth(18)).toBe('th');
		expect(nth(19)).toBe('th');
		expect(nth(20)).toBe('th');
	});

	test('should handle large numbers correctly', () => {
		expect(nth(1001)).toBe('st');
		expect(nth(1002)).toBe('nd');
		expect(nth(1003)).toBe('rd');
		expect(nth(1011)).toBe('st'); // 1011 % 10 = 1, so 'st'
		expect(nth(1012)).toBe('nd'); // 1012 % 10 = 2, so 'nd'
		expect(nth(1013)).toBe('rd'); // 1013 % 10 = 3, so 'rd'
	});
});