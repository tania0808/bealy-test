import { useState } from "react";
import { Desktop, Mobile } from "../helpers/Display.styled";
import ComplexHeading from "../ComplexHeading/ComplexHeading";
import { FlexItem } from "../helpers/Flex.styled"; 
import { Button } from "../helpers/Button.styled";
import { CardImage } from "../helpers/CardImage";
import Accordion from "../Accordion/Accordion";
import Tabs from "../Tabs/Tabs";
import arrowRight from "../../assets/arrow-right.svg";
import teleconsultation from "../../assets/teleconsultation.svg";
import healthAssistanceJSON from "../../data/health-assistance.json";

export default function HealthAssistance() {
  const [healthAssistance] = useState(healthAssistanceJSON);
  const [value, setValue] = useState(1);

  return (
    <FlexItem direction="column" align="start">
      <ComplexHeading
        mobileWidth="50%"
        image={teleconsultation}
        mobile
        secondaryTitle="ACCOMPAGNEMENT SANTÉ 360°"
        mainTitle="Une équipe santé aux petits soins pour vos salariés"
      />
      <Desktop>
        <FlexItem width="100%">
          <Tabs
            items={healthAssistance}
            onHandleClick={setValue}
            activeId={value}
          />

          <CardImage margin="0 0 0 50px" cardWidth="70%" imageWidth="100%">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/health-assistance/${
                healthAssistance[value - 1 ].image
              }.svg`}
              alt=""
            />
          </CardImage>
        </FlexItem>
      </Desktop>
      <Mobile>
        <Accordion items={healthAssistanceJSON} />
      </Mobile>
      <Button margin="40px 0 0 0">
        Découvrir les offres <img src={arrowRight} alt="" />
      </Button>
    </FlexItem>
  );
}
