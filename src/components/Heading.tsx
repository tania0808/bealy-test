import styled from "styled-components";
interface IHeading {
  color?: string;
  font?: string;
}

export const Heading = styled.h2<IHeading>`
  color: ${({ color }) => (color === "grey" ? "#ACABAC" : "black")};
  font-weight: 700;
  font-size: ${({ font }) => (font && '32px')};
`;
