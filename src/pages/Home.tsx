import React, { useEffect, useState } from 'react'
import Description from '../components/home/Description';
import Works from '../components/home/Works';
import Skills from '../components/aboutMe/Skills';
import AboutMe from '../components/aboutMe/AboutMe';
import Contacts from '../components/contacts/Contacts';
import {ContainerHomePageStyle} from '../styles/AppStyled';
import { useLocation } from 'react-router-dom';

const Home:React.FC = () => {

  return (
    <ContainerHomePageStyle>
     <Description/>
     <Works/>
     <Skills/>
     <AboutMe/>
     <Contacts/>
    </ContainerHomePageStyle>
  )
}

export default Home
