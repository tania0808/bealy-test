import styled from "styled-components";

interface CardImageProps {
  height?: string;
  imageWidth?: string;
  cardWidth?: string;
  margin?: string;
}

export const CardImage = styled.div<CardImageProps>`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ cardWidth }) => cardWidth};
  margin: ${({ margin }) => margin};
  & > img {
    width: ${({ imageWidth }) => imageWidth};
    margin: 0 auto;
  }
`;