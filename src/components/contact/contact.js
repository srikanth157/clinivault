import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './contact.css'

export default function Contact() {
  return (
    <footer  className='c-container'>
     
      <div className='contact-container'>
      
              <div className='logo-img'>
                < img  className="img-logo" src='https://static.wixstatic.com/media/78eca0_db1801071b2e475aaea6f7e37e463628~mv2.png/v1/fill/w_125,h_89,al_c,q_85/LogoF.webp' alt="" />
                </div>


             <div className='text-container'>

                    <div className='contact-container-2'>
                        <PhoneIcon/>
                        <p className='c-text'>7075771101</p>
                    </div>

                    <div className='contact-container-2'>
                      <LocationOnIcon />
                      <p className='c-text'>1-98/7/A/35,Narras House,Jai Hind Enclave, Madhapur , Hyderabad-500081</p>
                    </div>

                     <div className="icons-container">
                        <FacebookIcon  className='icon'/>
                        <TwitterIcon className='icon'  />
                        <YouTubeIcon  className='icon' />
                     </div>
            </div>
                   
      </div>
      <div className='bottom-text'> 
           <p className='para'>© 2021 by Vollmond Innovations and Social Entrepreneurs Pvt Ltd.</p>
           </div>
    </footer>
   

  )
}
