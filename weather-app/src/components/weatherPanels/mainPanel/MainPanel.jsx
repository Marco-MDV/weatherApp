import React from 'react'
import CurrentDataWeatherPanelBlocks from './currentDataWeatherPanelBlocks/CurrentDataWeatherPanelBlocks'
import HoursPanel from './hoursPanel/HoursPanel';
import CityPanel from './cityPanel/CityPanel';

export default function MainPanel({data, cityName}) {  
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <CityPanel cityName={cityName} summary={data.current.summary}/>
        <CurrentDataWeatherPanelBlocks current={data.current}/>
        <HoursPanel hourlyData={data.hourly.data}/>
    </div>
  )
}
