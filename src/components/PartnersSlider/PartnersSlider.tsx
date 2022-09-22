import { SlideTrack, Slider } from "./Slider.styled";
import Slides from "./Slides";
import { H4 } from "../helpers/Utils.styled";

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