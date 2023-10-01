import { styled } from "styled-components";

const WorksStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 45px;
  /* padding: 60px 0; */
`;
const ContainerTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkViewAllStyle = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ListWorksStyle = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 31px;
`;
const ElementListStyle = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  width: 330px;
`;
const ImageWorkStyle = styled.img``;
const TitleWorkStyle = styled.h4`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const TextStyle = styled.p`
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ButtonOpenStyle = styled.button`
  width: 110px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  background: inherit;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
`;
const ListTechnologyStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`;

const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 16px;
`;
const ElementTechnologyStyle = styled.li``;

export {
  WorksStyle,
  ContainerInfoStyle,
  ContainerTitleStyle,
  ElementListStyle,
  ElementTechnologyStyle,
  ListTechnologyStyle,
  ListWorksStyle,
  ButtonOpenStyle,
  ImageWorkStyle,
  TitleWorkStyle,
  LinkViewAllStyle,
};
