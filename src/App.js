// import Navbar from './components/navbar/navbar';
import Navbar  from './components/Navbar/Navbar';
import Vision  from './components/vision/vision';
import Howitworks from './components/howitworks/howitworks';
import WhatWeDo from './components/whatwedo/whatwedo';
import Whyus from './components/whyus/whyus'


import './App.css';
import Testimonials from './components/testimonials/testimonials';
import Getintouch from './components/Getintouch/Getintouch';
import Contact from './components/contact/contact';


function App() {
  return (
    <div className='total-container'>

     <Navbar  /> 
     <WhatWeDo />
     <Whyus/>
     <Vision />
    <Howitworks/>
    <Testimonials/>
    <Getintouch/>
    <Contact/>
    
  </div>
  )
}

export default App;
