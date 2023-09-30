import React from 'react'
import { LINKS_NAV } from '../../additionally/constants';
import ElementList from './ElementList';

import {
  Iconlogotype, 
  ContainerStyle, 
  ContainerLogotypeStyle, 
  HeaderStyle,
  NavStyle, 
  ListNavStyle, 
  NameLogotypeStyle
} from '../../styles/header/HeaderStyled'

const Header: React.FC = () => {

  return (
    <HeaderStyle>
      <ContainerStyle>
        <ContainerLogotypeStyle>
          <Iconlogotype />
          <NameLogotypeStyle>
            Заяц Кирилл
          </NameLogotypeStyle>
        </ContainerLogotypeStyle>
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
