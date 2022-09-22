import styled from "styled-components";
import { device } from "../../theme/device";

interface Button {
  bgWhite?: any;
  colorBlack?: any;
  margin?: string;
  padding?: string;
  justify?: string;
  border?: any;
  width?: string;
  align?: string;
}

export const ButtonBase = styled.button<Button>`
  border-radius: 6px;
  padding: ${({ padding }) => padding || "10px 27px"};
  font-weight: 600;
  margin: ${({ margin }) => margin || 0};
  width: ${({ width }) => width};
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  & > img {
    padding-left: 11px;
    width: 30px;
    height: 11px;
  }

  @media ${device.phone} {
    width: 100%;
  }
`;

export const Button = styled(ButtonBase)`
  border: 1px solid
    ${({ border }: Button) => (border && "black") || "transparent"};
  color: ${({ colorBlack }) => (colorBlack && "black") || "#fff"};
  background-color: ${({ bgWhite }) => (bgWhite && "#fff") || "black"};
  &:hover {
    background-color: ${({ bgWhite }) =>
      (bgWhite && "rgb(234, 246, 246)") || "rgb(197, 231, 231)"};
    border: 1px solid
      ${({ border }) => (border && "rgb(197, 231, 231)") || "transparent"};
  }
`;

export const ButtonTransparent = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${({ colorBlack }) => (colorBlack && "black") || "#fff"};
`;

export const ButtonPink = styled(ButtonBase)`
  background-color: #f0004c;
  border: 1px solid #f0004c;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }
`;
