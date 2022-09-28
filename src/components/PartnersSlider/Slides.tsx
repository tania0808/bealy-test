import { Slide } from "./Slider.styled";
import partnersEnum from "../../data/partners";

interface PartnerLogo {
  id: number;
  image: string;
}

export default function Slides() {
  return (
    <>
      {partnersEnum.map((logo: any) => {
        return (
          // <Slide key={logo.id}>
          //   <img src={logos[logo.image]} alt={logo.image} />
          // </Slide>
          // <p>test</p>
          <Slide key={logo.id}>
            <img src={logo.image} alt={logo.alt} />
          </Slide>
        );
      })}
    </>
  );
}
