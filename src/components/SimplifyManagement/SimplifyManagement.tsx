import { Wrapper } from './SimplifyManagement.styled';
import { SectionImage } from "../helpers/SectionImage.styled";
import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import { H2 } from "../helpers/Utils.styled";
import healthManagement from "../../assets/simplify-management/health-management.svg";
import umbrella from "../../assets/simplify-management/umbrella-assurance.svg";

export default function SimplifyManagement() {
  return (
    <Wrapper>
      <img src={umbrella} alt="" />
      <Flex padding="0 10px" margin="220px" gap="80px">
        <div>
          <H2>Simplifiez la gestion de la santé de vos collaborateurs</H2>
          <p>
            Bealy, votre partenaire santé tout-en-un, accompagne au quotidien
            ses utilisateurs dans leur santé et leur bien-être.Le futur de la
            santé est dans votre poche !
          </p>
          <Button margin="40px 0">Prenez rendez-vous avec un conseiller</Button>
        </div>
        <SectionImage marginMobile="0 0 4rem 0">
          <img src={healthManagement} alt="people" />
        </SectionImage>
      </Flex>
    </Wrapper>
  );
}

