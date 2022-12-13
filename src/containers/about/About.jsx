import React from 'react'
import Services from '../services/Services'
import './about.css'

const About = () => {
  return (
    <div className='gr__about section__margin' id='about'>
      <div className='gr__about-services'>
        <Services />
      </div>

      <div className='gr__about-heading'>
        <h1 className='gradient-text'>Changing your focus from the problem to the solution will open up a world of possibilities that are beyond our wildest imaginations if you do it correctly.</h1>
      </div>
      <p>Visit Our Library</p>

      
      <div className='gr__about-container'>
        <h1 className='gradient-text'>Changing your focus from the problem to the solution will open up a world of possibilities that are beyond our wildest imaginations if you do it correctly.</h1>
        <Services />
        <Services />
        <Services />
      </div>
    </div>
    
  )
}

export default About
