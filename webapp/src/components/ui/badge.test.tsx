import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { Badge, badgeVariants } from './badge';

describe('Badge component', () => {
  test('renders children and default classes', () => {
    render(<Badge>New</Badge>);
    const el = screen.getByText('New');
    expect(el).toBeTruthy();
    // default variant should include bg-primary (from test-mock cva it will be part of string)
    expect(el.className).toContain('bg-primary');
  });

  test('applies variant and custom className', () => {
    render(<Badge variant="destructive" className="my-custom">Delete</Badge>);
    const el = screen.getByText('Delete');
    expect(el.className).toContain('bg-destructive');
    expect(el.className).toContain('my-custom');
  });
});

describe('badgeVariants function', () => {
  test('returns base classes and variant variants', () => {
    const def = badgeVariants();
    expect(def).toContain('inline-flex');

    const secondary = badgeVariants({ variant: 'secondary' });
    expect(secondary).toContain('bg-secondary');
  });
});
