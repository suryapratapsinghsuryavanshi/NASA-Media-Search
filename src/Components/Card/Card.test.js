import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Testing Card Component", () => {
    
    // Arrange
    it("Test Card render data properly or not", () => {
        const data = {
            data: {
                '0': {
                    center: "HQ",
                    date_created: "2019-03-11T00:00:00Z",
                    description: "NASA is going to the Moon and on to Mars, in a measured, sustainable way. Working with U.S. companies and international partners, NASA will push the boundaries of human exploration forward to the Moon. NASA is working to establish a permanent human presence on the Moon within the next decade to uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy.  Right now, NASA is taking steps to begin this next era of exploration. #Moon2Mars  Learn more at: https://www.nasa.gov/moontomars",
                    keywords: (3) ["Moon", "Mars", "Forward to the Moon"],
                    media_type: "video",
                    nasa_id: "NHQ_2019_0311_Go Forward to the Moon",
                    title: "Go Forward to the Moon",
                }
            },
            links: {
                '0': {
                    href: "https://images-assets.nasa.gov/image/NASA%2060th_SEAL_BLACK_150DPI/NASA%2060th_SEAL_BLACK_150DPI~thumb.jpg",
                    rel: "preview",
                    render: "image"
                }
            }
        }

        // Act
        render(<Card card_data={data}/>);

        // Assertion
        expect(screen.queryByTestId('image-src').src).toBe(data.links[0].href)
        expect(screen.queryByTestId('title-text').innerHTML).toBe(data.data[0].title)
        expect(screen.queryByTestId('card-date').innerHTML).toBe(new Date(data.data[0].date_created).toLocaleDateString())
    });
});