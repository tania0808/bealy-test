import styled from "styled-components";
import { device } from "../../theme/device";

interface ImageWrapper {
  margin?: string;
  marginMobile?:string;
}
export const SectionImage = styled.div<ImageWrapper>`
  height: 564px;
  width: 90%;
  margin: ${({ margin }) => margin || "0 auto"};
  display: flex;
  justify-content: center;
  & > img {
    width: 100%;
    object-fit: contain;
  }
  @media ${device.phone} {
    margin: ${({ marginMobile }) => marginMobile ? marginMobile : 0};
  }
`;
