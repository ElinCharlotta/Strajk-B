import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import Booking from './Booking';
import { expect, it } from 'vitest';


describe('Booking', () => {
  it('should be able to make a booking and get a total price and a booking number', async () => {

    render(<Booking />);

    const dateInput = screen.getByTestId('input-Date');
    const timeInput = screen.getByTestId('input-Time');
    const peopleInput = screen.getByTestId('input-Number of awesome bowlers');
    const lanesInput = screen.getByTestId('input-Number of lanes');

    fireEvent.change(dateInput, { target: { value: '2024-05-21' } });
    fireEvent.change(timeInput, { target: { value: '00:42' } });
    fireEvent.change(peopleInput, { target: { value: '2' } });
    fireEvent.change(lanesInput, { target: { value: '1' } });

    const addButton = screen.getByText('+');

    fireEvent.click(addButton);
    fireEvent.click(addButton);

    await waitFor(() => {

      const shoeInput = screen.getByTestId("input-Shoe size / person 1");
      const shoeInput2 = screen.getByTestId("input-Shoe size / person 2");

      fireEvent.change(shoeInput, { target: { value: '42' } });
      fireEvent.change(shoeInput2, { target: { value: '38' } });

    });

    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    await waitFor(() => {
      expect(screen.getByText('See you soon!')).toBeInTheDocument();
      expect(screen.getByDisplayValue(/2024-05-21 00:42/i)).toBeInTheDocument();
      expect(screen.getByDisplayValue('STR851VJQK')).toBeInTheDocument();
      expect(screen.getByText('340 sek')).toBeInTheDocument();
      screen.debug();

    });

    const backButton = screen.getByText("Sweet, let's go!");

    fireEvent.click(backButton);

    await waitFor(() => {
      // Kollar att hamnar på main page genom att vi förväntar oss att dessa element ska finnas på sidan.
      expect(screen.getByRole('heading', {name: /Booking/i })).toBeInTheDocument();
      expect(screen.getByTestId('input-Date')).toBeInTheDocument();
      expect(screen.getByText(/strIIIIIike!/i)).toBeInTheDocument();

    })
    screen.debug();
  });


  /// ERROR HANTERING ///

  it('should display error message when trying to book without filling out all required fields', async () => {
    render(<Booking />);

    fireEvent.click(screen.getByText(/strIIIIIike!/i));


    await waitFor(() => {
      expect(screen.getByText(/Fill out all the fields and make sure that people and shoes is the same number./i)).toBeInTheDocument();
    });
  });

  it('should display error message when number of shoe sizes does not match number of awesomw bowlers', async () => {
    render(<Booking />);


    fireEvent.change(screen.getByTestId('input-Date'), { target: { value: '2024-05-21' } });
    fireEvent.change(screen.getByTestId('input-Time'), { target: { value: '00:42' } });
    fireEvent.change(screen.getByTestId('input-Number of awesome bowlers'), { target: { value: '2' } });
    fireEvent.change(screen.getByTestId('input-Number of lanes'), { target: { value: '1' } });

    // lägger till skor för 1 person
    fireEvent.click(screen.getByText('+'));
    fireEvent.change(screen.getByTestId("input-Shoe size / person 1"), { target: { value: '42' } });


    fireEvent.click(screen.getByText('strIIIIIike!'));


    await waitFor(() => {
      expect(screen.getByText('Fill out all the fields and make sure that people and shoes is the same number.')).toBeInTheDocument();
    });
  });

  it('should display error message when number of awesome bowlers exceeds max capacity per lane', async () => {
    render(<Booking />);

    fireEvent.change(screen.getByTestId('input-Date'), { target: { value: '2024-05-21' } });
    fireEvent.change(screen.getByTestId('input-Time'), { target: { value: '00:42' } });
    fireEvent.change(screen.getByTestId('input-Number of awesome bowlers'), { target: { value: '6' } });
    fireEvent.change(screen.getByTestId('input-Number of lanes'), { target: { value: '1' } });

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));

    fireEvent.change(screen.getByTestId("input-Shoe size / person 1"), { target: { value: '42' } });
    fireEvent.change(screen.getByTestId("input-Shoe size / person 2"), { target: { value: '38' } });
    fireEvent.change(screen.getByTestId("input-Shoe size / person 3"), { target: { value: '38' } });
    fireEvent.change(screen.getByTestId("input-Shoe size / person 4"), { target: { value: '38' } });
    fireEvent.change(screen.getByTestId("input-Shoe size / person 5"), { target: { value: '38' } });
    fireEvent.change(screen.getByTestId("input-Shoe size / person 6"), { target: { value: '38' } });

    fireEvent.click(screen.getByText('strIIIIIike!'));

    await waitFor(() => {
      expect(screen.queryByText('Fill out all the fields and make sure that people and shoes is the same number.')).toBeInTheDocument();
      screen.debug();
    });
  });

});