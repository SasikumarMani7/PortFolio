import React from 'react'
import './SkillContainer.css'
import {Element} from 'react-scroll'
import skillsImg from '../../assets/skills.png'
import { LinearProgress } from '@mui/material'

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer_image'>
            <img src={skillsImg} alt='Skills' />
        </div>
        <div className='skillContainer__text'>
            <h2>Skill Set</h2>
            <div className='skillContainer__skillSet'>
                <h5>React</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant='determinate' value={95} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JavaScript</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Node JS</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant='determinate' value={85} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Ext JS</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider skillContainer__slider6'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>GitHub</h5>
                <div className='skillContainer__slider skillContainer__slider7'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer;
