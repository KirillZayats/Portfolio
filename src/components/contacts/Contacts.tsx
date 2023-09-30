import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  IconDiscord,
  IconTelegram,
  IconEmail,
  IconLinkedin,
} from "../../styles/AppStyled";
import {
    ListLinksStyle,
    TextContactsStyle,
    TextLinkStyle,
    ContactsStyle,
    ContainerContactsStyle,
    ContainerSocialLinksStyle,
    ElementListLinksStyle,
    TitleContainerSocialStyle
} from '../../styles/contacts/ContactsStyled'

const Contacts = () => {
  return (
    <ContactsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>контакты
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      <ContainerContactsStyle>
        <TextContactsStyle>
          По любым интересующим вас вопросам можно написать мне. Буду очень рад каждому вашему вопросу :)
        </TextContactsStyle>
        <ContainerSocialLinksStyle>
          <TitleContainerSocialStyle>Написать можно здесь</TitleContainerSocialStyle>
          <ListLinksStyle>
            <ElementListLinksStyle>
              <IconEmail />
              <TextLinkStyle>kirill.zayats.99@mail.ru</TextLinkStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <IconLinkedin />
              <TextLinkStyle>linkedin</TextLinkStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <IconTelegram />
              <TextLinkStyle>@zayatsKirill</TextLinkStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <IconDiscord />
              <TextLinkStyle>.kirillzayats</TextLinkStyle>
            </ElementListLinksStyle>
          </ListLinksStyle>
        </ContainerSocialLinksStyle>
      </ContainerContactsStyle>
    </ContactsStyle>
  );
};

export default Contacts;
