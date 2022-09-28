import styled from "styled-components";
import { device } from "../../theme/device";
import { Flex } from "../helpers/Flex.styled";

export const SectionCenter = styled.div`
  margin: 4rem auto;
  margin-top: 4rem;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

export const ButtonWrapper = styled(Flex)`
  justify-content: end;
`;

export const Header = styled(Flex)`
  flex-direction: row !important;
`;

interface ArticleI {
  margin?: string | number;
}

export const Article = styled.article<ArticleI>`
  width: 284px;
  padding: 0 25px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: ${({ margin }) => margin || 0};
  min-height: 365px;
  max-height: 365px;
  & > div {
    flex: 1;
    height: 100%;
    & > p {
      line-height: 27px;
    }
  }
  @media ${device.phone} {
    width: 99vw;
  }
`;

export const Logo = styled.div`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    object-fit: contain;
  }
`;
