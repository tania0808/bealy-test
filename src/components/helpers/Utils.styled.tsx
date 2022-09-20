import styled from "styled-components";
import { device } from "../../theme/device";

interface IHeading {
  align?: string;
  padding?: string;
}
export const Heading = styled.h1<IHeading>`
  text-align: ${({ align }) => (align ? align : "start")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  font-weight: 700;
`;

export const H2 = styled(Heading)`
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 16px;
  @media ${device.phone} {
    font-size: 36px;
    line-height: 42px;
  }
`;
export const H3 = styled(Heading)`
  font-size: 36px;
  line-height: 42px;
`;
export const H4 = styled(Heading)`
  font-size: 32px;
  line-height: 38px;
`;
export const H5 = styled(Heading)`
  font-size: 24px;
  line-height: 28px;
`;
export const H6 = styled(Heading)`
  font-size: 18px;
  line-height: 22px;
`;

interface IPar {
  align?: string;
  padding?: string;
}
export const P = styled.p<IPar>`
  font-size: 18px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.black_600};
  text-align: ${({ align }) => (align ? align : "start")};
  padding: ${({ padding }) => (padding ? padding : "0")};
`;

interface ILink {
  color?: string;
  font?: string;
}


export const Link = styled.a<ILink>`
  font-size: 16px;
  text-decoration: none;
  color: ${({ color, theme }) => (color === "grey" ? theme.colors.black_400 : "black")};
  font-weight: ${({ font }) => (font === "bold" ? "700" : "400")};
`;

interface IflexItem {
  justify?: string;
}
export const FlexItem = styled.div<IflexItem>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "start")};
`;
