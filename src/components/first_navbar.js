import React from 'react'
import {FaInstagram , FaFacebook , FaTwitter , FaYoutube} from 'react-icons/fa'

import G20_Logo from '../asset/g20-logo.png'
 


const first_navbar = () => {
  return (
    <div className='first_navbar'>
      <div className='links_and_g20'>
      <ul>
        <li>MoE</li>
        <li>UGC</li>
        <li>SWAYAM</li>
        <li className='make_more_little_big'>Important Link</li>
        <li>Various Committees</li>
      </ul>

      <img src={G20_Logo} alt='there_is_no_g20'/>

      </div>

      <div className='lang_search_social'>

      <h3>Language : Hindi | Urdu</h3>

      <input placeholder='Search...'/>

      <ul>
        <li><FaFacebook/></li>
        <li><FaTwitter/></li>
        <li><FaYoutube/></li>
        <li><FaInstagram/></li>
      </ul>
        
      </div>
    </div>
  )
}

export default first_navbar
