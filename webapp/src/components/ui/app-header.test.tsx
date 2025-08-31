import { render, screen } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// mock ModeToggle to a simple placeholder so we can assert it's rendered
vi.mock('@/components/mode-toggle', () => ({
  ModeToggle: () => <div data-testid="mode-toggle">mode</div>,
}));

// mock SVG imports used by Header
vi.mock('../../assets/GitHub_Invertocat_Dark.svg?react', () => ({
  default: (props: any) => <svg data-testid="gh-dark" {...props} />,
}));
vi.mock('../../assets/GitHub_Invertocat_Light.svg?react', () => ({
  default: (props: any) => <svg data-testid="gh-light" {...props} />,
}));

import { Header } from './app-header';

describe('Header', () => {
  test('renders title and children components', () => {
    render(<Header />);

    // title
    expect(screen.getByText('Festiva')).toBeTruthy();

    // mode toggle present (mocked)
    expect(screen.getByTestId('mode-toggle')).toBeTruthy();

    // github icons rendered
    expect(screen.getByTestId('gh-dark')).toBeTruthy();
    expect(screen.getByTestId('gh-light')).toBeTruthy();
  });
});
