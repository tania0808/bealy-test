import styled from "styled-components";
import { device } from "../../theme/device";

interface IFlex {
  padding?: string;
  direction?: string;
  margin?: string;
  gap?: string;
  justify?: string;
  align?: string;
  mobileDirection?: string;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "center"};
  margin-top: ${({ margin }) => (margin ? margin : "1rem")};
  gap: ${({ gap }) => gap};
  height: 100%;
  width: 100%;

  & > div {
    flex: 1;
    padding: ${({ padding }) => padding};
  }

  @media ${device.phone} {
    flex-direction: ${({ mobileDirection }) =>
      mobileDirection ? mobileDirection : "column"};
  }
`;


interface IFlexColumn {
  padding?:string;
}
export const FlexColumn = styled.div<IFlexColumn>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
`;
