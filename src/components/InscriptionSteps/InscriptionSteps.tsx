import { useState } from "react";
import ComplexHeading from "../ComplexHeading/ComplexHeading";
import Accordion from "../Accordion/Accordion";
import Tabs from "../Tabs/Tabs";
import { Button } from "../helpers/Button.styled";
import { FlexItem } from "../helpers/Flex.styled"; 
import { CardImage } from "../helpers/CardImage";
import heart from "../../assets/heart.svg";
import arrowRightBlack from "../../assets/arrow-right-black.svg";
import inscriptionStepsJSON from "../../data/inscription-steps.json";

import { Desktop, Mobile } from "../helpers/Display.styled";

export default function HealthAssistance() {
  const [value, setValue] = useState<number>(1);

  return (
    <FlexItem direction="column" align="end" margin="200px 0 0">
      <ComplexHeading
        mobileWidth="42%"
        image={heart}
        mobile
        secondaryTitle="Équipez vos salariés en moins de 5 minutes !"
        mainTitle="Finis la paperasse, la santé de vos salariés dans un espace simple et optimisée"
      />
      <Desktop>
        <FlexItem width="100%">
          <CardImage margin="0 50px 0 0" cardWidth="70%" imageWidth="100%">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/inscription-steps/${
                inscriptionStepsJSON[value - 1].image
              }.svg`}
              alt=""
            />
          </CardImage>
          <Tabs
            items={inscriptionStepsJSON}
            onHandleClick={setValue}
            activeId={value}
          />

        </FlexItem>
      </Desktop>
      <Mobile>
        <Accordion items={inscriptionStepsJSON} />
      </Mobile>
      <Button margin="40px 0 0 0" bgWhite colorBlack border>
        Découvrir les offres <img src={arrowRightBlack} alt="" />
      </Button>
    </FlexItem>
  );
}
