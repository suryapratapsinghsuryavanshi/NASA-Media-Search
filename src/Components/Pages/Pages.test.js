import React from 'react';
import { render, screen } from '@testing-library/react';
import Pages from './Pages';

describe("Testing Pages Component", () => {
    
    // Arrange
    it("Test Page Component render the data properly or not", () => {
        const data = require('./constent_data');
        const keywords = [
            "Moon",
            "Mars",
            "Forward to the Moon",
            "Super Blue Moon",
            "Lunar Eclipse",
            "blood moon",
            "observe",
            "enthusiast"
        ]
        const query = "mooon";

        // Act
        render(<Pages search_data={data} keywords={keywords} search_query={query}/>);

        // Assertion
        expect(screen.queryByTestId("search-query").innerHTML).toBe(`Search Result for ${query}`);
        keywords.map(ele => {
            expect(screen.queryByText(`${ele}`).innerHTML).toBe(ele);
        });
        expect(screen.queryByText('< Previous').innerHTML).toBe(" &lt; Previous");
        expect(screen.queryByText('Next >').innerHTML).toBe("Next &gt;");
    });
});