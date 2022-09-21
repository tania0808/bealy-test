import React, { useState } from "react";
import teleconsultation from "../../assets/teleconsultation.svg";
import { ContainerS } from "../helpers/Container";
import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import styled from "styled-components";
import healthAssistanceJSON from "../../data/health-assistance.json";
import Tabs from "./Tabs";
import { FlexItem } from "../helpers/Utils.styled";
import { H4 } from "../helpers/Utils.styled";
import arrowRight from "../../assets/arrow-right.svg";
import { device } from "../../theme/device";

export default function HealthAssistance() {
  const [healthAssistance] = useState(healthAssistanceJSON);
  const [value, setValue] = useState(0);

  return (
    <Desktop>
      <PreHeader>
        <img src={teleconsultation} alt="" />
        ACCOMPAGNEMENT SANTÉ 360°{" "}
      </PreHeader>
      <Flex padding="0 0 0 50px">
        <div>
          <H4>Une équipe santé aux petits soins pour vos salariés</H4>
          <Tabs
            items={healthAssistance}
            onHandleClick={setValue}
            activeId={value}
          />

          <Button margin="40px 0 0 0">
            Découvrir les offres <img src={arrowRight} alt="" />
          </Button>
        </div>
        <div>
          <Image
            src={`${import.meta.env.VITE_BASE_URL}assets/health-assistance/${
              healthAssistance[value].image
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
  @media ${device.phone} {
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
  margin-left: 1rem;
`;
