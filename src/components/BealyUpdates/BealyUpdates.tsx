import { Wrapper } from './BealyUpdates.styled';
import { H2, P } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import { ContainerS } from "../helpers/Container";
import * as images from '../../assets/bealy-updates/index';

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
        <img src={images.cardio} alt="" />
        <img src={images.line} alt="" />
        <img src={images.leftClock} alt="" />
        <img src={images.rightClock} alt="" />
      </Wrapper>
    </>
  );
}

