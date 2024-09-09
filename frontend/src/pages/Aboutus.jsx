import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import './AboutUs.css'
function Aboutus() {

  const current_theme=localStorage.getItem('current_theme');
  const [theme,setTheme]=useState(current_theme ? current_theme:'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])

return (
      <div className={`container ${theme}`} >
         <Navbar theme={theme} setTheme={setTheme}/>
         <div className = {`mainDiv ${theme}`}>
          <img className="image" src = "/logo.png" alt="logo of Tech Catalyst"/>
          <h1><strong>About Us:</strong></h1>
          <p className = "Intro">The Ministry of Ayush was formed on the 9th of November 2014 with a vision of reviving the profound knowledge of our ancient systems of medicine and ensuring the optimal development and propagation of the Ayush systems of healthcare. Earlier, the Department of Indian System of Medicine and Homoeopathy (ISM&H) formed in 1995,  later on renamed as the Department of Ayurveda, Yoga, and Naturopathy, Unani, Siddha and Homoeopathy (Ayush) in November 2003. For more details, visit <a href="https://ayush.gov.in">https://ayush.gov.in</a>.</p>
          <h2><strong>Nation Ayush Mission(NAM):</strong></h2>
          <p className = "Intro">Ministry of Ayush is implementing the Centrally Sponsored Scheme of National Ayush Mission ( NAM ) through States/UTs for providing better access to Ayush services by increasing in number of Ayush Hospital andDispensaries, upgradation of Ayush hospitals/dispensaries, operationalizationof Ayush Health and Wellness Centres by upgrading existing Ayush dispensaries and Sub Health Centres to provide comprehensive primary healthcare at grassroots level with focus on Ayush systems of medicine,mainstreaming of Ayush through co-location of Ayush facilities at PrimaryHealth Centres (PHCs), Community Health Centres (CHCs) & District Hospital(DHs), ensure availability of Ayush drugs and trained manpower and Ayush Public Health programmes. NAM also aims at the improvement in quality of Ayush education through upgrading existing Ayush Educational Institutions and establishment of new Ayush Colleges in the States where availability of Ayush teaching institutions is inadequate in Government Sector.</p>
          <h2><strong>Why Ayush Startup Online Registrations?</strong></h2>
          <p className = "why"><ul className="list"><li>To make the process easier.</li><br/>
          <li>For faster registrations.</li><br/>
          <li>To know about the status easily.</li>
          </ul></p>
          <p class='contact-info'>📞 +91 9999999999 | <a href='mailto:abc@gmail.com'>abc@gmail.com</a></p>
         </div>
      </div>
  )
}

export default Aboutus
