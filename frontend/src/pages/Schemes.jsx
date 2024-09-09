import React, { useEffect, useState } from 'react'
import './Schemes.css'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom';
function Schemes() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`} >
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="card-Container">
        <div className="cards">
          <p><strong>Central Sector Scheme for AYURGYAN</strong><br />
            <img src="/schemesimage1.jpg" alt="Image" width={100} height={100}></img>
            <div className="card-text">
              <p>
                <strong>AYURGYAN SCHEME</strong><br/>
                The Ministry of AYUSH was implementing two separate schemes for the promotion of AYUSH's education and Research. It was proposed to merge both schemes under one umbrella scheme namely “AYURGYAN Scheme” which has two components namely (i) Capacity Building and Continuing Medical Education (CME) in AYUSH; and (ii) Research and Innovation in AYUSH.<br />
                1. CAPACITY BUILDING AND CONTINUING MEDICAL EDUCATION (CME) IN AYUSH:<br/>
                The overall structure of the Scheme is aimed to encourage AYUSH personnel to undergo need-based professional training and bridge the knowledge gaps. The objectives of the scheme are:<br/>
                <ul>
                <li>To encourage AYUSH professionals to undergo need-based professional orientation and professional skill development in an organized manner.</li>
                <li>To update the professional knowledge of teachers and doctors to adopt good teaching practices and good clinical practices respectively.</li>
                <li>To encourage the use of Information technology and web-based education programmes for widespread dissemination of AYUSH developments and updates.</li>
                </ul>
                2. RESEARCH & INNOVATION IN AYUSH (erstwhile Extra Mural Research Scheme)
                The Research and Innovation component (erstwhile Extra Mural Research Scheme) was introduced to tap the potential of medical, scientific and research & development institution, university, organizations for the research needs of AYUSH sector, with aim to expand the ambit of research in AYUSH systems.
                Research and Innovation component AYURGYAN Scheme of Ministry of AYUSH is designed to encourage Research & Development in priority areas based on disease burden in alignment to National Health programme.
                The priority areas of support are fundamental concepts, basic principles, theories of AYUSH systems, standardization/validation of AYUSH drugs and new drug development.
                Outcomes of the Research Scheme have successfully demonstrated the effectiveness of AYUSH systems and were successful in developing novel technology and are expected to harness the potential of AYUSH in the interest of public health delivery.<br/>
                <a href = "https://ngo.ayush.gov.in/ayurgyan" target="_blank"><button className = "siteRefer" >Visit Site</button></a>
              </p>
            </div>
          </p>
        </div>
      </div>
      <div className="card-Container">
        <div className="cards">
          <p><strong>Central Sector Scheme for Promotion of Information, Education, and Communication (IEC) in AYUSH</strong><br />
            <img src="schemesimage2.png" alt="Image" width={100} height={100}></img>
            <div className="card-text">
              <p>
              The scheme aims to achieve several objectives related to AYUSH. Firstly, it seeks to raise awareness among the community about the efficacy and cost-effectiveness of AYUSH practices, emphasizing the availability of herbal remedies for common ailments. Secondly, it aims to share the successful outcomes of research and development in AYUSH systems at national and international platforms. Thirdly, the scheme aims to facilitate interaction and collaboration among stakeholders through conferences, seminars, and fairs, fostering horizontal and vertical engagement. Lastly, it encourages stakeholders to actively participate in these events to create a collaborative ecosystem for the AYUSH sector.
              <a href='https://ngo.ayush.gov.in/scheme2' target="_blank"><button className = 'siteRefer'>Visit Site</button></a> 
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Schemes;
