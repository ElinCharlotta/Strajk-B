import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


import Shoes from './Shoes';

describe('Shoes', () => {
    it('should allow typing in the input fields', () => {

        const shoes = [{ id: '1' }]

        render(
            <Shoes
                shoes={shoes}
            />
        );

        const shoeInput = screen.getByTestId('input-1');
        expect(shoeInput).toBeInTheDocument();

        fireEvent.change(shoeInput, { target: { value: '42' } });
        expect(shoeInput.value).toBe('42');
    });
    it('should allow the user to add shoe size inputfild', () => {
        const shoes = [{ id: '1' }, { id: '2' }];

        render(
            <Shoes
                shoes={shoes}
                addShoe={() => {}}
            />
        );

        // Klicka på knappen för att lägga till ett nytt inputfield 
        fireEvent.click(screen.getByText('+'));

        // Kontrollera att ett nytt inputfield  har lagts till
        const newShoeInput = screen.getByTestId('input-2');
        console.log('NY SKO?:', newShoeInput);
     
        expect(newShoeInput).toHaveAttribute('data-testid', 'input-2');
        // Skriv in ett värde i  inputfield 
        fireEvent.change(newShoeInput, { target: { value: '39' } });
        expect(newShoeInput.value).toBe('39');

       
        // Kontrollera att ett nytt inputfield har lagts till
        const secondNewShoeInput = screen.getByTestId('input-2');
        expect(secondNewShoeInput).toBeInTheDocument();
        console.log('NY SKO:', secondNewShoeInput);

    }); 

    describe('Shoes', () => { 
        it('should allow user to remove shoes input filed', () => {

            const removeShoe = vi.fn(); //Mocka en remove fuction
            const addShoe = vi.fn();

            const shoes = [{ id: 'player1', size: '39' }, { id: 'player2', size: '42' }];
        
            render(<Shoes  addShoe={addShoe} removeShoe={removeShoe} shoes={shoes} />);
        
            const removeButtons = screen.getAllByText('-');
            fireEvent.click(removeButtons[0]);
            fireEvent.click(removeButtons[1]);
        
            console.log(screen.debug());
        
            expect(removeShoe).toHaveBeenCalledWith('player1');
            expect(removeShoe).toHaveBeenCalledWith('player2');
        
            expect(removeShoe).toHaveBeenCalledTimes(2);
            
        });
    });
});