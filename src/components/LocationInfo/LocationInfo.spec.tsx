import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import '@testing-library/jest-dom'
import { LocationInfo, coordsType } from './LocationInfo'

type googleProps = {
    formatted_address: string;
}

const MOCK_GOOGLE_RESULTS: Array<googleProps>  = [
    {formatted_address: "R. Monte Plano, 1343 - Vila Margarida, São Vicente - SP, 11330-707, Brasil"},
    {formatted_address: "R. Prof. Hélio Lourenço, 3900 - Vila Monte Alegre, Ribeirão Preto - SP, 14040-902"},
    {formatted_address: "Rod. Jorn. Manoel de Menezes, 1056 - Praia Mole, Florianópolis - SC, 88061-701"},
    {formatted_address: "1 Blue Jays Way, Toronto, ON M5V 1J4, Canada"},
];

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
            coords: {latitude:-23.9691736, longitude:-46.4088517}
        })))
    };

describe('Get the city name based on latitude and longitude', () => {

    beforeEach(() => {
        global.navigator.geolocation = mockGeolocation;
      });

      it('Gets Florianópolis as city result when page loads', () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({results : [MOCK_GOOGLE_RESULTS[2]]}),
            }),
        ) as jest.Mock;

        const { getByText } = render(<LocationInfo />)
        expect(getByText('Florianópolis')).toBeInTheDocument()
    })

    it('Gets Ribeirão Preto as city result', () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({results : [MOCK_GOOGLE_RESULTS[1]]}),
            }),
        ) as jest.Mock;

        const { getByText } = render(<LocationInfo />)
        fireEvent.click(screen.getByTestId('getMyLocation'))
        expect(getByText('Ribeirão Preto')).toBeInTheDocument()
    })

    it('Gets Toronto as city result', () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({results : [MOCK_GOOGLE_RESULTS[3]]}),
            }),
        ) as jest.Mock;

        const { getByText } = render(<LocationInfo />)
        fireEvent.click(screen.getByTestId('getMyLocation'))
        expect(getByText('Toronto')).toBeInTheDocument()
    })
})
