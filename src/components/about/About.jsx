import React from 'react'
import'./About.css'
import ME from '../../assets/Niagra_1.png'
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
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>Hi there! I'm Aman Shah, a Mechatronics student at the University of Waterloo with a passion for Machine Learning, AI, and Cloud. I strive to create groundbreaking projects that address real-world challenges and shape a better future. With a focus on merging engineering, programming, and data-driven approaches, I aim to solve pressing problems and explore emerging technologies. </p>
          <p>As I continue my journey in the field of Mechatronics, I am eager to explore new horizons and embrace emerging technologies. I believe that the fusion of engineering, programming, and data-driven approaches holds the key to solving some of the most pressing problems of our time.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About