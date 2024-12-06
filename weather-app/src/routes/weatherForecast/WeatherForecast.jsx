import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Skeletons from '../../components/skeletons/Skeletons'
import MainPanel from '../../components/weatherPanels/mainPanel/MainPanel'
import IconsBg from '../../components/iconsBg/IconsBg'

export default function WeatherForecast() {
  const cityName = useSelector((state)=>state.inputSearch.value)
  const stateButtonTrigger = useSelector((state)=>state.buttonTriggerSearch.value)
  
  const [stateRequest, setStateRequest] = useState({loading: true, errorCode:'', errorState: false, error: '', data:{}})
  
  const sendRequestPlaceId = async () => {
    if (cityName != "") {
      try {
        setStateRequest({ error: "", errorCode:'', errorState: false, loading: true, data: {} })
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
          errorCode: error.status,
          errorState: true,
          loading: false,
          data: []
        })
      }
    } else {
      setStateRequest({
        error: "City name is required",
        errorCode: '400',
        errorState: true,
        loading: false,
        data: []
      })
    }
  }
  const sendRequestPlaceWeather = async (id)=>{
    try {
      const requestPlaceWeather = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${id}&sections=current%2Chourly&language=en&units=auto&key=${process.env.REACT_APP_KEY_WEATHER_APP}`)
      if (requestPlaceWeather.ok) {
        const responsePlaceWeather = await requestPlaceWeather.json()
        setStateRequest({ error: "", errorState: false, loading: false, data: responsePlaceWeather })
      }
    } catch (error) {
      setStateRequest({
        error: error.message,
        errorCode: error.status,
        errorState: true,
        loading: false,
        data: []
      })
    }
  }
  useEffect(()=>{sendRequestPlaceId()},[stateButtonTrigger])
  return (
    <main className='min-h-screen-minus-sm&md lg:min-h-screen-minus-lg&xl relative flex justify-center items-center p-2'>
      { stateRequest.errorState && !stateRequest.loading && (<ErrorMessage errorCode={stateRequest.errorCode} errorMessage={stateRequest.error}/>)}
      { !stateRequest.errorState && stateRequest.loading && (<Skeletons/>)}
      { !stateRequest.errorState && !stateRequest.loading && (<MainPanel data={stateRequest.data} cityName={cityName}/>)}
      <IconsBg/>
    </main>
  )
}
