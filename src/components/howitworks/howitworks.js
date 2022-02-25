// import { Container } from '@mui/material'
import React from 'react'
import './howitworks.css'

export default function Howitworks() {
  return (
    <>
    <div className='h-i-W-Container1'> 
        <div className='parent1'>
          <img className='desk-img' src="https://static.wixstatic.com/media/073d1fabec77b6b8ac19b49dd29fd498.png/v1/fill/w_446,h_404,al_c,q_85,usm_0.66_1.00_0.01/Computer%20Monitor.webp" alt="" />
        </div>
    <div className='h-i-w-text-container'>
     
        <div>
            <h2 className='hw-heading'> Every thing your hospital  needs</h2>
            <h3 className='hw-sub-heading'>Clinical Suite</h3>
            <p className='hw-para'>Automate clinical workflow and deliver healthcare services with world class quality and high efficiency. A dedicated customisable application for delivery of healthcare services</p>
        </div>

          <div className='b-text'>
            <h3 className='hw-sub-heading'>Business Suite</h3>
            <p  className='hw-para'>Power your hospital with fool-proof application. Automate business administrative operations. Human Resource management, financial management and material management.</p>
          </div>
          
     </div>    
    </div>

    <div id="howitworks"  className='h-i-W-Container'> 
        <h1 className='hw-main-heading'> How It Works? </h1>
    </div>
    </>

  )
}
