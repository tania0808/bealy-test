import styled from "styled-components";
import { FlexItem } from "../helpers/Utils.styled";

export const Header = styled.header`
  margin: 0 auto;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.header};
  padding: 20px 20px;

  @media (max-width: 950px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const Logo = styled(FlexItem);

export const NavItem = styled(FlexItem)`
  gap: 1.5rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: block;
  }
`;
