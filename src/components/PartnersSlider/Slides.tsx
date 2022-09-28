import { Slide } from "./Slider.styled";
import partnersJSON from "../../data/partners.json";
import { logos } from "../../assets/partners-logos/index";

interface PartnerLogo {
  id: number;
  image: string;
}

export default function Slides() {
  return (
    <>
      {partnersJSON.map((logo: PartnerLogo) => {
        return (
          <Slide key={logo.id}>
            <img src={logos[logo.image]} alt={logo.image} />
          </Slide>
        );
      })}
    </>
  );
}
