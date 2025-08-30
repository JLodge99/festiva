import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { ModeToggle } from './mode-toggle';
import { h } from 'preact';

// Provide a simple ThemeProvider mock harness to capture setTheme
import * as Theme from './theme-provider';

function MockProvider({ children }:{children:any}){
  // create a simple provider that supplies setTheme
  // @ts-ignore
  const original = Theme.useTheme;
  // stubbed provider isn't necessary, we'll stub the hook
  return children;
}

describe('ModeToggle', () => {
  test('renders trigger and menu items, clicking items calls setTheme', async () => {
    const setTheme = vi.fn();
    // stub useTheme to return our setter
    vi.stubModule('../theme-provider', () => ({
      // re-export everything but override useTheme
      ...require('../theme-provider'),
      useTheme: () => ({ theme: 'system', setTheme }),
    }));

    render(<ModeToggle />);

    // the trigger has a visually hidden span with text
    const sr = screen.getByText('Toggle theme');
    expect(sr).toBeTruthy();

    // the menu items are present in the document (rendered but may be hidden)
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

    // cleanup stub
    vi.unstubAllModules && vi.unstubAllModules();
  });
});
