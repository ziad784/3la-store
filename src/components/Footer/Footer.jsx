import './Footer.css'

import React from 'react'

import {AiFillYoutube,AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className="left_footer">
            <ul>
                <li ><AiFillYoutube /></li>
                <li ><AiOutlineInstagram /></li>
                <li ><FaFacebookF /></li>
                <div style={{color:"white"}}>تابع جديدنا عبر وسائل التواصل الاجتماعي </div>
            </ul>
        </div>

        <div className="right_footer">
            <div style={{color:"white"}}>جميع الحقوق محفوطة لدى موقع <span style={{color:"#FFA340"}}>علاقّه</span></div>
        </div>
    </footer>
  )
}

export default Footer