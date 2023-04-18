import React, { useEffect, useState } from 'react'
import { ImLocation2 } from 'react-icons/im'

const LocationInfo = () => {
    const [city, setCity] = useState('')

    useEffect(() => {
      showCurrentPosition()
    }, [])

    interface coordsType {
      latitude: number;
      longitude: number;
    }

  async function getCityName(position : coordsType) {

    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&location_type=RANGE_INTERPOLATED&result_type=street_address&key=${process.env.VITE_API_KEY}`;

    const response = await fetch(googleUrl);
    const jsonData = await response.json();
    const cityName = jsonData.results[0].formatted_address;
    console.log('City full name:', cityName)
    setCity(cityName.split(',')[2])
  }


  const showCurrentPosition = (): void =>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      getCityName(position.coords)
    });
  }

  return (
    <div>
        <div>
            <ImLocation2 />
        </div>
        <div onClick={showCurrentPosition}>
            {city}
        </div>
    </div>
  )
}

export default LocationInfo
