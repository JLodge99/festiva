import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// ensure radix dropdown primitives are mocked by vitest alias (configured in vitest.config.ts)
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu';

describe('DropdownMenu interactions', () => {
  test('renders trigger and items; clicking item calls handler', () => {
    const onSelect = vi.fn();

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="trigger">Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onSelect('one')}>One</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelect('two')}>Two</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    // trigger presence
    expect(screen.getByTestId('trigger')).toBeTruthy();

    // items are present (our mock renders Content/Item synchronously)
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();

    // click items
    fireEvent.click(screen.getByText('One'));
    fireEvent.click(screen.getByText('Two'));

    expect(onSelect).toHaveBeenCalledTimes(2);
    expect(onSelect).toHaveBeenCalledWith('one');
    expect(onSelect).toHaveBeenCalledWith('two');
  });
});
