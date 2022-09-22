import styled from "styled-components";
import { device } from "../../theme/device";

export const Wrapper = styled.div`
  background-color: #f9eff1;
  margin-top: 220px;
  position: relative;
  height: 575px;

  & > img {
    position: absolute;
    top: 110px;
    right: 46%;
    width: 50px;
  }

  & > div {
    width: 90%;
    max-width: 1100px;
    min-width: 1014px;
    margin: 0 auto;
  }

  @media ${device.phone} {
    padding-top: 100px;
    height: fit-content;
    & > img {
      position: absolute;
      width: 50px;
      top: 20px;
      right: 4%;
    }
    & > div {
      width: 90%;
      max-width: 375px;
      min-width: 375px;
      margin: 0 auto;
    }
  }
`;