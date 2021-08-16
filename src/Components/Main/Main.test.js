import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Main from './Main';

jest.mock('axios');

// Use Arrange, Act, Assertion method.

describe("Testing Main Component", () => {  

    // Arrange
    it("If main in loading state", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {
            data: []
        } }));

        // Act
        render(<Main/>);

        // Assertion
        const text = screen.queryByTestId("loading-text").innerHTML;
        expect(text).toBe("Loading.....");
    });


    // Arrange
    it("If main render the data properly", () => {
        const data = {
            copyright: "Daniel Korona",
            date: "2021-08-16",
            explanation: "This was an unusual sky. It wasn't unusual because of the central band the Milky Way Galaxy, visible along the image left.  Most dark skies show part of the Milky Way. It wasn't unusual because of the bright meteor visible on the upper right. Many images taken during last week's Perseid Meteor Shower show meteors, although this Perseid was particularly bright. This sky wasn't unusual because of the red sprites, visible on the lower right. Although this type of lightning has only been noted in the past few decades, images of sprites are becoming more common. This sky wasn't unusual because of the nova, visible just above the image center. Novas bright enough to be seen with the unaided eye occur every few years, with pictured Nova RS Ophiuchus discovered about a week ago.  What was most unusual, though, was to capture all these things together, in a single night, on a single sky.  The unusual sky occurred above Zacatecas, Mexico.   Notable APOD Image Submissions: Perseid Meteor Shower 2021",
            hdurl: "https://apod.nasa.gov/apod/image/2108/PerseidNovaSprites_Korona_960.jpg",
            media_type: "image",
            service_version: "v1",
            title: "Perseid Meteor, Red Sprites, and Nova RS Ophiuchus",
            url: "https://apod.nasa.gov/apod/image/2108/PerseidNovaSprites_Korona_960.jpg"
        };
        axios.get.mockImplementation(() => Promise.resolve({ data: data }));
        
        // Act
        render(<Main error={false} test_data={data}/>);

        // Assertion
        expect(screen.queryByTestId("copyright-text").innerHTML).toBe(`© ${data.copyright}`);
        expect(screen.queryByTestId("image-date").innerHTML).toBe(`${data.date}`);
        expect(screen.queryByTestId("image-title").innerHTML).toBe(`${data.title}`);
        expect(screen.queryByTestId("image-src").src).toBe(`${data.url}`);
        expect(screen.queryByTestId("image-dec").innerHTML).toBe(`${data.explanation}`);
    });
    

    // Arrange
    it("If main in error state", () => {
        axios.get.mockImplementation(() => Promise.reject({ data: {
            data: []
        } }));

        // Act
        render(<Main error={true}/>);
        
        // Assertion
        const text = screen.queryByTestId("error-text").innerHTML;
        expect(text).toBe("Please Check API Service.");
    });
});