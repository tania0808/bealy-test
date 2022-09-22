import styled from "styled-components";

interface ImageWrapper {
  margin?: string;
}
export const SectionImage = styled.div<ImageWrapper>`
  height: 564px;
  width: 90%;
  margin: ${({ margin }) => margin || "0 auto"};
  display: flex;
  justify-content: center;
  & > img {
    width: 90%;
  }
`;
