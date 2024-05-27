import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookingInfo from './BookingInfo';
import { describe, it, expect } from 'vitest';

describe('BookingInfo', () => {
  it('should be able to add date, time, number of players and lanes', async () => {
    render(<BookingInfo />);

      const dateInput = screen.getByTestId('input-when');
      const timeInput = screen.getByTestId('input-time');
      const awesomeBowlersInput = screen.getByTestId('input-people');
      const lanesInput = screen.getByTestId('input-lanes');

      fireEvent.change(dateInput, {target: { value: '2024-05-22'}});
      fireEvent.change(timeInput, { target: { value: '10:00' } });
      fireEvent.change(awesomeBowlersInput, { target: { value: '4' } });
      fireEvent.change(lanesInput, { target: { value: '2' } });

      await waitFor(() => {
          expect(dateInput.value).toBe('2024-05-22')
          expect(timeInput.value).toBe('10:00')
          expect(awesomeBowlersInput.value).toBe('4')
          expect(lanesInput.value).toBe('2')
      })

});

});
