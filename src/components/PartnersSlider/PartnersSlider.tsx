import React, { useState } from "react";
import styled from "styled-components";
import { H4 } from "../helpers/Utils.styled";
import Slides from "./Slides";
import { SlideTrack, Slider } from "./Slider.styled";

export default function PartnersSlider() {
  return (
    <Slider>
      <H4>Nos Partenaires</H4>
      <SlideTrack>
        <Slides />
        <Slides />
      </SlideTrack>
    </Slider>
  );
}