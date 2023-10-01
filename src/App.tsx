import React from "react";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/AppStyled";
import Works from "./pages/Works";
import AboutMe from "./pages/AboutMe";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/works`} element={<Works />} />
        <Route path={`/aboutme`} element={<AboutMe />} />
      </Routes>
      <AboutMe />
      <Footer />
    </Theme>
  );
};

export default App;
