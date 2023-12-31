import React, { useEffect, useState } from "react";
import {
  DropdownStyle,
  ContainerActiveOptionStyle,
  OptionTextStyle,
  LineArrowStyle,
  ContainerHidenOptionStyle,
  OptionHidenStyle,
  ArrowStyle,
} from "../../styles/header/DropdownStyled";
import { useAction } from "../../store/hooks/useAction";
import { userTypeSelector } from "../../store/hooks/userTypeSelector";

const Dropdown = (props: { closeSidebar: Function }) => {
  const nameLanguage = userTypeSelector((state: any) => state.language.name);
  const { saveLanguage } = useAction();
  const [activeLanguage, setActiveLanguage] = useState("");
  const [hiddenLanguage, setHiddenLanguage] = useState("");

  useEffect(() => {
    setActiveLanguage(nameLanguage);
    setHiddenLanguage(nameLanguage === "RU" ? "EN" : "RU");
  }, [nameLanguage]);

  const changeLanguage = () => {
    setActiveLanguage(activeLanguage === "RU" ? "EN" : "RU");
    setHiddenLanguage(hiddenLanguage === "RU" ? "EN" : "RU");
    saveLanguage(hiddenLanguage);
    props.closeSidebar();
  };

  return (
    <DropdownStyle>
      <ContainerActiveOptionStyle className="active-language">
        <OptionTextStyle>{activeLanguage}</OptionTextStyle>
        <ArrowStyle>
          <LineArrowStyle className="left" />
          <LineArrowStyle className="right" />
        </ArrowStyle>
      </ContainerActiveOptionStyle>
      <ContainerHidenOptionStyle className="hidden" onClick={changeLanguage}>
        <OptionHidenStyle>{hiddenLanguage}</OptionHidenStyle>
      </ContainerHidenOptionStyle>
    </DropdownStyle>
  );
};

export default Dropdown;
