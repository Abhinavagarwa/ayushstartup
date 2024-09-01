import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
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
                <li className='home'><NavLink to="/home">Home</NavLink></li>
                <li className='application'><NavLink to="/application">Application</NavLink></li>
                <li className='aboutus'><NavLink to="/aboutus">Aboutus</NavLink></li>
                <li className='schemes'><NavLink to="/schemes">Schemes&Policies</NavLink></li>
                <li className='resources'><NavLink to="/resources">Resources</NavLink></li>
                <li className='network'><NavLink to="/network">Network</NavLink></li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={theme=='light'?search_icon_light:search_icon_dark} alt=''/>
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme=='light'? toggle_light:toggle_dark} alt="" className='toggle-icon'/>
            <ul className='login'>
            <li className='app'><NavLink to="/">Login</NavLink></li>
            </ul>

        </div>
    )
}
export default Navbar