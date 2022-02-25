// import { Container } from '@mui/material'
import './vision.css'


 function Vision() {
  return (

    <div className='v-f-container'>
       
        <div className="v-text-container">
        <h1 className='v-heading'>
        YOUR HOSPITAL SUCCESS POWERED BY OUR VISION
        </h1>
        <p className='v-para'>Unique and powerful suite of software to run your entire Hospital, brought to you by a company with the long term vision to transform healthcare</p>
        </div>

        
        <div className='v-container'>
           
            <div className='v-sub-container'>
            <img className='saas-img' src='https://musatotech.co.za/wp-content/uploads/2020/08/OpenStack-Musato-Technologies-is-the-leading-ICT-company-in-Durban-South-Africa.png' alt=""/>
            <h1 className='v-heading-2'>IaaS</h1>
            <p className='v-para-2'>Infrastructure as a service. Hybrid cloud architecture and secure data to connect with external stakeholders and third party applications.</p>
            </div>
            
            <div className='v-sub-container'>
           <img className='saas-img' src='https://cdn1.iconfinder.com/data/icons/cloud-services-vol-3/100/Cloud_services_03-512.png' alt=""/>
            <h1 className='v-heading-2'>PaaS</h1>
            <p className='v-para-2'>Platform as a Services. Build your own applications and plugins, connect with  Medical (IoT) devices. Extensible and customisable to your hospital needs.</p>
            </div>

            <div className='v-sub-container'>
           <img className='saas-img' src='https://cdn-icons-png.flaticon.com/512/2103/2103573.png' alt=""/>
            <h1 className='v-heading-2'>SaaS</h1>
            <p className='v-para-2'>Software as a Services. Use our Clinical and administrative applications to run your hospital with efficiency and quality. low-cost Transparent pricing.</p>
            </div>

        </div>
      
       

    </div>
    
  )
}

export default Vision