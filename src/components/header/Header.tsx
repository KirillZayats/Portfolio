import React from 'react'
import { LINKS_NAV } from '../../additionally/constants';
import ElementList from './ElementList';

import {
  ContainerStyle, 
  HeaderStyle,
  NavStyle, 
  ListNavStyle, 
} from '../../styles/header/HeaderStyled';
import Logotype from '../Logotype';

const Header: React.FC = () => {

  return (
    <HeaderStyle>
      <ContainerStyle>
        <Logotype/>
        <NavStyle>
          <ListNavStyle>
            {
              LINKS_NAV.map((element, index) => (<ElementList key={index} textElement={element} />))
            }
          </ListNavStyle>
        </NavStyle>
      </ContainerStyle>
    </HeaderStyle>
  )
}

export default Header
