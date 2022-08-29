import React from 'react'
import './TopContent.css'
import { Link } from 'react-scroll';
import resume from '../../assets/files/myFiles/Sasikumar Mani_System Engineer_Resume.pdf'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Sasikumar Mani</h1>
            <p>An expert in web development</p>
            <a  target="_break" rel="noreferrer" href={resume} download>
                <button className='topContent__downloadButton'>Download Resume</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent;
