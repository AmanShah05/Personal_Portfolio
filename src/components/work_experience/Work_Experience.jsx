import React from 'react'
import './Work_Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Experience I Have</h5>
      <h2>My Work Experience</h2>

      <div className="container work_experience_container">
        <div className="experience_frontend">
          <h3>Eclipse Automation - Acquired by Accenture</h3>
          <span className='changeofh4'>Controls Software Designer Intern</span>
          <div className="work_experience_content">
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon-2'/>
              <div>
                <small className='text-light'>Collaborated with the largest electric vehicle company on developing an automated battery assembly system, leveraging Siemens PLCs and HMI programming to optimize production throughput by 20%. </small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Programmed Fanuc robot for motion path creation, program customization, and performance optimization.</small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon-2'/>
              <div>
                <small className='text-light'>Designed, programmed, and implemented 30+ features in HMI and PLC, including safety, actuation, and data display functionality, resulting in enhanced performance and functionality of automotive systems.</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>GrantMatch</h3>
          <span className='changeofh4'>Junior Software Developer</span>
          <div className="work_experience_content">
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Created, developed and enhanced test suits and scripts as well as used the scripts to improve security of the application. </small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Created forms in Vue.js using old larval code from their old platform to the new Django platform and unit tested using jest.</small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Constructed web pages with login, data grid view paging, and data manipulation functionality with HTML, SQL, and Vue.js</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_frontend">
          <h3>Junior Achivement</h3>
          <span className='changeofh4'>President</span>
          <div className="work_experience_content">
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Led a profitable company that sold candle cases consisting of 19 students entrepreneurs and won "Best Company Award". </small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Managed the complete operation of the company and ensured all goals were met based on the company's strategic plans.</small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Generated a total sales of 200+ products totalling $2400+ in 3-4 weeks and won the "Highest Sales Award of the Year".</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Waterloop</h3>
          <span className='changeofh4'>Mechanical Team Member</span>
          <div className="work_experience_content">
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Built a Powertrain prototype with a miniature LIM, HV Battery enclosure, and a Motor controller to move the protoype. </small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Designed and constructed a Solidworks design of powertrain, including all the components and structure holding the parts.</small>
              </div>
            </article>
            <article className='work_experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <small className='text-light'>Currently working on designing and researching the sensors, solenoid actuators and control system for Guidance.</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience