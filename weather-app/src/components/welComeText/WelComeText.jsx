import React from 'react'

export default function WelComeText() {
    return (
        <div className='flex flex-col gap-12 items-center justify-around border-2 rounded-lg backdrop-blur-md px-1 py-2 animate-enterWelCome'>
            <h2 className='text-xl font-semibold text-sky-600'>
                Well come in the Weather App!!
            </h2>
            <p className='text-base text-center text-white'>
                Please search your city for get forecast information &#128512;
            </p>
        </div>
    )
}
