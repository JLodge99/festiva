import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { h } from 'preact';
import { Separator } from './separator';

describe('Separator', () => {
  test('renders horizontal separator by default with correct class', () => {
    const { container } = render(<Separator data-testid="sep" />);
    const el = container.querySelector('[data-testid="sep"]');
    expect(el).toBeTruthy();
    expect(el?.className).toContain('h-[1px] w-full');
  });

  test('renders vertical separator when orientation is vertical', () => {
    const { container } = render(<Separator orientation="vertical" data-testid="sepv" />);
    const el = container.querySelector('[data-testid="sepv"]');
    expect(el).toBeTruthy();
    expect(el?.className).toContain('h-full w-[1px]');
  });
});
