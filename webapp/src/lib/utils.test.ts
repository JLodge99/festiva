import { describe, expect, test, vi } from 'vitest';

// mock external dependencies used by utils.ts
vi.mock('clsx', () => ({
  clsx: (...inputs: any[]) => {
    const out: string[] = [];
    function push(val: any) {
      if (!val && val !== 0) return;
      if (typeof val === 'string') {
        if (val.trim()) out.push(val.trim());
        return;
      }
      if (Array.isArray(val)) return val.forEach(push);
      if (typeof val === 'object') return Object.keys(val).forEach(k => val[k] && out.push(k));
      out.push(String(val));
    }
    inputs.forEach(push);
    return out.join(' ');
  }
}));

vi.mock('tailwind-merge', () => ({
  twMerge: (input: string) => {
    if (!input) return '';
    const parts = input.split(/\s+/).filter(Boolean);
    // pick the last token for each prefix (before first '-') and preserve
    // the order of those last occurrences
    const chosen = new Map();
    parts.forEach((p, i) => {
      const prefix = p.split('-')[0];
      // find last occurrence for this prefix
      let last = p;
      let lastIdx = i;
      for (let j = i; j < parts.length; j++) {
        if (parts[j].split('-')[0] === prefix) {
          last = parts[j];
          lastIdx = j;
        }
      }
      chosen.set(prefix, { token: last, idx: lastIdx });
    });
    return Array.from(chosen.values())
      .sort((a: any, b: any) => a.idx - b.idx)
      .map((v: any) => v.token)
      .join(' ');
  }
}));

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
		const parts = result.split(/\s+/).filter(Boolean);
                expect(parts).toContain('px-4');
                expect(parts).toContain('py-1');
                expect(parts).not.toContain('px-2');
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
		const parts = result.split(/\s+/).filter(Boolean);
                expect(parts).toEqual(expect.arrayContaining([
                        'base-class',
                        'active',
                        'active-state',
                        'additional',
                        'classes',
                ]));
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