import React, { useEffect, useState } from 'react'
import { LINKS_NAV } from '../../additionally/constants';
import ElementList from './ElementList';
import {
  ContainerStyle, 
  HeaderStyle,
  NavStyle, 
  ListNavStyle, 
} from '../../styles/header/HeaderStyled';
import Logotype from '../Logotype';
import Sidebar from './Sidebar';
import { InputCheckBoxStyle } from '../../styles/header/SidebarStyled';
import Dropdown from './Dropdown';

const Header: React.FC = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [buttonDownUp, setButtonDownUp] = useState<HTMLElement | null>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthWindow(window.innerWidth);
    });
  }, []);

  useEffect (() => {
    setButtonDownUp(document.getElementById("down-up"));
    document.addEventListener("scroll", scrollPage);
  })

  const scrollPage = () => {    
    if (window.scrollY >= 500) {
      viewButtonDownUp();
    }
    if (window.scrollY < 500) {
      hideButtonDownUp();
    }
  };

  const viewButtonDownUp = () => {
    if(buttonDownUp != null) {
      buttonDownUp.style.opacity = "1";
      buttonDownUp.style.bottom = "20px";
    }
  };

  const hideButtonDownUp = () => {
    if(buttonDownUp != null) {
      buttonDownUp.style.opacity = "0";
      buttonDownUp.style.bottom = "-50px";
    }
  };
  

  return (
    widthWindow >= 1024 ? (
      <HeaderStyle>
      <ContainerStyle>
        <Logotype/>
        <NavStyle>
          <ListNavStyle>
            {
              LINKS_NAV.map((element, index) => (<ElementList key={index} textElement={element[0]} link={element[1]} />))
            }
          </ListNavStyle>
        </NavStyle>
        <Dropdown/>
      </ContainerStyle>
    </HeaderStyle>
    ) : (
      <HeaderStyle>
      <ContainerStyle>
        <Logotype/>
        <InputCheckBoxStyle
                type="checkbox"
                id="checked"
              />
        <Sidebar/>
        <NavStyle>
          <ListNavStyle>
            {
              LINKS_NAV.map((element, index) => (<ElementList key={index} textElement={element[0]} link={element[1]} />))
            }
          </ListNavStyle>
          <Dropdown/>

        </NavStyle>
      </ContainerStyle>
    </HeaderStyle>
    )
  )
}

export default Header
