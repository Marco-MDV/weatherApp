import React from 'react'

export default function HoursPanel({ hourlyData }) {
  return (
    <div className='w-full md:w-96 flex border-2 rounded-lg backdrop-blur-sm gap-4 overflow-x-auto p-1'>
      {
        hourlyData.map((e, i) => {
          return <div key={i} className='text-center hover:font-semibold min-w-[60px] text-sky-600 hover:text-white'>
            <p>{new Date(e.date).getHours()}:00</p>
            <p>&#127777; {e.temperature}°</p>
            <div>
              <p>&#9748;</p>
              <p>{e.precipitation.total}%</p>
            </div>
          </div> 
        })
      }
    </div>
  )
}
