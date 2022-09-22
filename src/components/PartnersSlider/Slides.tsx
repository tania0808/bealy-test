import { Slide } from "./Slider.styled";
import partnersJSON from "../../data/partners.json";


export default function Slides() {
  return (
    <>
      {partnersJSON.map((logo: any) => {
        return (
          <Slide key={logo.id}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/partners-logos/${
                logo.image
              }.svg`}
              alt={logo.image}
            />
          </Slide>
        );
      })}
    </>
  );
}
