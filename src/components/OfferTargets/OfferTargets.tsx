import starDrawing from "../../assets/star-drawing.svg";
import bealyAssurance from "../../assets/bealy-assurance.svg";
import { useState } from "react";
import styled from "styled-components";
import TargetCard from "./TargetCard";
import targetsJSON from "../../data/offer-targets.json";
import { ColoredSpan } from "../helpers/ColoredSpan";
import { GridContainer } from "../helpers/GridContainer";
import { H4 } from "../helpers/Utils.styled";
export default function OfferTargets() {
  const [targets] = useState(targetsJSON);

  return (
    <>
      <ImageContainer>
        <img src={starDrawing} alt="" />
        <img src={bealyAssurance} alt="" />
      </ImageContainer>
      <>
          <H4 align="center">
            Bealy c’est aussi des offres{" "}
            <ColoredSpan>
              d’assurance et de prévoyance {" "}
            </ColoredSpan>
             adaptées à vos besoins
          </H4>
        <GridContainer>
          {targets.map((item) => {
            return <TargetCard key={item.id} {...item} />;
          })}
        </GridContainer>
      </>
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  display: block;
  margin-bottom: 24px;
  margin-top: 120px;
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