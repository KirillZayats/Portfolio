import { styled } from "styled-components";

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

const CardStyle = styled.article``;
export {
    ContainerInfoStyle,
    TextStyle,
    ElementListStyle,
    ElementTechnologyStyle,
    ListTechnologyStyle,
    ImageWorkStyle,
    TitleWorkStyle,
    CardStyle
}