import React from "react"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/Footer"
import { Theme } from "./styles/Theme"
import { GlobalStyle } from "./styles/AppStyled"

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle/>
      <Header/>
      <Home/>
      {/* <Footer/> */}
    </Theme>
  )
}

export default App
