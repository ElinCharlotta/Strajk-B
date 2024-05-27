import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import Booking from './Booking';
import { expect } from 'vitest';

const confirmationDetails = {
    when: "2024-05-21T00:42",
    lanes: "1",
    people: "1",
    shoes: ["39"],
    price: 220,
    id: "STR851VJQK",
    active: true
  };

  console.log(confirmationDetails);

describe('Booking', () => {
  it('should be able to give a total price and a booking number', async () => {
    const { container } = render(<Booking />);

    const dateInput = screen.getByTestId('input-when');
    const timeInput = screen.getByTestId('input-time');
    const peopleInput = screen.getByTestId('input-people');
    const lanesInput = screen.getByTestId('input-lanes');

    const addButton = screen.getByText("+");

    fireEvent.click(addButton);
    fireEvent.click(addButton);
  
    let shoeInput = container.querySelectorAll(".shoes__input");

    expect(shoeInput.length).toBe(2);
    console.log('Här är det skor: ', shoeInput);
    console.log('HUR MÅNGA SKOR?!:', shoeInput.length);

    fireEvent.change(shoeInput[0], { target: { value: '42' } });
    fireEvent.change(shoeInput[1], { target: { value: '38' } });

    expect(shoeInput[0].value).toBe('42');
    expect(shoeInput[1].value).toBe('38');
   
    fireEvent.change(dateInput, {target: { value: '2024-05-31'}});
    fireEvent.change(timeInput, { target: { value: '14:00' } });
    fireEvent.change(peopleInput, { target: { value: '2' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    fireEvent.click(screen.getByText('strIIIIIike!'));
  
    await waitFor(() => {
        expect(screen.getByText('See you soon!')).toBeInTheDocument();
        expect(screen.getByDisplayValue('STR851VJQK')).toBeInTheDocument();
        expect(screen.getByText('220 sek')).toBeInTheDocument();
        screen.debug();
      });
     
  });

});
