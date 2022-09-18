import styled from "styled-components";

interface IHeading {
  font?: string;
}

export const Heading = styled.h2<IHeading>`
  font-weight: 700;
  font-size: ${({ font }) => (font ? font : '32px')};
  line-height: 56px;
  padding-right: 30px;
`;
