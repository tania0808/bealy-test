import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../helpers/Flex.styled";
import ProCard from "./ProCard";
import proJSON from "../../data/pro-advantages.json";

export default function ProSection() {
  const [pro] = useState(proJSON);

  return (
    <ProSectionS>
      <h3>
        Le compte pro idéal pour gérer <br /> votre santé
      </h3>
      <div>
        {pro.map((item) => {
          return <ProCard key={item.id} {...item} />;
        })}
      </div>
    </ProSectionS>
  );
}

const ProSectionS = styled.section`
  background-color: ${({ theme }) => theme.colors.button};
  color: #fff;
  text-align: center;
  padding: 56px;

  & > div {
    margin-top: 2rem;
    margin: 20px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 950px) {
      grid-template-columns: auto;
      grid-row-gap: 24px;
    }
  }
`;
