import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next';
import Languageoption from '../language/language'


const Navbar= ({theme,setTheme}) => {

    const {t} = useTranslation();

const toggle_mode=()=>{
    theme=='light'?setTheme('dark'):setTheme('light');
}
const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
}

    return(
        <div>
        <div className='navbar'>
            <img src="" alt=""  className='logo'/>
            <ul>
                <li className='home'><NavLink to="/home">{t('home')}</NavLink></li>
                <li className='application'><NavLink to="/application">{t('application')}</NavLink></li>
                <li className='aboutus'><NavLink to="/aboutus">{t('aboutus')}</NavLink></li>
                <li className='schemes'><NavLink to="/schemes">{t('schemes')}</NavLink></li>
                <li className='resources'><NavLink to="/resources">{t('resources')}</NavLink></li>
                <li className='network'><NavLink to="/network">{t('network')}</NavLink></li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={theme=='light'?search_icon_light:search_icon_dark} alt=''/>
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme=='light'? toggle_light:toggle_dark} alt="" className='toggle-icon'/>
            <ul className='login'>
            <li className='app'><NavLink to="/">Login or Signup</NavLink></li>
            </ul>
 
        </div>
        <Languageoption onChange={(e)=>handleClick(e)}/>
            <button className='translation'>Translate</button>
        </div>
    )
}
export default Navbar