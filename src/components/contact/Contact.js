import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import {GitHub, LinkedIn    } from '@mui/icons-material';
import {IconButton} from '@mui/material'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email Id : <span>sasikumarmani759@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@SasikumarMani7</span>
            </p>
            <div className='contact__icons'>
                <a target="_blank"  rel="noreferrer" href='https://www.linkedin.com/in/sasikumarmani7/'>
                    <IconButton>
                    <LinkedIn />
                    </IconButton>
                </a>
                <a target="_blank"  rel="noreferrer" href='https://github.com/SasikumarMani7/'>
                    <IconButton>
                    <GitHub />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact;
