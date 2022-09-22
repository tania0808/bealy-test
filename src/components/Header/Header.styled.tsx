import styled from "styled-components";
import { device } from "../../theme/device";
import { FlexItem } from "../helpers/Utils.styled";

export const Header = styled.header`
  margin: 0 auto;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px 20px;
  &> div {
    width: fit-content;
  }
  @media ${device.phone} {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const NavItem = styled(FlexItem)`
  gap: 1.5rem;

  @media ${device.phone} {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media ${device.phone} {
    display: block;
  }
`;
