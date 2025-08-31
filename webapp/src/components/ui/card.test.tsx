import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { h } from 'preact';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

describe('Card component', () => {
  test('renders header, title and description; shows badge when selected', () => {
    const { container } = render(
      <Card border="selected">
        <CardHeader header="selected">
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Desc</CardDescription>
        </CardContent>
      </Card>,
    );

    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('Desc')).toBeTruthy();
    // Badge "Today" should be rendered due to selected border/header
    expect(container.textContent).toContain('Today');
  });

  test('renders country badge when country prop provided', () => {
    const { container } = render(<Card country="US" />);
    expect(container.textContent).toContain('US');
  });
});
