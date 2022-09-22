import styled from "styled-components";
import { device } from "../../theme/device";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.button};
`;

export const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  padding: 56px 0;
  margin-top: 220px;

  & > div {
    margin: 20px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media ${device.phone} {
      grid-template-columns: auto;
      grid-row-gap: 24px;
    }
  }
  @media ${device.phone} {
    padding: 56px 25px;
  }
`;
