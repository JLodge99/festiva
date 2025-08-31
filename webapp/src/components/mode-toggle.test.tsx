import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// create a mock setTheme we can assert against
const setTheme = vi.fn();

// mock the theme-provider module (used by ModeToggle via '@/components/theme-provider')
vi.mock('@/components/theme-provider', () => ({
  ThemeProvider: ({ children }: any) => children,
  useTheme: () => ({ theme: 'system', setTheme }),
}));

import { ModeToggle } from './mode-toggle';

describe('ModeToggle', () => {
  test('renders trigger and menu items, clicking items calls setTheme', () => {
    render(<ModeToggle />);

    // the trigger has a visually hidden span with text
    const sr = screen.getByText('Toggle theme');
    expect(sr).toBeTruthy();

    // the menu items are present
    const light = screen.getByText('Light');
    const dark = screen.getByText('Dark');
    const system = screen.getByText('System');

    // simulate clicks
    fireEvent.click(light);
    fireEvent.click(dark);
    fireEvent.click(system);

    expect(setTheme).toHaveBeenCalledTimes(3);
    expect(setTheme).toHaveBeenCalledWith('light');
    expect(setTheme).toHaveBeenCalledWith('dark');
    expect(setTheme).toHaveBeenCalledWith('system');
  });
});
