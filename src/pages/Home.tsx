import React from 'react'
import { styled } from "styled-components";
import Description from '../components/home/Description';
import Works from '../components/home/Works';
import Skills from '../components/aboutMe/Skills';
import AboutMe from '../components/aboutMe/AboutMe';
import Contacts from '../components/contacts/Contacts';

const ContainerStyle = styled.div`
  width: 1024px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  margin: 0 auto;
  padding-top: 61px;
`;

const Home:React.FC = () => {
  return (
    <ContainerStyle>
     <Description/>
     <Works/>
     <Skills/>
     <AboutMe/>
     <Contacts/>
    </ContainerStyle>
  )
}

export default Home
