import starDrawing from "../../assets/star-drawing.svg";
import bealyAssurance from "../../assets/bealy-assurance.svg";
import { useState } from "react";
import styled from "styled-components";
import TargetCard from "./TargetCard";
import targetsJSON from "../../data/offer-targets.json";
import { ContainerS } from "../helpers/Container";
import { Heading } from "../Heading";
import { ColoredSpan } from "../ColoredSpan";
export default function OfferTargets() {
  const [targets] = useState(targetsJSON);

  return (
    <ContainerS margin="100px auto">
      <ImageContainer>
        <img src={starDrawing} alt="" />
        <img src={bealyAssurance} alt="" />
      </ImageContainer>
      <>
        <Heading align="center">
          <h3>
            Bealy c’est aussi des offres{" "}
            <ColoredSpan>
              d’assurance et de prévoyance 
            </ColoredSpan>{" "}
             adaptées à vos besoins
          </h3>
        </Heading>
        <OffersS>
          {targets.map((item) => {
            return <TargetCard key={item.id} {...item} />;
          })}
        </OffersS>
      </>
    </ContainerS>
  );
}

const ImageContainer = styled.div`
  position: relative;
  display: block;
  margin-bottom: 24px;
  & > img {
    display: block;
    margin: 0 auto;
    &:nth-child(1) {
      position: absolute;
      top: -105px;
      right: 430px;
      @media (max-width: 950px) {
        display: none;
      }
    }
  }
`;
const OffersS = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 24px;
  margin-top: 80px;
  @media (max-width: 950px) {
    grid-template-columns: auto;
    grid-row-gap: 24px;
  }
`;
