import React, { useState } from "react";
import styled from "styled-components";
import { SlideTrack } from "./SlideTrack.styled";
import Slide from "./Slide";
import { Heading } from "../Heading";
import { Container } from "../helpers/Container.styled";
import partnersJSON from "../../data/partners.json";

export default function Slider() {
  const [partners] = useState(partnersJSON);
  console.log(import.meta.env.VITE_BASE_URL);

  return (
    <SliderS>
      <Container>
        <Heading align="center">
          <h4>Nos Partenaires</h4>
        </Heading>
      </Container>
      <SlideTrack>
        {partners.map((logo) => {
          return (
            <Slide key={logo.id}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}assets/partners-logos/${
                  logo.image
                }.svg`}
                alt=""
              />
            </Slide>
          );
        })}
        {partners.map((logo) => {
          return (
            <Slide key={logo.id}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}assets/partners-logos/${
                  logo.image
                }.svg`}
                alt=""
              />
            </Slide>
          );
        })}
      </SlideTrack>
    </SliderS>
  );
}

export const SliderS = styled.div`
  margin: auto;
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  overflow: hidden;
  margin-top: 120px;
`;
