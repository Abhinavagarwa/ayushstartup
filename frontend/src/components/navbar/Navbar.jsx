import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'


const Navbar= ({theme,setTheme}) => {

const toggle_mode=()=>{
    theme=='light'?setTheme('dark'):setTheme('light');
}

    return(
        <div className='navbar'>
            <img src="" alt=""  className='logo'/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/application">Application</Link></li>
                <li><Link to="/aboutus">Aboutus</Link></li>
                <li><Link to="/schemes">Schemes&Policies</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={theme=='light'?search_icon_light:search_icon_dark} alt=''/>
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme=='light'? toggle_light:toggle_dark} alt="" className='toggle-icon'/>

        </div>
    )
}
export default Navbar