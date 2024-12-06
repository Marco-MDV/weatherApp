import React from 'react'
import SkeletonSmartphone from './SkeletonSmartphone'
import SkeletonsTablet from './SkeletonsTablet'
import SkeletonPC from './SkeletonPC'

export default function Skeletons() {
  return (
    <>
        <SkeletonSmartphone/>
        <SkeletonsTablet/>
        <SkeletonPC/>
    </>
  )
}
