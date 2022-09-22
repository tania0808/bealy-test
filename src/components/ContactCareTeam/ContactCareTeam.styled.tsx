import styled from "styled-components";
import { device } from "../../theme/device";

export const Wrapper = styled.div`
  max-height: 620px;
  max-width: 930px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 228px auto;

  & > div {
    padding: 50px 0;
    position: relative;
    text-align: center;
    width: 70%;
  }

  @media ${device.phone} {
    max-height: 300px;
    width: 100%;
    margin: 228px auto;

    & > div {
      padding: 0;
      width: 100%;
      height: 381px;

      &:nth-child(7) {
        display: none;
      }

      & > button {
        & > p {
          display: none;
        }
      }
    }
  }
`;