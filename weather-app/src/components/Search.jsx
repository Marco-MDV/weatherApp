import React from 'react'
import WeatherButton from './buttons/WeatherButton'

export default function Search({stateButtonTrigger, changeStateButtonTrigger}) {
    return (
        <div className='flex gap-2 items-center'>
            <input type="search" name="city" id="cityId" className='rounded-md focus:outline-none px-2 py-1' placeholder='Search your city...' />
            <button className='h-8 w-8 bg-white rounded-md p-1 flex justify-center items-center ' onClick={changeStateButtonTrigger}>
                <WeatherButton stateButtonTrigger={stateButtonTrigger} />
            </button>
        </div>
    )
}
