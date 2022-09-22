import { SectionImage } from "../helpers/SectionImage.styled";
import { Flex } from "../helpers/Flex.styled";
import { H2 } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import techPower from "../../assets/tech-power.png";

const TechPower = () => {
  return (
    <Flex direction="row-reverse" margin="200px">
      <div>
        <H2>
          Toute la puissance de la tech au service de la santé de vos salariés
        </H2>
        <p>
          Offrez à vos salariés la possibilité de reprendre le contrôle de leur
          santé. Bealy est une plateforme unique de prévention médicale et de
          suivi personnalisé, grâce à une équipe médicale d’experts.{" "}
        </p>
        <p>
          Bealy accompagne vos collaborateurs au quotidien dans leur santé et
          leur bien-être. Anticipez les besoins de vos collaborateurs, prenez
          soin d’eux, ils vous le rendront !
        </p>
        <Flex>
          <Button>Comparer les offres</Button>
          <Button bgWhite colorBlack border margin="10px">
            Ouvrir un compte
          </Button>
        </Flex>
      </div>
      <div>
        <SectionImage>
          <img src={techPower} alt="" />
        </SectionImage>
      </div>
    </Flex>
  );
};

export default TechPower;
