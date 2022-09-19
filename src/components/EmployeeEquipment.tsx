import phoneXCard from "../assets/phoneXCard.svg";
import { Flex } from "./helpers/Flex.styled";
import { ContainerS } from "./helpers/Container";
import { Heading } from "./Heading";
import { Button } from "./Button.styled";
import styled from "styled-components";

export default function EmployeeEquipment() {
  return (
    <ContainerS>
      <Flex>
        <div>
          <Heading padding="0 40px 0 0">
            <h2>Équipez vos salariés, en moins de 10 minutes !</h2>
          </Heading>
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
    </ContainerS>
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
