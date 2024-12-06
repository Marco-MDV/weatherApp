import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorMessage({errorMessage, errorCode}) {
  const navigate = useNavigate();
  const changeLocation = () =>{navigate('/')}
  return (
    <div className='flex justify-center items-center w-full text-center'>
      <div className='w-full md:w-96 bg-red-400 flex items-center justify-around flex-col border-2 rounded-lg border-red-900 h-48 relative'>
          <h2 className='font-bold text-2xl'>Error {errorCode}</h2>
          <p className='font-medium'>{errorMessage}</p>
          <button className='absolute top-1 right-4 z-10 text-xl hover:text-red-800 hover:animate-spin' onClick={changeLocation}>
            X
          </button>
      </div>
    </div>
  )
}
