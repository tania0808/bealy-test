import { Flex } from "./helpers/Flex.styled";
import { SectionImage } from "./helpers/Image.styled";
import { ColoredSpan } from "./helpers/ColoredSpan";
import { Button } from "./helpers/Button.styled";
import { H2 } from "./helpers/Utils.styled";

import healthPartners from "../assets/health-partners.svg";

const HealthPartner = () => {
  return (
    <Flex>
      <div>
        <H2 padding="0 70px 0 0">
          Le partenaire santé <ColoredSpan>tout-en-un</ColoredSpan> pour vos
          salariés
        </H2>
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
          <Button margin="10px">Comparer les offres</Button>
          <Button colorBlack bgWhite margin="10px" border>
            Contacter l'équipe
          </Button>
        </Flex>
      </div>
      <div>
        <SectionImage>
          <img src={healthPartners} alt="" />
        </SectionImage>
      </div>
    </Flex>
  );
};

export default HealthPartner;
