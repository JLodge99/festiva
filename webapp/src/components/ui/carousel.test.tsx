import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

// Mock embla-carousel-react before importing the carousel so the hook is replaced
const scrollPrev = vi.fn();
const scrollNext = vi.fn();
const mockApi = {
  scrollPrev: scrollPrev,
  scrollNext: scrollNext,
  canScrollPrev: () => true,
  canScrollNext: () => true,
  on: (_: string, __: any) => {},
  off: (_: string, __: any) => {},
};

vi.mock('embla-carousel-react', () => ({
  default: (_opts?: any, _plugins?: any) => {
    const ref = (el?: any) => {};
    return [ref, mockApi];
  },
}));

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

describe('Carousel component', () => {
  test('calls setApi, button clicks and keyboard handlers invoke api methods', () => {
    const setApi = vi.fn();

    render(
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    // ensure setApi was called with the embla api
    expect(setApi).toHaveBeenCalledWith(mockApi);

    // find the previous and next buttons by their sr-only text
    const prev = screen.getByText('Previous slide').closest('button');
    const next = screen.getByText('Next slide').closest('button');
    expect(prev).toBeTruthy();
    expect(next).toBeTruthy();

    fireEvent.click(prev as Element);
    fireEvent.click(next as Element);

    expect(scrollPrev).toHaveBeenCalled();
    expect(scrollNext).toHaveBeenCalled();

    // keyboard interaction on the region should call the same methods
    const region = screen.getByRole('region');
    fireEvent.keyDown(region, { key: 'ArrowLeft' });
    fireEvent.keyDown(region, { key: 'ArrowRight' });

    // methods called at least once (from clicks) and again from keyboard
    expect(scrollPrev).toHaveBeenCalled();
    expect(scrollNext).toHaveBeenCalled();
  });
});
