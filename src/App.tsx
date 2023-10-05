import React from "react";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/AppStyled";
import Works from "./pages/Works";
import AboutMe from "./pages/AboutMe";
import { Route, Routes } from "react-router-dom";
import DownUp from "./components/DownUp";
import TransitionPage from "./components/TransitionPage";

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={`/`} element={
          <TransitionPage>
            <Home />
          </TransitionPage>
        } />
        <Route path={`/works`} element={
          <TransitionPage>
            <Works />
          </TransitionPage>
        } />
        <Route path={`/aboutme`} element={
          <TransitionPage>
            <AboutMe />
          </TransitionPage>
        } />
      </Routes>
      <Footer />
      <DownUp />
    </Theme>
  );
};

export default App;
