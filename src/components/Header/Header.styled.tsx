import styled from "styled-components";

interface ILink {
  color?: string;
  font?: string;
}

export const Header = styled.header`
  margin: 0 auto;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fcfcfc;
  padding: 20px 20px;

  @media (max-width: 950px) {
    max-width: 435px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 40px;
  }

  & > h2 {
    font-size: 24px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Link = styled.a<ILink>`
  font-size: 16px;
  text-decoration: none;
  color: ${({ color }) => (color === "grey" ? "#ACABAC" : "black")};
  font-weight: ${({ font }) => (font === "bold" ? "700" : "400")};
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: block;
  }
`;
