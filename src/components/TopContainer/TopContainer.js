import React from 'react'
import './TopContainer.css'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'

const TopContainer = () => {
  return (
    <div>
      <Element name="about" className="topContainer">
        <TopContent />
      </Element>
    </div>
  )
}

export default TopContainer;
