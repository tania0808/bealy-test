import healthManagement from "../assets/simplify-management/health-management.svg";
import umbrella from "../assets/simplify-management/umbrella-assurance.svg";
import { Flex } from "./helpers/Flex.styled";
import { Button } from "./helpers/Button.styled";
import styled from "styled-components";
import { H2 } from "./helpers/Utils.styled";
import { device } from "../theme/device";

export default function SimplifyManagement() {
  return (
    <Container>
      <img src={umbrella} alt="" />
      <Flex padding="0 10px" margin="220px" gap="80px">
        <div>
          <H2>Simplifiez la gestion de la santé de vos collaborateurs</H2>
          <p>
            Bealy, votre partenaire santé tout-en-un, accompagne au quotidien
            ses utilisateurs dans leur santé et leur bien-être.Le futur de la
            santé est dans votre poche !
          </p>
          <Flex>
            <Button>Prenez rendez-vous avec un conseiller</Button>
          </Flex>
        </div>
        <Image>
          <img src={healthManagement} alt="people" />
        </Image>
      </Flex>
    </Container>
  );
}
const Image = styled.div`
  max-width: 100%;
  margin: 40px 0 64px;

  & > img {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
`;
const Container = styled.div`
  background-color: #f9eff1;
  margin-top: 220px;
  position: relative;

  & > img {
    position: absolute;
    top: 110px;
    right: 44%;
  }

  & > div {
    width: 90%;
    max-width: 1100px;
    min-width: 1014px;
    margin: 0 auto;
  }

  @media ${device.phone} {
    padding-top: 100px;
    & > img {
      position: absolute;
      width: 50px;
      top: 20px;
      right: 4%;
    }
    & > div {
      width: 90%;
      max-width: 375px;
      min-width: 375px;
      margin: 0 auto;
    }
  }
`;
