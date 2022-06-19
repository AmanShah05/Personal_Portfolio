import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Aman_Shah_pf.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aman Shah</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <h5 className="i-item">Software Developer</h5>
            <h5 className="i-item">A Techie</h5>
            <h5 className="i-item">A Leader</h5>
            <h5 className="i-item">An Innovator</h5>
            <h5 className="i-item">Constant Learner</h5>
          </div>
        </div>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
    )
}

export default Header