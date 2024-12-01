import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function WeatherForecast() {
  const cityName = useSelector((state)=>state.inputSearch.value)
  const stateButtonTrigger = useSelector((state)=>state.buttonTriggerSearch.value)
  const [stateRequest, setStateRequest] = useState({loading: false, errorState: false, error: '', data:{}})
  const sendRequestPlaceId = async () => {
    if (cityName != "") {
      try {
        setStateRequest({ error: "", errorState: false, loading: true, data: {} })
        const requestPlaceId = await fetch(`https://www.meteosource.com/api/v1/free/find_places?text=${cityName}&language=en&key=${process.env.REACT_APP_KEY_WEATHER_APP}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        if (requestPlaceId.ok) {
          const responsePlaceId = await requestPlaceId.json()
          sendRequestPlaceWeather(responsePlaceId[0].place_id)
        }
      } catch (error) {
        setStateRequest({
          error: error.message,
          errorState: true,
          loading: false,
          data: []
        })
      }
    } else {
      setStateRequest({
        error: "City name is required",
        errorState: true,
        loading: false,
        data: []
      })
    }
  }
  const sendRequestPlaceWeather = async (id)=>{
    try {
      console.log(id);
      const requestPlaceWeather = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${id}&sections=current%2Chourly&language=en&units=auto&key=${process.env.REACT_APP_KEY_WEATHER_APP}`)
      if (requestPlaceWeather.ok) {
        const responsePlaceWeather = await requestPlaceWeather.json()
        console.log(responsePlaceWeather);
        setStateRequest({ error: "", errorState: false, loading: false, data: responsePlaceWeather })
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{sendRequestPlaceId()},[stateButtonTrigger])
  return (
    <div>WeatherForecast</div>
  )
}
