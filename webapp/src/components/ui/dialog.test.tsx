import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, expect, test, vi } from 'vitest';
import { h } from 'preact';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog';

describe('Dialog primitives', () => {
  test('renders content, title, description and close button', () => {
    const onClose = vi.fn();

    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>My Title</DialogTitle>
          <DialogDescription>desc</DialogDescription>
          <DialogClose onClick={onClose}>Close</DialogClose>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText('Open')).toBeTruthy();
    expect(screen.getByText('My Title')).toBeTruthy();
    expect(screen.getByText('desc')).toBeTruthy();

    const closes = screen.getAllByText('Close');
    fireEvent.click(closes[0]);
    expect(onClose).toHaveBeenCalled();
  });
});
