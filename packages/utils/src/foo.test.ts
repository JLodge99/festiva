import { test, expect, vi, describe } from 'vitest';
import { print } from './foo';

describe('logMessage', () => {
    test('print should print bar', () => {
        const consoleSpy = vi.spyOn(console, 'log');
        print()
        expect(consoleSpy).toHaveBeenCalled;
    
        consoleSpy.mockRestore();
    });
});
