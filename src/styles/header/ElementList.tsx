import { styled } from "styled-components";
import { Link } from "react-router-dom";


const ElementListStyle = styled.li``;

const LinkNavStyle = styled(Link)`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 8px;
&:link {
    color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
}
&:visited {
    color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
}
`;

export {
    LinkNavStyle, ElementListStyle
}