import Icon from "../../styles/Icon";
import { styled } from "styled-components";

const ContactsStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0;
  gap: 45px;
`;

const ContainerContactsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 8px;

`;
const ElementListLinksStyle = styled.li`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export {
    ListLinksStyle,
    TextContactsStyle,
    TextLinkStyle,
    ContactsStyle,
    ContainerContactsStyle,
    ContainerSocialLinksStyle,
    ElementListLinksStyle,
    TitleContainerSocialStyle
}
