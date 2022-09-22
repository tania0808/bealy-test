import { SectionImage } from "../helpers/SectionImage.styled";
import { Button } from "../helpers/Button.styled";
import { Flex } from "../helpers/Flex.styled";
import { H2 } from "../helpers/Utils.styled";
import phoneXCard from "../../assets/phoneXCard.svg";

export default function EmployeeEquipment() {
  return (
    <Flex margin="220px">
      <div>
        <H2>Équipez vos salariés, en moins de 10 minutes !</H2>
        <p>
          Entrez votre RIB, votre numéro et signez votre contrat en ligne !
          L’accès à la santé n’a jamais été aussi simple
        </p>
        <Flex>
          <Button>Ouvrir un compte entreprise</Button>
        </Flex>
      </div>
      <SectionImage marginMobile="4rem 0 0 0">
        <img src={phoneXCard} alt="phoneXCard" />
      </SectionImage>
    </Flex>
  );
}
