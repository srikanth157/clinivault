// import { Container } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TextField } from '@mui/material';
// import Button from '@mui/material/Button';


import './Getintouch.css'

export default function Getintouch() {
  return (
   <div id='contact' className='main-container'>
       
           <div  className='g-i-t-text'>
               <h1 className='g-t-head'>Get in Touch!</h1>
               <p className='g-t-para'> We want to hear from you!</p>
               <p className='g-t-address'>​Tel: 7075771101 | Fax:1-98/7/A/35,Narras House,Jai Hind Enclave, Madhapur , Hyderabad-500081</p>
            <div>

            <FacebookIcon  sx={{m:1}}/>
            <TwitterIcon  sx={{m:1}} />
            <YouTubeIcon  sx={{m:1}}/>
            </div>
           </div>

           <form  className="form-container">
           <TextField className='input-text'  size="small" helperText=" " id="name" label="Name"  required/><br/>
           <TextField className='input-text' size="small" helperText=" " id="email" label="Email" type={"email"} required/><br/>
           <TextField className='input-text' size="small" helperText=" " id="subject" label="Subject" required/><br/>
           <TextField className='input-text' size="large" helperText=" "  id="message" label="Message"  required/><br/>
           <button className='button-sub'>Submit</button>
          

           </form>




      
   </div>
  )
}
