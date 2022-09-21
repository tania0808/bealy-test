import styled from "styled-components";
import { device } from "../../theme/device";

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


/*
export const OfferCardS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.bright_grey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  box-sizing: border-box;

  padding: 0 24px;

  & > span {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light_grey};
    margin: 0 35px;
  }

  & > h4 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.black_700};
  }
`;

const ProCardS = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 191px;

  & > h5 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 16px;
  }

  @media ${device.phone} {
    grid-template-columns: auto;
    grid-row-gap: 24px;
    padding: 0;
    min-width: 193px;
    max-width: 193px;
  }
`;


const OfferCardST = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.bright_grey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 24px;

  & > span {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light_grey};
    margin: 0 35px;
  }

  & > h5 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.black_700};
  }

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 400;
    margin-bottom: 52px;
  }
`;

********** statistic 

const StatisticItemS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  & > p {
    color: ${({ theme }) => theme.colors.black_600};
  }
`;

*/