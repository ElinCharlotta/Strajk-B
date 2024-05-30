import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useState } from 'react';
import Shoes from './Shoes';
import { nanoid } from 'nanoid';

describe('Shoes', () => {
    const mockAddShoe = vi.fn();
    const mockRemoveShoe = vi.fn();


    const shoesOriginalState = [
        { id: nanoid(), size: "" },
        { id: nanoid(), size: "" }
    ];

    const ShoesState = () => {
        const [shoes, setShoes] = useState(shoesOriginalState);

        const removeShoe = (id) => {
            setShoes(shoes.filter(shoe => shoe.id !== id));
            mockRemoveShoe();
        };

        return (
            <Shoes
                addShoe={mockAddShoe}
                removeShoe={removeShoe}
                shoes={shoes}
            />
        );
    };


    beforeEach(() => {
        render(<ShoesState />);
    });


    it('should allow typing in the input fields', () => {
        const shoeInput = screen.getByLabelText('Shoe size / person 1');
        expect(shoeInput).toBeInTheDocument();

        fireEvent.change(shoeInput, { target: { value: '42' } });
        expect(shoeInput.value).toBe('42');
    });

    it('should allow the user to add a shoe size input field', () => {

        // Klicka på knappen för att lägga till ett nytt inputfield 
        fireEvent.click(screen.getByText('+'));

        // Kontrollera att ett nytt input field  har lagts till
        const newShoeInput = screen.getByLabelText('Shoe size / person 1');
        expect(newShoeInput).toBeInTheDocument();

        fireEvent.change(newShoeInput, { target: { value: '39' } });
        expect(newShoeInput.value).toBe('39');

        console.log('VAD HAR DU FÖR STORLEK:::',newShoeInput.value);
    });



    it('should allow user to remove shoes input filed', async () => {
        fireEvent.click(screen.getByText('+'));
        await waitFor(() => {
            const newShoeInput = screen.getByLabelText('Shoe size / person 1');
            expect(newShoeInput).toBeInTheDocument();
        });

       screen.debug();

        const removeButtons = screen.getAllByText('-');
        fireEvent.click(removeButtons[0]);


        expect(screen.queryByLabelText('Shoe size / person 2')).not.toBeInTheDocument();
        expect(mockRemoveShoe).toHaveBeenCalledTimes(1);
        screen.debug();

    });
});

