import React from 'react'
import'./About.css'
import ME from '../../assets/Niagra.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icons'/>
              <h5>Clients</h5>
              <small>3+</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icons'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About