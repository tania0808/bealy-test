import { useState } from "react";
import styled from "styled-components";
import { Heading } from "../Heading";
import OfferCard from "./OfferCard";
import { ContainerS } from "../helpers/Container";
import offersJSON from "../../data/offers.json";

export default function Offers() {
  const [offers] = useState(offersJSON);

  return (
      <ContainerS margin="100px auto">
        <>
          <Heading align="center">
            <h3>
              Nos offres de santé pour prendre soin <br /> de vos équipes
            </h3>
            <p>Choisissez votre abonnement</p>
          </Heading>
          <OffersS>
            {offers.map((item) => {
              return <OfferCard key={item.id} {...item} />;
            })}
          </OffersS>
        </>
      </ContainerS>
  );
}

const OffersS = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 24px;
  @media (max-width: 950px) {
    grid-template-columns: auto;
    grid-row-gap: 24px;
  }
`;
