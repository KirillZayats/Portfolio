import React, { useState } from "react";
import { PropsElementList } from "../../additionally/interfaces";
import {
  LinkNavStyle,
  ElementListStyle,
} from "../../styles/header/ElementList";
import { MarkedSymbolStyle } from "../../styles/AppStyled";

const ElementList: React.FC<PropsElementList> = ({ textElement, link, closeSidebar }) => {
  const close = () => {
    closeSidebar();
  };

  return (
    <ElementListStyle>
      <LinkNavStyle to={link} onClick={close} className="no-active">
        <MarkedSymbolStyle>#</MarkedSymbolStyle>
        {textElement}
      </LinkNavStyle>
    </ElementListStyle>
  );
};

export default ElementList;
