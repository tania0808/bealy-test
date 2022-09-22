import styled from "styled-components";
import { device } from "../../theme/device";

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  margin-top: 220px;
  
  & > img {
    display: block;
    margin: 0 auto;
    
    &:nth-child(1) {
      position: absolute;
      top: -105px;
      right: 430px;

      @media ${device.phone} {
        display: none;
      }
    }
  }
`;

export const CardWrapper = styled.div`
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

& > a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  margin-bottom: 52px;
}
`;
