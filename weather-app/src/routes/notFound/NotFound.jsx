import React from 'react'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'

export default function NotFound() {
    return (
        <main className='min-h-screen-minus-sm&md lg:min-h-screen-minus-lg&xl flex justify-center items-center p-2'>
            <ErrorMessage errorCode={'404'} errorMessage={`Page not found, please insert a city's name in the search field.`} />
        </main>
    )
}
