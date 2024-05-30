import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Confirmation from "./Confirmation";

describe('Confirmation', () => {
    const mockSetConfirmation = vi.fn();

    const confirmationDetails = {
        "when": "2024-05-21T00:42",
        "lanes": "1",
        "people": "2",
        "shoes":["42", "39"],
        "price": 340,
        "id": "STR851VJQK",
        "active": true
    };

    it ('should render conformation information correctly', () => {
       render( <Confirmation
        confirmationDetails={confirmationDetails}
        setConfirmation={mockSetConfirmation}
        />
    );
        expect(screen.getByLabelText('When')).toBeInTheDocument();
        expect(screen.getByLabelText('Who')).toBeInTheDocument();
        expect(screen.getByLabelText('Lanes')).toBeInTheDocument();
        expect(screen.getByLabelText('Booking number')).toBeInTheDocument();
        expect(screen.getByText('340 sek')).toBeInTheDocument(); 
        screen.debug();

    });

    it("should render the information correctly", () => {
        render(
            <Confirmation
                confirmationDetails={confirmationDetails}
                setConfirmation={mockSetConfirmation}
            />
        )
        expect(screen.getByDisplayValue("2024-05-21 00:42")).toBeInTheDocument();
        expect(screen.getByDisplayValue("2")).toBeInTheDocument();
        expect(screen.getByDisplayValue("1")).toBeInTheDocument();
        expect(screen.getByDisplayValue("STR851VJQK")).toBeInTheDocument();
        expect(screen.getByText("340 sek")).toBeInTheDocument();
        screen.debug();
    });


    it("should display 'inga bookning gjord!' när det inte finns någon bokning aktiv", () => {
        render(
            <Confirmation
                confirmationDetails={{ ...confirmationDetails, active: false }}
                setConfirmation={mockSetConfirmation}
            />
        );


        const element = screen.queryByText(/inga bokning gjord!/i);
        expect(element).toBeInTheDocument();
    });
});
