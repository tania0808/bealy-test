import styled from "styled-components";
import { FlexItem } from "./Utils.styled";
import { device } from "../../theme/device";

interface IconBoxI {
  topD: string;
  leftD: string;
  topM: string;
  leftM: string;
  width: string;
}

export const IconBox = styled(FlexItem)<IconBoxI>`
  position: absolute;
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  height: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ topD }) => topD};
  left: ${({ leftD }) => leftD};
  border: 1px solid #ececec;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);

  & > img {
    max-width: 100%;
  }

  @media ${device.phone} {
    max-width: 35px;
    height: 35px;
    padding: 5px;
    top: ${({ topM }) => topM};
    left: ${({ leftM }) => leftM};
  }
`;
