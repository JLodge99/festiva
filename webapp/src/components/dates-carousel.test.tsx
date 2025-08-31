import { render, screen } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// Mock useMediaQuery to control responsive branches
vi.mock('@uidotdev/usehooks', () => ({ useMediaQuery: (q: string) => q.includes('min-width: 640px') ? false : true }));

// Mock DateCard to avoid heavy internals; keep simple render
vi.mock('./date-card', () => ({ DateCard: ({ data }: any) => h('div', {}, `card-${data.name}`) }));

// Import after mocks
import { DatesCarousel } from './dates-carousel';

const sample = [
  { date: new Date('2024-01-01'), localName: 'New Year', name: 'New Year', countryCode: 'US' },
  { date: new Date('2024-02-01'), localName: 'Feb Day', name: 'Feb Day', countryCode: 'US' },
];

describe('DatesCarousel', () => {
  test('renders header when provided and date cards when not loading', () => {
    render(<DatesCarousel dates={sample as any} header={<span>Header</span>} loading={false} />);

    expect(screen.getByText('Header')).toBeTruthy();
    expect(screen.getByText('card-New Year')).toBeTruthy();
    expect(screen.getByText('card-Feb Day')).toBeTruthy();
  });

  test('renders skeleton when loading', () => {
    render(<DatesCarousel dates={[]} loading={true} />);
    // skeleton renders CardSkeleton elements as Skeleton placeholders
    expect(document.querySelectorAll('.h-\[20px\]').length).toBeGreaterThan(0);
  });
});
