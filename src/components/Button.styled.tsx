import styled from "styled-components";

interface Button {
  bg?: string;
  margin: string;
}

export const Button = styled.button<Button>`
  border: 1px solid ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.button};
  border-radius: 6px;
  padding: 16px 24px;
  font-weight: 600;
  margin-top: ${({ margin }) => margin || 0};

  @media (max-width: 950px) {
    width: 100%;
  }
  ${(props) =>
    props.bg === "black" &&
    `
  background-color: #1B1B1B;
  color: #fff
  `}
`;
