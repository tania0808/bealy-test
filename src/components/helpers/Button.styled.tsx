import styled from "styled-components";

interface Button {
  bg?: string;
  margin?: string;
  padding?:string;
  color?: string;
  border?: string;
  justify?: string;
}

export const Button = styled.button<Button>`
  border: 1px solid ${({ theme, border }) => border || theme.colors.button};
  border-radius: 6px;
  padding: ${({ padding }) => padding || "16px 27px"};
  font-weight: 600;
  margin: ${({ margin }) => margin || 0};
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color, theme }) => color || theme.colors.button};
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "center"};
  & > img {
    padding-left: 11px;
    width: 30px;
    height: 11px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;
