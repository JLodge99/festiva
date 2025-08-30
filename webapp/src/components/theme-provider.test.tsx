import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, beforeEach, vi } from 'vitest';
import { ThemeProvider, useTheme } from './theme-provider';
import { h } from 'preact';

function DisplayTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="set-light" onClick={() => setTheme('light')}>set light</button>
    </div>
  );
}

describe('ThemeProvider and useTheme', () => {
  beforeEach(() => {
    // reset document classes and localStorage before each test
    document.documentElement.className = '';
    localStorage.clear();
    // ensure matchMedia exists (jsdom may not implement it)
    // @ts-ignore
    window.matchMedia = window.matchMedia ?? ((query: string) => ({ matches: false, addListener: () => {}, removeListener: () => {} }));
  });

  test('useTheme returns default context when used outside ThemeProvider', () => {
    function Consumer() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const ctx = useTheme();
      return <span data-testid="outside">{ctx.theme}</span>;
    }

    render(<Consumer />);
    const el = screen.getByTestId('outside');
    expect(el.textContent).toBe('system');
  });

  test('reads default theme from localStorage and applies class', async () => {
    localStorage.setItem('vite-ui-theme', 'dark');

    render(
      <ThemeProvider>
        <DisplayTheme />
      </ThemeProvider>,
    );

    const themeSpan = await screen.findByTestId('theme');
    expect(themeSpan.textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('system theme uses matchMedia to set class', async () => {
    // mock matchMedia to simulate dark preference
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, addListener: () => {}, removeListener: () => {} }));

    render(
      <ThemeProvider defaultTheme="system">
        <DisplayTheme />
      </ThemeProvider>,
    );

    const themeSpan = await screen.findByTestId('theme');
    expect(themeSpan.textContent).toBe('system');
    // system with matches=true should add dark class
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // cleanup stub
    // @ts-ignore
    vi.unstubAllGlobals && vi.unstubAllGlobals();
  });

  test('setTheme updates localStorage and document class', async () => {
    render(
      <ThemeProvider>
        <DisplayTheme />
      </ThemeProvider>,
    );

    const themeSpan = await screen.findByTestId('theme');
    expect(themeSpan.textContent).toBe('system');

    const btn = await screen.findByTestId('set-light');
    fireEvent.click(btn);

    // After clicking, localStorage should be updated and class should be applied
    expect(localStorage.getItem('vite-ui-theme')).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });
});
