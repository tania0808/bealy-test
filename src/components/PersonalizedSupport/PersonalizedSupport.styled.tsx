import styled from "styled-components";
import personalizedSupport from "../../assets/personalized-support.svg";
import { Flex } from "../helpers/Flex.styled";

import { device } from "../../theme/device";

export const Wrapper = styled(Flex)`
  max-height: 570px;
  margin: 200px 0;
  position: relative;
  gap: 10px;
  @media ${device.phone} {
    min-height: calc(570px * 2);
  }
`;

export const TwoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  width: 100%;
  position: relative;
  justify-content: space-around;
  gap: 10px;
  @media ${device.phone} {
    gap: 30px;
    margin-top: 30px;
  }
  & > div {
    flex: 1;
    @media ${device.phone} {
      min-height: 285px;
      max-height: 285px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  max-width: 470px;
  height: 50%;
  border-radius: 20px;
  padding: 0 60px;
  margin: 0 auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.21);

  & > button {
    width: 70%;
  }
`;

export const MoreInfoContainer = styled.div`
  background: url(${personalizedSupport}) no-repeat;
  background-size: cover;
  min-height: 570px;
  max-height: 570px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 32px;
  box-sizing: border-box;
  @media ${device.phone} {
    max-width: 375px;
  }
`;

export const GradientContainer = styled.div`
  background: linear-gradient(to right, #f43963, #c7c2ff);
  border-radius: 20px;
  padding: 23px 33% 0 24px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.21);
  position: relative;

  & > button {
    width: 80%;
  }

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    @media ${device.phone} {
      width: 40%;
    }
  }
`;
