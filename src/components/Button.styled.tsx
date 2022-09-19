import styled from "styled-components";

interface Button {
  bg?: string;
  margin?: string;
  color?: string;
  border?: string;
}

export const Button = styled.button<Button>`
  border: 1px solid ${({ theme, border }) => border || theme.colors.button};
  border-radius: 6px;
  padding: 16px 27px;
  font-weight: 600;
  margin: ${({ margin }) => margin || 0};
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color, theme }) => color || theme.colors.button};

  & > img {
    padding-left: 11px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;
