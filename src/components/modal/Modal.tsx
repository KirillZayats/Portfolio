import React, { useEffect } from "react";
import {
  ContainerModalStyle,
  ModalStyle,
  TextSectionStyle,
  TitleSectionStyle,
  HeaderModalStyle,
  BodyModalStyle,
  SectionModalStyle,
  SectionYearStyle,
  ButtonStyle,
  FooterModalStyle,
  ContainerButtons,
  LinkStyle,
  TitleModalStyle,
} from "../../styles/modal/ModalStyled";
import { IPropsModal } from "../../additionally/interfaces";

const Modal = ({
  active,
  setActive,
  details,
  text_button_hidden,
}: IPropsModal) => {
  const hideModal = () => {
    setActive(false);
  };

  return (
    <ModalStyle
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <ContainerModalStyle
        className={active ? "active" : ""}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <HeaderModalStyle>
          <TitleModalStyle>{details.name}</TitleModalStyle>
        </HeaderModalStyle>
        <BodyModalStyle>
          <SectionModalStyle>
            <TitleSectionStyle>{details.title_aim}</TitleSectionStyle>
            <TextSectionStyle>{details.aim}</TextSectionStyle>
          </SectionModalStyle>
          <SectionModalStyle>
            <TitleSectionStyle>{details.title_requirements}</TitleSectionStyle>
            <TextSectionStyle>{details.requirements}</TextSectionStyle>
          </SectionModalStyle>
          <SectionModalStyle>
            <ContainerButtons>
              {details.link_git && (
                <LinkStyle href={`${details.link_git}`} target="_blank">
                  <ButtonStyle>Github</ButtonStyle>
                </LinkStyle>
              )}
              <ButtonStyle onClick={hideModal}>
                {text_button_hidden}
              </ButtonStyle>
            </ContainerButtons>
          </SectionModalStyle>
        </BodyModalStyle>
        <FooterModalStyle>
          <SectionYearStyle>
            <TextSectionStyle>{details.title_year}</TextSectionStyle>
            <TextSectionStyle>{details.year_created}</TextSectionStyle>
          </SectionYearStyle>
        </FooterModalStyle>
      </ContainerModalStyle>
    </ModalStyle>
  );
};

export default Modal;
