import OfferCard from "./OfferCard";
import { H3, P } from "../helpers/Utils.styled";
import { GridContainer } from "../helpers/GridContainer";

import offersJSON from "../../data/offers.json";

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
        {offersJSON.map((item) => {
          return <OfferCard key={item.id} {...item} />;
        })}
      </GridContainer>
    </>
  );
}
