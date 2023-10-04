import React from "react";
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
  LinkIconStyle
} from "../../styles/footer/FooterStyled";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_TELEGRAM } from "../../additionally/constants";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <ContainerStyle>
        <ContainerMainFooterStyle>
          <ContainerInfoStyle>
            <Logotype />
            <TextFooterStyle>
              Разработал web-приложение Заяц Кирилл. <NewLineStyle /> Email:
              kirill.zayats.99@mail.ru
            </TextFooterStyle>
            <TextFooterStyle>
              Разработал web-дизайн Elias <NewLineStyle /> Email:
              elias@elias-dev.ml
            </TextFooterStyle>
          </ContainerInfoStyle>
          <ContainerMediaStyle>
            <TitleContainerMediaStyle>Медиа</TitleContainerMediaStyle>
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
          © Все права защищены 2023. Сделал Заяц Кирилл
        </TextCopyrightStyle>
      </ContainerStyle>
    </FooterStyle>
  );
};

export default Footer;
