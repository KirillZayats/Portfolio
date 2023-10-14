import React, { useEffect, useState } from "react";
import {
  TextDescriptionStyle,
  TitleStyle,
  ContainerInformationStyle,
  DescriptionStyle,
  LinkButtonStyle,
} from "../../styles/home/DescriptionStyled";
import { MarkedSymbolStyle, ButtonStyle } from "../../styles/AppStyled";
import { LINK_EMAIL } from "../../additionally/constants";
import { TDescription } from "../../additionally/interfaces";
import { userTypeSelector } from "../../store/hooks/userTypeSelector";

const Description = () => {
  const { name, data } = userTypeSelector((state: any) => state.language);
  const [dataDescription, setDataDescription] = useState<TDescription>();
  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataDescription(data["0"].Ru.description)
        : setDataDescription(data["0"].En.description);
    }
  }, [name]);

  return (
    <DescriptionStyle>
      <ContainerInformationStyle>
        <TitleStyle>
          {dataDescription && dataDescription.title_site_start}
          <MarkedSymbolStyle>
            {" "}
            {dataDescription && dataDescription.title_site_marker}{" "}
          </MarkedSymbolStyle>
          {dataDescription && dataDescription.title_site_end}
        </TitleStyle>
        <TextDescriptionStyle>
          {" "}
          {dataDescription && dataDescription.subtitle_site}
        </TextDescriptionStyle>
        <LinkButtonStyle to={LINK_EMAIL} target="_blank">
          <ButtonStyle>
            {dataDescription && dataDescription.button_write_me}
          </ButtonStyle>
        </LinkButtonStyle>
      </ContainerInformationStyle>
    </DescriptionStyle>
  );
};

export default Description;
