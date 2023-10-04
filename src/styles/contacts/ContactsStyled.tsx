import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const ContactsStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobileS} {
    max-width: 100%;
    gap: 30px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
    gap: 40px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 50px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 300px);
  }
`;

const ContainerContactsStyle = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    gap: 30px;
  }

  @media ${device.tablet} {
    flex-direction: row;
  justify-content: space-between;
  }
`;

const TextContactsStyle = styled.p`
  max-width: 490px;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;
const ContainerSocialLinksStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};

  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;
const TitleContainerSocialStyle = styled.h4`
  font-weight: 600;
  padding: 8px;
`;
const TextLinkStyle = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;
const ListLinksStyle = styled.ul`
max-width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;

  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 8px;

`;
const ElementListLinksStyle = styled.li`

`;

const LinkSocialStyle = styled.a`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

  &:hover path{
    fill: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
  &:hover span{
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
`;

export {
    ListLinksStyle,
    TextContactsStyle,
    TextLinkStyle,
    ContactsStyle,
    ContainerContactsStyle,
    ContainerSocialLinksStyle,
    ElementListLinksStyle,
    TitleContainerSocialStyle,
    LinkSocialStyle
}
