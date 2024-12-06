import React from 'react'
import BlockDatas from '../../blockDatas/BlockDatas'

export default function CurrentWeatherPanelPhone({current}) { 
  return (
    <div className='w-full md:w-96 grid grid-cols-2 grid-rows-2 gap-4 '>
        <BlockDatas emoji={'&#9925;'} data={current.cloud_cover} mesure={'%'} typeBlock={'Cloud Cover'}/>
        <BlockDatas emoji={'&#127783;'} data={current.precipitation.total} mesure={'%'} typeBlock={'precipitation'}/>
        <BlockDatas emoji={'&#127777;'} data={current.temperature} mesure={'°C'} typeBlock={'temperature'}/>
        <BlockDatas emoji={'&#127788;'} data={current.wind.speed} mesure={'Km/h'} typeBlock={'wind'}/>
    </div>
  )
}
