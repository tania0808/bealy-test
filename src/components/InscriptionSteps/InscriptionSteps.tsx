import { useState } from "react";
import inscriptionStepsJSON from "../../data/inscription-steps.json";
import Tabs from "../Tabs/Tabs";
import { Button } from "../helpers/Button.styled";
import arrowRightBlack from "../../assets/arrow-right-black.svg";
import heart from "../../assets/heart.svg";
import { FlexItem } from "../helpers/Flex.styled"; 
import Accordion from "../Accordion/Accordion";
import { CardImage } from "../helpers/CardImage";
import ComplexHeading from "../ComplexHeading/ComplexHeading";

import { Desktop, Mobile } from "../helpers/Display.styled";

export default function HealthAssistance() {
  const [value, setValue] = useState<number>(0);

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
                inscriptionStepsJSON[value].image
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
