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
        <a href="https://www.linkedin.com/in/askaman/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AmanShah05" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com"><FiInstagram/></a>
      </div>

      <div className='footer_copyright'>
        <small>Created By Aman Shah | &copy;2022 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer