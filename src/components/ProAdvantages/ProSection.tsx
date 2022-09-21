import { useState } from "react";
import styled from "styled-components";
import ProCard from "./ProCard";
import { H4 } from "../helpers/Utils.styled";
import proJSON from "../../data/pro-advantages.json";
import { device } from "../../theme/device";

export default function ProSection() {
  const [pro] = useState(proJSON);

  return (
    <ProSectionS>
      <H4 white align="center" padding="0 0 54px">
        Le compte pro idéal pour gérer <br /> votre santé
      </H4>
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
  margin-top: 220px;

  & > div {
    max-width: 1440px;
    margin-top: 2rem;
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
