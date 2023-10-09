import React, { useEffect, useState } from "react";
import Description from "../components/home/Description";
import Works from "../components/home/Works";
import Skills from "../components/aboutMe/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import Contacts from "../components/contacts/Contacts";
import { ContainerHomePageStyle, ContainerProvider } from "../styles/AppStyled";
import Footer from "../components/footer/Footer";

const Home = () => {

  return (
    <ContainerProvider id="home">
    <ContainerHomePageStyle>
      <Description />
      <Works />
      <Skills />
      <AboutMe />
      <Contacts />
    </ContainerHomePageStyle>
    <Footer/>
    </ContainerProvider>
  );
};

export default Home;
