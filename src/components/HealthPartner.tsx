import { Flex } from "./helpers/Flex.styled";
import { Container } from "./helpers/Container.styled";
import healthPartners from "../assets/health-partners.svg";
import { Image } from "./Image.styled";
import { ColoredSpan } from "./ColoredSpan";
import { Heading } from "./Heading";
import { Button } from "./Button.styled";

const HealthPartner = () => {
  return (
    <Container>
      <Flex>
        <div>
          <Heading font="48px">
            Le partenaire santé <ColoredSpan>tout-en-un</ColoredSpan> pour vos
            salariés
          </Heading>
          <p>
            De l’assurance santé à la prévention personnalisée en passant par sa
            clinique virtuelle 360°: chat médical, téléconsultation, santé
            mentale, organisation d’intervention médicale...
          </p>
          <p>
            Bealy propose une solution complète pour les entreprises de toutes
            tailles et les indépendants.
          </p>
          <Flex>
            <Button bg="black" margin="10px" >Comparer les offres</Button>
            <Button margin="10px">Contacter l'équipe</Button>
          </Flex>
        </div>
        <div>
          <Image src={healthPartners} />
        </div>
      </Flex>
    </Container>
  );
};

export default HealthPartner;
