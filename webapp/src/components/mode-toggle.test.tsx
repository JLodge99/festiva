import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// Provide a simple ThemeProvider mock harness to capture setTheme

function MockProvider({ children }:{children:any}){
  return children;
}

describe('ModeToggle', () => {
  test('renders trigger and menu items, clicking items calls setTheme', async () => {
    const setTheme = vi.fn();

    // mock the theme-provider module before importing ModeToggle
    vi.mock('./theme-provider', () => ({
      ThemeProvider: ({ children }: any) => children,
      useTheme: () => ({ theme: 'system', setTheme }),
    }));

    // import after mock so the module uses the mocked hook
    const { ModeToggle } = await import('./mode-toggle');
    const { render, screen, fireEvent } = await import('@testing-library/preact');

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

    // cleanup
    vi.resetModules();
    vi.clearAllMocks();
  });
});
