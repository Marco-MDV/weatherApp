import React from 'react'

export default function BlockDatas({emoji , data, mesure, typeBlock}) {
  return (
    <div className=' flex flex-col justify-center items-center border-2 rounded-lg backdrop-blur-sm gap-2 p-1 hover:backdrop-blur-xl hover:text-semibold text-sky-600 hover:text-white'>
        <p dangerouslySetInnerHTML={{ __html: emoji }} className='text-6xl '/>
        <p>{typeBlock}</p>
        <p>{data} {mesure}</p>
    </div>
  )
}