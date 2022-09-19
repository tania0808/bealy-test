import styled from "styled-components";

interface IHeading {
  align?: string;
  padding?: string;
}

export const Heading = styled.div<IHeading>`
  text-align: ${({ align }) => (align ? align : "start")};
  line-height: 56px;
  padding: ${({ padding }) => (padding ? padding : "0")};
  font-weight: 700;
  &>p {
    color: ${({theme}) => theme.colors.black_600};
  }
   &>* {
    font-weight: 700;
   }
  & > h2 {
    font-size: 46px;
  }
  & > h3 {
    font-size: 36px;
  }
  & > h4 {
    font-size: 32px;
  }
  & > h5 {
    font-size: 24px;
  }
  @media (max-width: 950px) {
    padding: 0;
    text-align: ${({ align }) => (align ? align : "start")};
  }
`;
