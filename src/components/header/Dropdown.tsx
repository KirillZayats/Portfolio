import React from "react";
import {
  DropdownStyle,
  ContainerActiveOptionStyle,
  OptionTextStyle,
  LineArrowStyle,
  ContainerHidenOptionStyle,
  OptionHidenStyle,
  ArrowStyle,
} from "../../styles/header/DropdownStyled";
const Dropdown = () => {
  return (
    <DropdownStyle>
      <ContainerActiveOptionStyle className="active">
        <OptionTextStyle>RU</OptionTextStyle>
        <ArrowStyle>
          <LineArrowStyle className="left" />
          <LineArrowStyle className="right" />
        </ArrowStyle>
      </ContainerActiveOptionStyle>
      <ContainerHidenOptionStyle className="hidden">
        <OptionHidenStyle>EN</OptionHidenStyle>
      </ContainerHidenOptionStyle>
    </DropdownStyle>
  );
};

export default Dropdown;
