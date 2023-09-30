import React from 'react'
import { styled } from "styled-components";
import Description from '../components/home/Description';
import Works from '../components/home/Works';
import Skills from '../components/aboutMe/Skills';
import AboutMe from '../components/aboutMe/AboutMe';

const ContainerStyle = styled.div`
  width: 1024px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  margin: 0 auto;
`;

const Home:React.FC = () => {
  return (
    <ContainerStyle>
     <Description/>
     <Works/>
     <Skills/>
     <AboutMe/>
    </ContainerStyle>
  )
}

export default Home
