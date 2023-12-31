import { styled, createGlobalStyle, keyframes } from "styled-components";
import Icon from "../styles/Icon";
import { device, size } from "../styles/media/MediaQueryStyled";
import { Link } from "react-router-dom";

const Swing = keyframes`
    20% { transform: rotate(10deg); } 
    40% { transform: rotate(-7deg); } 
    60% { transform: rotate(3deg); } 
    80% { transform: rotate(-3deg); } 
    100% { transform: rotate(0deg); } 
`;

const Scale = keyframes`
    0% {
          transform: scale(1);

    }
      50% {
          transform: scale(1.1);
      }

      100% {
          transform: scale(1);
      }
  
`;

const ScaleLink = keyframes`
    0% {
          transform: scale(1);

    }
      50% {
          transform: scale(1.05);
      }

      100% {
          transform: scale(1);
      }
  
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;

  }

  body {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
    font-family: 'Fira Code', sans-serif;
    overflow-x:hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }


  button {
    font-family: 'Fira Code', sans-serif;
    font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }

  li {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
  }

  a, button {
    cursor: pointer;
  }

  a, button, span, path {
    transition: all .4s ease;
  }

  svg:hover, li:hover svg, header a:hover svg, footer a:hover svg {
    animation: ${Swing} .5s ease-in;  
  }

  button:active, #down-up:active {
    animation: ${Scale} .1s ease-in;  
  }
  a:active {
    animation: ${ScaleLink} .3s ease-in;  
  }

  .no-scroll {
    overflow: hidden;
  } 
`;

const MarkedSymbolStyle = styled.span`
  color: ${({ theme }) => theme.colors.MARKER_COLOR};
`;

const TitleStyle = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const LineTitleStyle = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.MARKER_COLOR};
  @media ${device.mobileS} {
    width: 100px;
  }

  @media ${device.mobileM} {
    width: 150px;
  }

  @media ${device.mobileL} {
    width: 180px;
  }

  @media ${device.tablet} {
    width: 170px;
  }

  @media ${device.tabletS} {
    width: 210px;
  }

  @media ${device.laptop} {
    width: 240px;
  }
`;

const TitleBlockStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const LinkStyle = styled(Link)`
  &:link span,
  &:visited span {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
`;

const ButtonStyle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  width: 148px;
  height: 37px;
  background: inherit;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};

  &:hover {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
    border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
    background: ${({ theme }) => theme.colors.MARKER_COLOR};
  }
`;

const LogotypeStyle = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover span {
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.MARKER_COLOR};
  }
`;
const NameLogotypeStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Svg = styled(Icon)`
  width: 16px;
  height: 17px;
  margin-top: 2.5px;
`;

const Iconlogotype: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <Svg viewBox="0 0 16 17" className={className}>
    <g id="Logo">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
        fill="white"
      />
    </g>
  </Svg>
);

const SvgSocial = styled(Icon)`
  width: 32px;
  height: 32px;
`;

const IconEmail: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <SvgSocial viewBox="0 0 32 32" className={className}>
    <path
      d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z"
      fill="#ABB2BF"
    />
  </SvgSocial>
);

const IconLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <SvgSocial viewBox="0 0 32 32" className={className}>
    <path
      d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
      fill="#ABB2BF"
    />
  </SvgSocial>
);

const IconTelegram: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <SvgSocial viewBox="0 0 32 32" className={className}>
    <path
      d="M27 15.5C27 18.55 25.7884 21.4751 23.6317 23.6317C21.4751 25.7884 18.55 27 15.5 27C12.45 27 9.52494 25.7884 7.36827 23.6317C5.2116 21.4751 4 18.55 4 15.5C4 12.45 5.2116 9.52494 7.36827 7.36827C9.52494 5.2116 12.45 4 15.5 4C18.55 4 21.4751 5.2116 23.6317 7.36827C25.7884 9.52494 27 12.45 27 15.5ZM15.9126 12.4899C14.7942 12.9556 12.5574 13.9187 9.20519 15.3792C8.66181 15.5949 8.37575 15.8076 8.34987 16.0146C8.30675 16.3639 8.74519 16.5019 9.34175 16.6903L9.59331 16.7693C10.1798 16.9605 10.9704 17.1833 11.3801 17.1919C11.7539 17.2006 12.1693 17.0482 12.6279 16.7319C15.7602 14.6174 17.3774 13.5493 17.478 13.5263C17.5499 13.5091 17.6505 13.4889 17.7166 13.5493C17.7842 13.6083 17.777 13.7218 17.7698 13.752C17.7267 13.9374 16.006 15.5359 15.1162 16.3639C14.8387 16.6227 14.6418 16.8053 14.6016 16.8469C14.5129 16.9375 14.4228 17.0267 14.3313 17.1143C13.7851 17.6404 13.3768 18.0343 14.3529 18.6783C14.8229 18.9888 15.1996 19.2432 15.5747 19.4991C15.983 19.778 16.3912 20.0554 16.9202 20.4033C17.0539 20.4896 17.1833 20.583 17.3084 20.6721C17.7842 21.0114 18.214 21.3161 18.7416 21.2673C19.0492 21.2385 19.3669 20.951 19.5279 20.0885C19.9088 18.0516 20.6578 13.6399 20.8302 11.8214C20.8408 11.6703 20.8345 11.5184 20.8116 11.3686C20.798 11.2478 20.7395 11.1364 20.6477 11.0567C20.5169 10.9664 20.361 10.9196 20.2021 10.923C19.7708 10.9302 19.1052 11.1616 15.9126 12.4899Z"
      fill="#ABB2BF"
    />
  </SvgSocial>
);

const IconDiscord: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <SvgSocial viewBox="0 0 32 32" className={className}>
    <path
      d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z"
      fill="#ABB2BF"
    />
  </SvgSocial>
);

const IconGithub: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <SvgSocial viewBox="0 0 32 32" className={className}>
    <path
      d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z"
      fill="#ABB2BF"
    />
  </SvgSocial>
);

const IconPhone: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <SvgSocial viewBox="0 0 24 24" className={className}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
        fill="#ABB2BF"
      />{" "}
    </g>
  </SvgSocial>
);

const NewLineStyle = styled.br``;

const ContainerHomePageStyle = styled.main`
  margin: 0 auto;
  padding: 121px 0 60px;
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    max-width: calc(100% - 20px);
    gap: 55px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
    gap: 70px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 50px);
    gap: 90px;
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 300px);
    gap: 105px;
  }
`;
const ContainerPageStyle = styled.main`
  margin: 0 auto;
  padding: 120px 0 60px;
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    max-width: calc(100% - 20px);
    gap: 50px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
    gap: 60px;
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

const SubTitleStyle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;

const ContainerTitlePageStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContainerBlockColumnStyle = styled.section`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    gap: 30px;
  }

  @media ${device.tablet} {
    gap: 40px;
  }
`;

const ContainerProvider = styled.div``;

const ContainerLoader = styled.div`
  margin: auto;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export {
  SubTitleStyle,
  ContainerTitlePageStyle,
  ContainerBlockColumnStyle,
  GlobalStyle,
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ButtonStyle,
  NameLogotypeStyle,
  Iconlogotype,
  LogotypeStyle,
  IconDiscord,
  IconTelegram,
  IconEmail,
  IconLinkedin,
  IconGithub,
  NewLineStyle,
  ContainerHomePageStyle,
  ContainerPageStyle,
  LinkStyle,
  IconPhone,
  ContainerProvider,
  ContainerLoader,
};
