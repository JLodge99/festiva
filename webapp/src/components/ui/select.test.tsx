import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './select';

describe('Select primitives', () => {
  test('renders trigger, value and items; clicking item triggers onClick', () => {
    const onClick = vi.fn();
    render(
      <Select>
        <SelectTrigger>Choose</SelectTrigger>
        <SelectValue>One</SelectValue>
        <SelectContent>
          <SelectItem onClick={() => onClick('a')}>A</SelectItem>
          <SelectItem onClick={() => onClick('b')}>B</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Choose')).toBeTruthy();
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('A')).toBeTruthy();
    expect(screen.getByText('B')).toBeTruthy();

    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('B'));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
