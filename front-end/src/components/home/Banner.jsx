import React from 'react'
import { bannerData } from '../../ConstentData/data'

const Banner = () => {
  return (
      <div>{bannerData.map(img=>(<div><img src={img.url} style={{width:"100%"}} /></div>)) }</div>
  )
}

export default Banner