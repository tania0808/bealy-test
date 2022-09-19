import styled from "styled-components";

interface IContainer {
  margin?: string;
}

export const ContainerS = styled.div<IContainer>`
  position: relative;
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};

  @media (max-width: 950px) {
    width: 100%;
    max-width: 435px;
  }
`;
