import React from 'react'
import { FifthPage } from './FifthPage'
import { Footer } from './Footer'
import { ForthPage } from './ForthPage'
import { GrayPage } from './GrayPage'

import { MyNavbar } from "./MyNavbar"
import { SecPart } from './SecPart'
import { SixthPage } from './SixthPage'
import { Thirdpage } from './Thirdpage'

export const Body = () => {
  return (
    <>
      <div className="mainBody">
        <div className="bodyNav"> <MyNavbar /> </div>
        <div className="secPart">    <SecPart /></div>
        <div className="grayPage" > <GrayPage />  </div>
        <div className="thirdPage" > <Thirdpage />  </div>
       <div> <ForthPage/> </div>
       <div>  <FifthPage/> </div>
       <div> <SixthPage/> </div>
       <div> <Footer/> </div>
      </div>
    </>
  )
}
