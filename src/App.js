import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/skillContainer/SkillContainer';
import ProjectContainer from './components/projectContainer/ProjectContainer';
import ExperienceContainer from './components/experienceContainer/ExperienceContainer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
}

export default App;
