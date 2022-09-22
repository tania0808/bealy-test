import styled from "styled-components";
import { device } from "../../theme/device";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1008px;
  height: 436px;
  margin: 80px auto;
  position: relative;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;

  & > div {
    max-width: 417px;
  }

  & > img {
    position: absolute;
  }

  & > img:nth-child(2) {
    top: 55px;
    left: 140px;
  }

  & > img:nth-child(3) {
    top: 140px;
    right: 180px;
  }

  & > img:nth-child(4) {
    bottom: 35px;
    left: 10px;
  }

  & > img:nth-child(5) {
    bottom: 0px;
    right: 20px;
  }

  @media ${device.phone} {
    height: 965px;
    max-width: 375px;
    align-items: start;
    padding-top: 95px;
    margin: 36px auto;

    & > div {
      & > button {
        width: 80%;
      }
    }

    & > img:nth-child(2) {
      top: 45px;
      left: 25px;
    }

    & > img:nth-child(3) {
      top: 270px;
      right: 5px;
    }

    & > img:nth-child(4) {
      bottom: 135px;
      left: 0px;
    }
    
    & > img:nth-child(5) {
      bottom: 0px;
      right: 0px;
    }
  }
`;