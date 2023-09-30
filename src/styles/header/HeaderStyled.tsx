import { styled } from "styled-components";
import Icon from '../../styles/Icon';

const ContainerLogotypeStyle = styled.div`
display: flex;
justify-content: space-between;
gap: 8px;
`;
const NameLogotypeStyle = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const NavStyle = styled.nav``;
const ListNavStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const HeaderStyle = styled.header`
  margin: 0 auto;
  width: 100%;
`;

const ContainerStyle = styled.div`
  width: 1024px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px 0 8px;
`;

const Svg = styled(Icon)` 
  width: 16px; 
  height: 17px;
  margin-top: 2.5px;
`

const Iconlogotype: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
    <Svg viewBox="0 0 16 17" className={className}>
        <g id="Logo">
            <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
        </g>
    </Svg>
)

export {
    Iconlogotype, 
    ContainerStyle, 
    ContainerLogotypeStyle, 
    HeaderStyle,
    NavStyle, 
    ListNavStyle, 
    NameLogotypeStyle
}