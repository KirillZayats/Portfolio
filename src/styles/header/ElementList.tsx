import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { device, size } from "../media/MediaQueryStyled";

const ElementListStyle = styled.li``;

const LinkNavStyle = styled(Link)`
font-style: normal;
line-height: normal;
padding: 5px;
font-weight: 500;

@media ${device.mobileS} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }

  &.no-active {
    color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  }

  &.active {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
  }

&:link {
    color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
}
`;

export {
    LinkNavStyle, ElementListStyle
}