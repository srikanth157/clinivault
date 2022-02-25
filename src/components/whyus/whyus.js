import React from 'react'
import Carousel from 'react-material-ui-carousel'


// import Container from '@mui/material/Container';

import './whyus.css'

export default function Whyus(props) {
      
    var items = [
        {
            name:  "Our Mission",
            description:"Is to create a robust Infrastructure that can connect all the stake holders for the seamless delivery of healthcare services. Making Innovations touch real-time practice faster with greater standards"
        },
        {
            name: "Our Vision",
            description: "Is to create a globally reliable healthcare system, facilitating healthcare technology innovations.",
        }, 
        {
            name: "Our Objectives",
            description: "Protecting the Data security and privacy, we are trying to make healthcare \"Accessible and Interoperable with sustainable technology.” Implementation of Industry standards with regulatory compliance at every step."
            
             
        }
    ]

  return (
    <div id="whyus" className='wu-f-container'>
        
        <div className='wu-container'>
            <h1 className="wu-heading">WHY US ?</h1>
            <p className='wu-para'>We are fulfiling the the gap between healthcare industry needs at the comfort of healthcare providers</p>
        </div>
    
        
        <Carousel className='wu-car'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </div>
  )
}

function Item(props){
    return (
        <div>
            <h2 className='heading'>{props.item.name}</h2>
            <p className='description'>{props.item.description}</p>      
            </div>
    )
}
