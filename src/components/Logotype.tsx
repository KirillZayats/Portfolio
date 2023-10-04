import React from "react";
import {
  NameLogotypeStyle,
  Iconlogotype,
  LogotypeStyle,
  LinkStyle,
} from "../styles/AppStyled";

const Logotype = () => {
  return (
    <LinkStyle to={"/"}>
      <LogotypeStyle>
        <Iconlogotype />
        <NameLogotypeStyle>zayakiri</NameLogotypeStyle>
      </LogotypeStyle>
    </LinkStyle>
  );
};

export default Logotype;
