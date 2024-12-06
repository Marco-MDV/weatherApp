import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { triggerSearch } from '../../redux/sliceSetButtonTrigger';
export default function WeatherButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stateButtonTrigger = useSelector((state)=> state.buttonTriggerSearch.value)
    const changeStateButtonTrigger = () => { dispatch(triggerSearch()) };
    const requestData = () =>{navigate('/WeatherForecast'); changeStateButtonTrigger()}
    return (
        <button className='h-8 w-8 bg-white rounded-md p-1 flex justify-center items-center hover:bg-slate-300 outline outline-2 outline-offset-2 outline-slate-100 active:outline-0' onClick={requestData}>
            {!stateButtonTrigger ?
                (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                )
                :
                (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                )
            }    
        </button>
    )
}
