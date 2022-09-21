import styled from "styled-components";
import { H2, P } from "./helpers/Utils.styled";
import { Button } from "./helpers/Button.styled";
import cardio from "../assets/bealy-updates/cardio.svg";
import line from "../assets/bealy-updates/line.svg";
import leftClock from "../assets/bealy-updates/left-clock.svg";
import rightClock from "../assets/bealy-updates/right-clock.svg";
import { ContainerS } from "./helpers/Container";
import { device } from "../theme/device";

export default function ContactCareTeam() {
  return (
    <>
      <ContainerS>
        <H2 align="center" padding="0 30px">
          Les nouveautés chez Bealy
        </H2>
      </ContainerS>
      <Container>
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
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  height: 436px;
  margin: 80px auto;
  position: relative;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;

  & > div {
    max-width: 417px;
  }

  & > img {
    position: absolute;
  }

  & > img:nth-child(2) {
    top: 55px;
    left: 140px;
  }
  & > img:nth-child(3) {
    top: 140px;
    right: 180px;
  }
  & > img:nth-child(4) {
    bottom: 35px;
    left: 10px;
  }
  & > img:nth-child(5) {
    bottom: 0px;
    right: 20px;
  }

  @media ${device.phone} {
    height: 965px;
    max-width: 375px;
    align-items: start;
    padding-top: 95px;
    margin: 36px auto;

    & > div {
      & > button {
        width: 80%;
      }
    }
    & > img:nth-child(2) {
      top: 45px;
      left: 25px;
    }
    & > img:nth-child(3) {
      top: 270px;
      right: 5px;
    }
    & > img:nth-child(4) {
      bottom: 135px;
      left: 0px;
    }
    & > img:nth-child(5) {
      bottom: 0px;
      right: 0px;
    }
  }
`;
