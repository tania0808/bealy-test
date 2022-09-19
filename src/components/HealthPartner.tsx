import { Flex } from "./helpers/Flex.styled";
import { ContainerS } from "./helpers/Container";
import healthPartners from "../assets/health-partners.svg";
import { Image } from "./Image.styled";
import { ColoredSpan } from "./ColoredSpan";
import { Heading } from "./Heading";
import { Button } from "./Button.styled";

const HealthPartner = () => {
  return (
    <ContainerS>
      <Flex>
        <div>
          <Heading>
            <h2>Le partenaire santé <ColoredSpan>tout-en-un</ColoredSpan> pour vos
            salariés</h2>
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
            <Button bg="black" margin="10px" color="#fff">Comparer les offres</Button>
            <Button margin="10px">Contacter l'équipe</Button>
          </Flex>
        </div>
        <div>
          <Image src={healthPartners} />
        </div>
      </Flex>
    </ContainerS>
  );
};

export default HealthPartner;
