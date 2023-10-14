import React, { useEffect, useState } from "react";
import Logotype from "../Logotype";
import {
  IconGithub,
  IconLinkedin,
  IconTelegram,
  NewLineStyle,
} from "../../styles/AppStyled";
import {
  TextCopyrightStyle,
  ContainerIconsLinkStyle,
  ContainerInfoStyle,
  ContainerMainFooterStyle,
  ContainerMediaStyle,
  TitleContainerMediaStyle,
  TextFooterStyle,
  FooterStyle,
  ContainerStyle,
  LinkIconStyle,
} from "../../styles/footer/FooterStyled";
import {
  LINK_GITHUB,
  LINK_LINKEDIN,
  LINK_TELEGRAM,
} from "../../additionally/constants";
import { TFooter } from "../../additionally/interfaces";
import { userTypeSelector } from "../../store/hooks/userTypeSelector";

const Footer = () => {
  const { name, data } = userTypeSelector((state: any) => state.language);
  const [dataFooter, setDataFooter] = useState<TFooter>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataFooter(data["0"].Ru.footer)
        : setDataFooter(data["0"].En.footer);
    }
  }, [name]);

  return (
    <FooterStyle>
      <ContainerStyle>
        <ContainerMainFooterStyle>
          <ContainerInfoStyle>
            <Logotype />
            <TextFooterStyle>
              {dataFooter && dataFooter.developer_text}
              <NewLineStyle /> Email: kirill.zayats.99@mail.ru
            </TextFooterStyle>
            <TextFooterStyle>
              {dataFooter && dataFooter.design_text}
              <NewLineStyle /> Email: elias@elias-dev.ml
            </TextFooterStyle>
          </ContainerInfoStyle>
          <ContainerMediaStyle>
            <TitleContainerMediaStyle>
              {dataFooter && dataFooter.media}
            </TitleContainerMediaStyle>
            <ContainerIconsLinkStyle>
              <LinkIconStyle href={LINK_LINKEDIN} target="_blank">
                <IconLinkedin />
              </LinkIconStyle>
              <LinkIconStyle href={LINK_GITHUB} target="_blank">
                <IconGithub />
              </LinkIconStyle>
              <LinkIconStyle href={LINK_TELEGRAM} target="_blank">
                <IconTelegram />
              </LinkIconStyle>
            </ContainerIconsLinkStyle>
          </ContainerMediaStyle>
        </ContainerMainFooterStyle>
        <TextCopyrightStyle>
          {dataFooter && dataFooter.text_copyright}
        </TextCopyrightStyle>
      </ContainerStyle>
    </FooterStyle>
  );
};

export default Footer;
