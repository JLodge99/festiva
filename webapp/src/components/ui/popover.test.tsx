import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { h } from 'preact';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

describe('Popover primitives', () => {
  test('renders trigger and content', () => {
    render(
      <Popover>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );

    expect(screen.getByText('Trigger')).toBeTruthy();
    expect(screen.getByText('Content')).toBeTruthy();
  });
});
