import React, { useState } from "react";
import heart from "../../assets/heart.svg";
import { ContainerS } from "../helpers/Container";
import { Flex } from "../helpers/Flex.styled";
import styled from "styled-components";
import inscriptionStepsJSON from "../../data/inscription-steps.json";
import Tabs from "../HealthAssistance/Tabs";
import { Button } from "../helpers/Button.styled";
import arrowRightBlack from "../../assets/arrow-right-black.svg";
import { ColoredSpan } from "../helpers/ColoredSpan";
import { FlexItem } from "../helpers/Utils.styled";
import { H4 } from "../helpers/Utils.styled";
export default function HealthAssistance() {
  const [inscriptionSteps] = useState(inscriptionStepsJSON);
  const [value, setValue] = useState(0);

  return (
      <Desktop>
        <Flex padding="0 50px 0 0" direction="row-reverse">
          <div>
            <PreHeader>
              <img src={heart} alt="" />
              Équipez vos salariés en moins de {" "}
              <ColoredSpan color="rgb(0, 187, 242)"> {" "} 5 minutes !</ColoredSpan>{" "}
            </PreHeader>
              <H4 padding="24px 0 0">Une équipe santé aux petits soins pour vos salariés</H4>
            <Tabs
              items={inscriptionSteps}
              onHandleClick={setValue}
              activeId={value}
            />
            <Button bg="#fff" color="black" margin="40px 0 0 0">
              Découvrir les offres <img src={arrowRightBlack} alt="" />
            </Button>
          </div>
          <div>
            <Image
              src={`${import.meta.env.VITE_BASE_URL}assets/inscription-steps/${
                inscriptionSteps[value].image
              }.svg`}
              alt=""
            />
          </div>
        </Flex>
      </Desktop>
  );
}

const Desktop = styled.div`
  display: block;
  margin-top: 220px;
  @media (max-width: 950px) {
    display: none;
  }
`;

const PreHeader = styled(FlexItem)`
  color: ${({ theme }) => theme.colors.black_700};
  font-family: "Gilroy";
  & > img {
    margin-right: 1rem;
  }
`;

const Image = styled.img`
margin-right: 1rem;
`