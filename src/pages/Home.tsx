import React from 'react'
import { styled } from "styled-components";
import Description from '../components/home/Description';

const ContainerStyle = styled.div`
  width: 1024px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  margin: 0 auto;
`;



const Home:React.FC = () => {
  return (
    <ContainerStyle>
     <Description/>
    </ContainerStyle>
  )
}

export default Home
