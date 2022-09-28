import { useState } from "react";
import testimonialsJSON from "../../data/testimonials.json";
import { H2 } from "../helpers/Utils.styled";
import styled from "styled-components";
import { ButtonTransparent } from "../helpers/Button.styled";
import Item from "./Item";
import { Desktop, Mobile } from "../helpers/Display.styled";
import buttonRight from "../../assets/button-right.svg";
import buttonLeft from "../../assets/button-left.svg";
import { testimonialsImages } from "../../assets/testimonials";

export default function Testimonials() {
  const [card, setCard] = useState<number>(0);

  const nextCard = () => {
    if (card >= testimonialsJSON.length - 1) {
      return setCard(0);
    } else {
      setCard(card + 1);
    }
  };

  const prevCard = () => {
    if (card <= 0) {
      setCard(5);
    } else {
      return setCard(card - 1);
    }
  };

  return (
    <>
      <H2 align="center">Ils parlent de nous</H2>
      <Mobile>
        <SectionCenter>
          <Item
            {...testimonialsJSON[card]}
            icon={testimonialsImages[testimonialsJSON[card].logo]}
          />
        </SectionCenter>
        <SectionCenter>
          <ButtonTransparent onClick={prevCard}>
            <img src={buttonLeft} alt="" />
          </ButtonTransparent>
          <ButtonTransparent onClick={nextCard}>
            <img src={buttonRight} alt="" />
          </ButtonTransparent>
        </SectionCenter>
      </Mobile>
      <Desktop>
        <SectionCenter>
          {testimonialsJSON.slice(0, 3).map((item) => {
            return (
              <Item
                {...item}
                icon={testimonialsImages[item.logo]}
                key={item.id}
                margin={item.id % 2 !== 0 ? "20px" : 0}
              />
            );
          })}
        </SectionCenter>
      </Desktop>
    </>
  );
}

const SectionCenter = styled.div`
  margin: 4rem auto;
  margin-top: 4rem;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: space-around;
`;
