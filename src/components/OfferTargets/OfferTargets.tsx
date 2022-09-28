import { ImageContainer } from './OfferTargets.styled'
import TargetCard from "./TargetCard";
import { H4 } from "../helpers/Utils.styled";
import { ColoredSpan } from "../helpers/ColoredSpan";
import { GridContainer } from "../helpers/GridContainer";
import starDrawing from "../../assets/star-drawing.svg";
import bealyAssurance from "../../assets/bealy-assurance.svg";
import targets from "../../data/offer-targets";

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
          {targets.map((item) => {
            return <TargetCard key={item.id} {...item} />;
          })}
        </GridContainer>
      </>
    </>
  );
}

