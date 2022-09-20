import phoneXCard from "../assets/phoneXCard.svg";
import { Flex } from "./helpers/Flex.styled";
import { Button } from "./helpers/Button.styled";
import styled from "styled-components";
import { H2 } from "./helpers/Utils.styled";
export default function EmployeeEquipment() {
  return (
      <Flex>
        <div>
            <H2>Équipez vos salariés, en moins de 10 minutes !</H2>
          <p>
            Entrez votre RIB, votre numéro et signez votre contrat en ligne !
            L’accès à la santé n’a jamais été aussi simple
          </p>
          <Flex>
            <Button bg="black" color="#fff">
              Ouvrir un compte entreprise
            </Button>
          </Flex>
        </div>
        <Image>
          <img src={phoneXCard} alt="phoneXCard" />
        </Image>
      </Flex>
  );
}
const Image = styled.div`
  max-width: 100%;
  margin: 40px 0 64px;

  & > img {
    width: 100%;

    margin: 0 auto;
  }
`;
