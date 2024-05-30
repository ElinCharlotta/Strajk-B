import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookingInfo from './BookingInfo';
import { describe, it, expect, test } from 'vitest';

describe('BookingInfo', () => {


  it('should render input fields', () => {

    render(<BookingInfo />);
    // Kontrollera att input-fälten finns i dokumentet
    const dateInput = screen.getByTestId('input-Date');
    const timeInput = screen.getByTestId('input-Time');
    const awesomeBowlersInput = screen.getByTestId('input-Number of awesome bowlers');
    const lanesInput = screen.getByTestId('input-Number of lanes');

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(awesomeBowlersInput).toBeInTheDocument();
    expect(lanesInput).toBeInTheDocument();

  })
  it('should be able to add date, time, number of players and lanes', async () => {
    render(<BookingInfo />);

    const dateInput = screen.getByTestId('input-Date');
    const timeInput = screen.getByTestId('input-Time');
    const awesomeBowlersInput = screen.getByTestId('input-Number of awesome bowlers');
    const lanesInput = screen.getByTestId('input-Number of lanes');

    fireEvent.change(dateInput, { target: { value: '2024-05-21' } });
    fireEvent.change(timeInput, { target: { value: '00:42' } });
    fireEvent.change(awesomeBowlersInput, { target: { value: '2' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    await waitFor(() => {
      expect(dateInput.value).toBe('2024-05-21')
      expect(timeInput.value).toBe('00:42')
      expect(awesomeBowlersInput.value).toBe('2')
      expect(lanesInput.value).toBe('1')
    })

  });

});
