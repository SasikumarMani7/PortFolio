import React from 'react'
import "./ExperienceContainer.css"
import { Element } from 'react-scroll'
import Experience from '../experienceBox/Experience'

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number="+3" title="Work Experience"/>
            <Experience number="+2" title="Client Project" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="+3" title="React JS, Ext JS, JavaScript, Node JS, HTML, CSS Experience"/>
        </div>
    </Element>
  )
}

export default ExperienceContainer;
