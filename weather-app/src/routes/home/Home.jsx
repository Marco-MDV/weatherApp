import React from 'react'
import IconsBg from '../../components/iconsBg/IconsBg'
import WelComeText from '../../components/welComeText/WelComeText'
export default function Home() {
    return (
        <main className='min-h-screen-minus-sm&md lg:min-h-screen-minus-lg&xl relative flex justify-center items-center p-2'>
            <WelComeText/>
            <IconsBg/>
        </main>
    )
}
