import React, { useEffect, useState } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  IconDiscord,
  IconTelegram,
  IconEmail,
  IconLinkedin,
  IconPhone,
} from "../../styles/AppStyled";
import {
  ListLinksStyle,
  TextContactsStyle,
  TextLinkStyle,
  ContactsStyle,
  ContainerContactsStyle,
  ContainerSocialLinksStyle,
  ElementListLinksStyle,
  TitleContainerSocialStyle,
  LinkSocialStyle,
} from "../../styles/contacts/ContactsStyled";
import {
  LINK_DISCORD,
  LINK_EMAIL,
  LINK_LINKEDIN,
  LINK_TELEGRAM,
  LINK_PHONE,
} from "../../additionally/constants";
import { useSelector } from "react-redux";
import { TContacts } from "../../additionally/interfaces";

const Contacts = () => {
  const { name, data } = useSelector((state: any) => state.language);
  const [dataContacts, setDataContacts] = useState<TContacts>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataContacts(data["0"].Ru.aboutme)
        : setDataContacts(data["0"].En.aboutme);
    }
  }, [name]);
  return (
    <ContactsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>
          {dataContacts && dataContacts.title_contacts}
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      <ContainerContactsStyle>
        <TextContactsStyle>
          {dataContacts && dataContacts.message_contacts}
        </TextContactsStyle>
        <ContainerSocialLinksStyle>
          <TitleContainerSocialStyle>
            {dataContacts && dataContacts.title_links}
          </TitleContainerSocialStyle>
          <ListLinksStyle>
            <ElementListLinksStyle>
              <LinkSocialStyle href={LINK_EMAIL} target="_blank">
                <IconEmail />
                <TextLinkStyle>kirill.zayats.99@mail.ru</TextLinkStyle>
              </LinkSocialStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <LinkSocialStyle href={LINK_PHONE} target="_blank">
                <IconPhone />
                <TextLinkStyle>+375295304989</TextLinkStyle>
              </LinkSocialStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <LinkSocialStyle href={LINK_LINKEDIN} target="_blank">
                <IconLinkedin />
                <TextLinkStyle>linkedin</TextLinkStyle>
              </LinkSocialStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <LinkSocialStyle href={LINK_TELEGRAM} target="_blank">
                <IconTelegram />
                <TextLinkStyle>@zayatsKirill</TextLinkStyle>
              </LinkSocialStyle>
            </ElementListLinksStyle>
            <ElementListLinksStyle>
              <LinkSocialStyle href={LINK_DISCORD} target="_blank">
                <IconDiscord />
                <TextLinkStyle>.kirillzayats</TextLinkStyle>
              </LinkSocialStyle>
            </ElementListLinksStyle>
          </ListLinksStyle>
        </ContainerSocialLinksStyle>
      </ContainerContactsStyle>
    </ContactsStyle>
  );
};

export default Contacts;
