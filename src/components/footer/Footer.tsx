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
} from "../../styles/footer/FooterStyled";

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
              <IconLinkedin />
              <IconGithub />
              <IconTelegram />
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
