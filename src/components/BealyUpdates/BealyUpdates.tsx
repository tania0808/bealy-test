import { H2, P } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import cardio from "../../assets/bealy-updates/cardio.svg";
import line from "../../assets/bealy-updates/line.svg";
import leftClock from "../../assets/bealy-updates/left-clock.svg";
import rightClock from "../../assets/bealy-updates/right-clock.svg";
import { ContainerS } from "../helpers/Container";
import { Wrapper } from './BealyUpdates.styled';

export default function ContactCareTeam() {
  return (
    <>
      <ContainerS>
        <H2 align="center" padding="0 30px">
          Les nouveautés chez Bealy
        </H2>
      </ContainerS>
      <Wrapper>
        <div>
          <P align="center" color="#fff" padding="64px 0 16px">
            PARTENAIRE POUR VOTRE SANTÉ CONNECTÉE
          </P>
          <H2 align="center" padding="0 30px" white>
            Fitbit X Bealy
          </H2>
          <P align="center" color="#fff" padding="64px 0 64px">
            Pour en savoir plus sur les avantages du partenariat entre Fitbit &
            Bealy, contactez notre équipe commerciale.
          </P>
          <Button bgWhite colorBlack margin="0 auto 45px" padding="16px 80px">
            En savoir plus
          </Button>
        </div>
        <img src={cardio} alt="" />
        <img src={line} alt="" />
        <img src={leftClock} alt="" />
        <img src={rightClock} alt="" />
      </Wrapper>
    </>
  );
}

