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

export const FlexItem = styled.div<IflexItem>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify || "start")};
  margin: ${({ margin }) => margin};
  @media ${device.bigDesk} {
    width: ${({ width }) => (width ? width : "100%")};
  }
`;


// Flex for simple section
interface IflexItem {
  justify?: string;
  align?: string;
  direction?: string;
  width?: string;
  margin?: string;
}
export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-between"};
  margin-top: ${({ margin }) => (margin ? margin : "1rem")};
  gap: ${({ gap }) => gap};
  height: 100%;
  width: 100%;

  & > div {
    flex: 1;
    padding: ${({ padding }) => padding};
  }

  @media ${device.phone} {
    flex-direction: ${({ mobileDirection }) => mobileDirection ? mobileDirection : "column"};
  }
`;

interface IFlexColumn {
  padding?: string;
}

export const FlexColumn = styled.div<IFlexColumn>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
`;
