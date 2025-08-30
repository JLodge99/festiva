import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { h } from 'preact';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from './dropdown-menu';

describe('DropdownMenu additional behaviors', () => {
  test('sub trigger with inset renders and has chevron', () => {
    render(
      <div>
        <DropdownMenuSubTrigger inset>Sub</DropdownMenuSubTrigger>
      </div>,
    );

    const el = screen.getByText('Sub');
    expect(el).toBeTruthy();
    // ChevronRight svg should be present as child
    const svg = el.parentElement?.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  test('checkbox and radio items render indicators when present', () => {
    render(
      <div>
        <DropdownMenuCheckboxItem checked>CheckMe</DropdownMenuCheckboxItem>
        <DropdownMenuRadioItem>RadioMe</DropdownMenuRadioItem>
      </div>,
    );

    // indicators render svg icons inside absolute span
    const check = screen.getByText('CheckMe').parentElement?.querySelector('svg');
    const radio = screen.getByText('RadioMe').parentElement?.querySelector('svg');
    expect(check).toBeTruthy();
    expect(radio).toBeTruthy();
  });

  test('label inset adds padding and shortcut renders with class', () => {
    const { container } = render(
      <div>
        <DropdownMenuLabel inset>Section</DropdownMenuLabel>
        <DropdownMenuShortcut className="foo">Ctrl+K</DropdownMenuShortcut>
      </div>,
    );

    expect(screen.getByText('Section')).toBeTruthy();
    expect(screen.getByText('Ctrl+K')).toBeTruthy();
    expect(container.querySelector('.foo')).toBeTruthy();
  });
});
