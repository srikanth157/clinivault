import React from 'react'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

 
import './testimonials.css'
 
export default function Testimonials() {

  const [value, setValue] = React.useState(5);

  return (
      <>
    <div id="testimonials" className='testimonial-container'>
            <div className='T-c-text'>
              <h1 className='t-heading'>What People are Saying</h1>
              <p className='t-para'>Try not to believe us, this is what others need to say</p>
            </div>

          
              
              <div className='containers'>
              
                <div className='stars-container'>
                  <div className='review-containers'>
                 <div className='parent'>
                     <p className='t-review'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                  <div className='child'></div>
                 </div>
                 </div>
                 <Rating sx={{mt:"50px",ml:"1px"}} name="read-only" value={value}  onChange={(event, newValue) => {setValue(newValue);}}  />
                 </div>
                 <div className='stars-container'>
                  <div className='review-containers'>
                 <div className='parent'>
                     <p className='t-review'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                  <div className='child'></div>
                 </div>
                 </div>
                 <Rating sx={{mt:"50px",ml:"1px"}} name="read-only" value={value}  onChange={(event, newValue) => {setValue(newValue);}}  />
                 </div>
                 <div className='stars-container'>
                  <div className='review-containers'>
                 <div className='parent'>
                     <p className='t-review'>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                  <div className='child'></div>
                 </div>
                 </div>
                 <Rating sx={{mt:"50px",ml:"1px"}} name="read-only" value={value}  onChange={(event, newValue) => {setValue(newValue);}}  />
                 </div>

                 

                
              </div>
              
   </div>
        
  
    </>
  )
}
