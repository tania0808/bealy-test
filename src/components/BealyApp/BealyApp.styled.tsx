import styled from "styled-components";

import { device } from "../../theme/device";

import influencer from "../../assets/bealy-app/influencer.svg";


export const Item = styled.div`
  height: 778px;
  border-radius: 32px;
  max-width: 475px;
  box-sizing: border-box;
  @media ${device.phone} {
    max-width: 375px;
  }
`;

export const App = styled(Item)`
  background-color: #ecf0f1;
  display: flex;
  position: relative;

  & > div {
    display: flex;

    & > img {
      width: 100%;
      padding: 20px;
    }
  }

  & > img {
    width: 78px;
    display: block;
    position: absolute;
    top: 140px;
    right: 20px;
  }
`;

export const MoreInfo = styled(Item)`
  background: url(${influencer}) no-repeat;
  position: relative;

  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
