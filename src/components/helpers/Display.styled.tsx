import styled from "styled-components";
import { device } from "../../theme/device";


export const Desktop = styled.div`
  @media ${device.phone} {
    display: none;
  }
`;

export const Mobile = styled.div`
  @media ${device.bigDesk} {
    display: none;
  }
`;
