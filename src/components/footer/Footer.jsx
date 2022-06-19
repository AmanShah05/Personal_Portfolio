import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Aman Shah</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><BsLinkedin/></a>
        <a href="https://instagram.com"><FaGithub/></a>
        <a href="https://twitter.com"><FiInstagram/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Aman Shah. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer