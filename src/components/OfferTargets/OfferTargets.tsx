import starDrawing from "../../assets/star-drawing.svg";
import bealyAssurance from "../../assets/bealy-assurance.svg";
import TargetCard from "./TargetCard";
import { ColoredSpan } from "../helpers/ColoredSpan";
import { GridContainer } from "../helpers/GridContainer";
import { H4 } from "../helpers/Utils.styled";
import targetsJSON from "../../data/offer-targets.json";
import { ImageContainer } from './OfferTargets.styled'

export default function OfferTargets() {

  return (
    <>
      <ImageContainer>
        <img src={starDrawing} alt="" />
        <img src={bealyAssurance} alt="" />
      </ImageContainer>
      <>
        <H4 align="center">
          Bealy c’est aussi des offres{" "}
          <ColoredSpan>d’assurance et de prévoyance </ColoredSpan>
          adaptées à vos besoins
        </H4>
        <GridContainer>
          {targetsJSON.map((item) => {
            return <TargetCard key={item.id} {...item} />;
          })}
        </GridContainer>
      </>
    </>
  );
}

