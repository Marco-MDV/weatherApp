import React, { useEffect } from 'react'
import Cloud from './cloud/Cloud'
import Sun from './sun/Sun'

export default function IconsBg() {
    useEffect(()=>{

    },[])
  
    return (
    <>
        <Cloud classCustom={' absolute top-1 left-10 text-white -z-10 animate-leftToRightSlow '} id={'cloudLeft'}/>
        <Sun/>
        <Cloud classCustom={' absolute bottom-1 right-10 text-white -z-10 animate-rightToLeftSlow '} id={'cloudRight'}/>
    </>
  )
}
