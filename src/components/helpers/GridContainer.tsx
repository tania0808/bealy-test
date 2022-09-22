import styled from "styled-components";
import { device } from "../../theme/device";

export const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 24px;
  @media ${device.phone} {
    grid-template-columns: auto;
    grid-row-gap: 24px;
  }
`;
