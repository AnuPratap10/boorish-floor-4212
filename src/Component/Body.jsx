import React from 'react'
import { GrayPage } from './GrayPage'

import {MyNavbar} from "./MyNavbar"
import { SecPart } from './SecPart'

export const Body = () => {
  return (
    <>
  <div className="mainBody">
  <div className="bodyNav"> <MyNavbar/> </div>
   <div  className="secPart">    <SecPart/></div>
    <div className="grayPage" > <GrayPage/>  </div>
  </div>
  </>
  )
}
