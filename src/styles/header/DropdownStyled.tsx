import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const DropdownStyle = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  position: relative;
    cursor: pointer;

  @media ${device.mobileS} {
    font-size: 32px;
    &:hover .hidden{
    height: 40px;
  }
  }

  @media ${device.laptop} {
    font-size: 16px;
    &:hover .hidden{
    height: 20px;
  }  
}

  &:hover .hidden{
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
    visibility: visible;
    opacity: 1;
  }

  .hidden:hover {
    border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  }

  .active-language:hover span, .hidden:hover span {
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
  }

  .active-language:hover .left, .active-language:hover .right {
    background: ${({ theme }) => theme.colors.MARKER_COLOR};
  }

  &:hover .left{
    transform: rotate(-45deg);
  }

  &:hover .right{
    transform: rotate(45deg);
}


`;
const ContainerActiveOptionStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 1px;
`;
const OptionTextStyle = styled.span``;
const ArrowStyle = styled.div`
  @media ${device.mobileS} {
    height: 11px;
  width: 20px;}

  @media ${device.laptop} {
    height: 11px;
  width: 12px;  }
`;
const LineArrowStyle = styled.div`
  position: relative;
  transition: all .4s ease;
  background: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  &.left {
    transform: rotate(45deg);
  }
  &.right {
    transform: rotate(-45deg);
  }

  @media ${device.mobileS} {
    width: 13px;
  height: 3px;  
  &.left {
    top: 19px;
  }
  &.right {
    top: 16px;
    left: 8px;
  }
}

  @media ${device.laptop} {
    width: 7px;
  height: 2px;  
  &.left {
    top: 10px;
  }
  &.right {
    top: 8px;
    left: 4px;
  }
  }
`;

const ContainerHidenOptionStyle = styled.div`
  position: absolute;
  visibility: hidden;
  height: 0;
  opacity: 0;
  padding: 2px 1px;
  text-align: center;
  transition: all .4s ease;

  @media ${device.mobileS} {
    width: 63px;
}

  @media ${device.laptop} {
    width: 34px;
  }
`;
const OptionHidenStyle = styled.span``;

export {
  ArrowStyle,
  DropdownStyle,
  ContainerActiveOptionStyle,
  OptionTextStyle,
  LineArrowStyle,
  ContainerHidenOptionStyle,
  OptionHidenStyle,
};
