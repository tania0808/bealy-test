import phoneXCard from "../../assets/phoneXCard.svg";
import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import { H2 } from "../helpers/Utils.styled";
import { SectionImage } from "../helpers/Image.styled";

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
      <SectionImage>
        <img src={phoneXCard} alt="phoneXCard" />
      </SectionImage>
    </Flex>
  );
}
