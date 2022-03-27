import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/askaman/" rel="noopener noreferrer" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/AmanShah05" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
        <a href="aman.shah@uwaterloo.ca" rel="noopener noreferrer" target="_blank"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials