import OfferCard from "./OfferCard";
import { GridContainer } from "../helpers/GridContainer";
import { H3, P } from "../helpers/Utils.styled";
import offers from "../../data/offers";

export default function Offers() {
  return (
    <>
      <H3 align="center" padding="225px 0 32px">
        Nos offres de santé pour prendre soin <br /> de vos équipes
      </H3>
      <P align="center" padding="0 0 42px">
        Choisissez votre abonnement
      </P>
      <GridContainer>
        {offers.map((item) => {
          return <OfferCard key={item.id} {...item} />;
        })}
      </GridContainer>
    </>
  );
}
