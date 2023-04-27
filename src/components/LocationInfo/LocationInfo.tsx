import React, { useEffect, useState } from 'react'
import { ImLocation2 } from 'react-icons/im'

export type coordsType = {
  coords : {
    latitude: number;
    longitude: number;
  }
}

export const LocationInfo = () => {
  const [city, setCity] = useState<string>('')

  useEffect(() => {
    showCurrentPosition()
  }, [])

  const showCurrentPosition = () =>{
    navigator.geolocation.getCurrentPosition(getCityName)
  }

  async function getCityName(position : coordsType) {
    const {latitude, longitude } = position.coords

    // const MOCK_COORDS:  Array<coordsType> = [
    //   {
    //       coords: {latitude:-23.9691736, longitude:-46.4088517}
    //   },
    //   {
    //       coords: {latitude:-21.16412174615681, longitude: -47.84836383211025},
    //   },
    //   {
    //       coords: {latitude: -27.60475185902592, longitude: -48.435128382268175}
    //   },
    //   {
    //       coords: {latitude: 43.642472620760216, longitude: -79.38987451164982}
    //   },
    //   {
    //     coords: {latitude: -22.891729134749436, longitude: -47.20812758974307}
    //   }
    // ];

    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.VITE_API_KEY}`;
    //const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${MOCK_COORDS[4].coords.latitude},${MOCK_COORDS[4].coords.longitude}&key=${process.env.VITE_API_KEY}`;

    const response = await fetch(googleUrl);
    const jsonData = await response.json();
    const cityName = jsonData.results[0]?.formatted_address ?? '';
    console.log('City full name:', cityName)
    console.log(cityName?.split(',').length < 5 ? cityName?.split(',')[1] : cityName?.split(',')[2] ?? 'Somewhere in the world')
    setCity(cityName?.split(',').length < 5 ? cityName?.split(',')[1] : cityName?.split(',')[2] ?? 'Somewhere in the world')
  }

  return (
    <div>
        <div>
            <ImLocation2 />
        </div>
        <div onClick={showCurrentPosition} data-testid="getMyLocation">
            {city}
        </div>
    </div>
  )
}

export default LocationInfo