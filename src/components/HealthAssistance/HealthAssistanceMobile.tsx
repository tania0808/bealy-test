import React, { useState } from "react";
import teleconsultation from "../../assets/teleconsultation.svg";
import { ContainerS } from "../helpers/Container";
import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import styled from "styled-components";
import { ColoredSpan } from "../helpers/ColoredSpan";
import healthAssistanceJSON from "../../data/health-assistance.json";
import Tabs from "./Tabs";
import AccordionItem from "./AccordionItem";
import { FlexItem } from "../helpers/Utils.styled";

interface AccordionItem {
  id: number;
  title: string;
  image: string;
  description: string;
}
export default function HealthAssistance() {
  const [healthAssistance] = useState(healthAssistanceJSON);

  return (
    <Mobile>
      <PreHeader>
        <img src={teleconsultation} alt="" />
        ACCOMPAGNEMENT SANTÉ 360°{" "}
      </PreHeader>
      <Flex padding="0 0 0 50px">
        <div>
          <h4>Une équipe santé aux petits soins pour vos salariés</h4>
          {healthAssistance.map((item: AccordionItem, index: number) => {
            return (
              <AccordionItem key={index} {...item} folder="health-assistance" />
            );
          })}
        </div>
      </Flex>
    </Mobile>
  );
}
const Mobile = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;

const PreHeader = styled(FlexItem)`
  color: ${({ theme }) => theme.colors.black_700};
  font-family: "Gilroy";
  & > img {
    margin-right: 1rem;
  }
`;
