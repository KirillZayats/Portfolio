import { styled } from "styled-components";

const NavStyle = styled.nav``;
const ListNavStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const HeaderStyle = styled.header`
  margin: 0 auto;
  width: 100%;
  position: fixed;
`;

const ContainerStyle = styled.div`
  width: 1060px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px 0 8px;
`;

export {
    ContainerStyle, 
    HeaderStyle,
    NavStyle, 
    ListNavStyle, 
}