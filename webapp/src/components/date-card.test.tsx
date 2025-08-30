import { render, screen } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { h } from 'preact';
import { DateCard } from './date-card';

// mock the query hook to return country data
vi.mock('@festiva/queries/src/axios-client/Query', () => ({
  useCountryAvailableCountriesQuery: () => ({ data: [{ countryCode: 'US', name: 'United States' }] }),
}));

describe('DateCard', () => {
  test('renders date parts and uses nth suffix', () => {
    const date = new Date('2024-01-01');
    const data = { date, localName: 'New Year', name: 'New Year', countryCode: 'US' } as any;

    render(<DateCard data={data} showCountry />);

    expect(screen.getByText('New Year')).toBeTruthy();
    expect(screen.getByText(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/)).toBeTruthy();
    expect(screen.getByText('1st')).toBeTruthy();
    expect(screen.getByText('January')).toBeTruthy();
  });

  test('marks today correctly', () => {
    const today = new Date();
    const data = { date: today, localName: 'Today', name: 'Today', countryCode: 'US' } as any;

    render(<DateCard data={data} showCountry />);

    // Badge "Today" should be present due to isToday
    expect(screen.getByText('Today')).toBeTruthy();
  });
});
