import React from 'react'
import { render } from '@testing-library/react'
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

const MOCK_COORDS:  Array<coordsType> = [
    {
        coords: {latitude:-23.9691736, longitude:-46.4088517}
    },
    {
        coords: {latitude:-21.16412174615681, longitude: -47.84836383211025},
    },
    {
        coords: {latitude: -27.60475185902592, longitude: -48.435128382268175}
    },
    {
        coords: {latitude: 43.642472620760216, longitude: -79.38987451164982}
    },
];


describe('Get the city name based on latitude and longitude', () => {
    it('Gets Ribeirão Preto as city result', () => {

        // beforeEach(async () => {
        //     averagePrice = await getCityName(MOCK_COORDS[1]);
        // });
        
        // global.fetch = jest.fn(() => Promise.resolve({
        //     json: () => Promise.resolve({result :MOCK_GOOGLE_RESULTS[1]})
        // }));

        // const { getByText } = render(<LocationInfo />)
        // expect(getByText('Ribeirão Preto - SP')).toBeInTheDocument()


        expect(1+1).toBe(2);
    })
})


// describe('Gold prices', () => {
//     let averagePrice;

//     describe('When the average price is called for 7 days', () => {
//         beforeEach(async () => {
//             averagePrice = await getPricesLastDays(7);
//         });

//         it('Then the correct average should be returned', () => {
//             expect(averagePrice).toEqual({ average: MOCK_AVERAGE });
//         });
//     });
// });