import React, { useState } from "react";
import teleconsultation from "../../assets/teleconsultation.svg";
import { Flex } from "../helpers/Flex.styled";
import styled from "styled-components";
import inscriptionStepsJSON from "../../data/inscription-steps.json";
import AccordionItem from "../HealthAssistance/AccordionItem";
import { FlexItem } from "../helpers/Utils.styled";

interface AccordionItem {
  id: number;
  title: string;
  image: string;
  description: string;
}
export default function HealthAssistance() {
  const [inscriptionSteps] = useState(inscriptionStepsJSON);

  return (
      <Mobile>
        <PreHeader>
          <img src={teleconsultation} alt="" />
          Une équipe santé aux petits soins pour vos salariés
        </PreHeader>
        <Flex padding="0 0 0 50px">
          <div>
              <h4>Une équipe santé aux petits soins pour vos salariés</h4>
            {inscriptionSteps.map((item: AccordionItem, index: number) => {
              return <AccordionItem key={index} {...item} folder="inscription-steps"/>;
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
