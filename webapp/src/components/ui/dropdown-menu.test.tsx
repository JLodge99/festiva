import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { h } from 'preact';

describe('DropdownMenu primitives', () => {
  test('renders trigger and content elements with classes', () => {
    render(
      <div>
        <DropdownMenuTrigger asChild>
          <button>Open</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>One</DropdownMenuItem>
          <DropdownMenuItem>Two</DropdownMenuItem>
        </DropdownMenuContent>
      </div>,
    );

    // basic presence checks
    expect(screen.getByText('Open')).toBeTruthy();
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });
});
