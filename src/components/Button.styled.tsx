import styled from "styled-components";

interface Button {
  bg?: string;
}

export const Button = styled.button<Button>`
  border: 1px solid #1b1b1b;
  color: #1b1b1b;
  background-color: #fff;
  border-radius: 6px;
  padding: 16px 24px;
  margin-top: 10px;
  font-weight: 600;

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
