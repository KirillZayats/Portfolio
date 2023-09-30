import { styled } from "styled-components";

const ElementListStyle = styled.li``;

const LinkNavStyle = styled.a`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const MarkedSymbolStyle = styled.span`
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
`;

export {
    MarkedSymbolStyle, LinkNavStyle, ElementListStyle
}