import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const DropdownStyle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  position: relative;
    cursor: pointer;

  &:hover .hidden{
    display: block;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
    visibility: visible;
    opacity: 1;
  }

  &:hover .left{
    transform: rotate(-45deg);
    top: 10px;
  }

  &:hover .right{
    transform: rotate(45deg);
    top: 8px;
    left: 4px;
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
  height: 11px;
  width: 12px;
`;
const LineArrowStyle = styled.div`
  position: relative;
  transition: all .4s ease;
  width: 7px;
  height: 2px;
  background: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  &.left {
    transform: rotate(45deg);
    top: 10px;
  }
  &.right {
    transform: rotate(-45deg);
    top: 8px;
    left: 4px;
  }
`;

const ContainerHidenOptionStyle = styled.div`
  position: absolute;
  visibility: hidden;
  height: 0;
  opacity: 0;
  width: 34px;
  padding: 2px 1px;
  text-align: center;
  transition: all .4s ease;

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
