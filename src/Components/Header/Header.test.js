import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Use Arrange, Act, Assertion method.

describe("Testing Header Component", () => {
    
    // Arrange
    it("Test Header render properly or not", () => {

        //Act
        render(<Header/>);

        // Assertion
        const text = screen.queryByTestId('header-text').innerHTML;
        expect(text).toBe("NASA Media Search");
    });
});