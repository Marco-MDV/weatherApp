import React from 'react'
import WeatherButton from './buttons/WeatherButton'
import { useDispatch } from 'react-redux'
import { setText } from '../redux/sliceInputSarch'

export default function Search({stateButtonTrigger, changeStateButtonTrigger}) {
    const dispatch = useDispatch();
    const handleClickCityName = (e)=>{dispatch(setText(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase()))}
    
    return (
        <div className='flex gap-2 items-center'>
            <input type="search" name="city" id="cityId" className='rounded-md border-2 focus:border-sky-600 focus:outline-none px-2 py-1' placeholder='Search your city...'  onChange={handleClickCityName}/>
            <WeatherButton />
        </div>
    )
}
