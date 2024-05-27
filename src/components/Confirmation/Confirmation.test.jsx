import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Confirmation from "./Confirmation";

describe("Confirmation Component", () => {
    const mockSetConfirmation = vi.fn();
    const confirmationDetails = {
        "when": "2024-05-21T00:42",
        "lanes": "1",
        "people": "1",
        "shoes": ["39"],
        "price": 220,
        "id": "STR851VJQK",
        "active": true
    };


    it("should take user back to main page when Sweet, lets go! button is clicked", () => {
        render(
            <Confirmation
                confirmationDetails={confirmationDetails}
                setConfirmation={mockSetConfirmation}
            />
        );
        const backButton = screen.getByRole("button");
        fireEvent.click(backButton);
        expect(mockSetConfirmation).toHaveBeenCalledWith({});
    });

    it("should display inga bookning gjord! när inga bookningar är aktiva", () => {
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
