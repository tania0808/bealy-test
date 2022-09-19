import { Flex } from "./helpers/Flex.styled";
import { ContainerS } from "./helpers/Container";
import techPower from "../assets/tech-power.svg";
import { Image } from "./Image.styled";
import { Heading } from "./Heading";
import { Button } from "./Button.styled";

const TechPower = () => {
  return (
    <ContainerS>
      <Flex direction="row-reverse">
        <div>
          <Heading padding="0 20px 0 0" align="start">
            <h2>
              Toute la puissance de la tech au service de la santé de vos
              salariés
            </h2>
          </Heading>
          <p>
            Offrez à vos salariés la possibilité de reprendre le contrôle de
            leur santé. Bealy est une plateforme unique de prévention médicale
            et de suivi personnalisé, grâce à une équipe médicale d’experts.{" "}
          </p>
          <p>
            Bealy accompagne vos collaborateurs au quotidien dans leur santé et
            leur bien-être. Anticipez les besoins de vos collaborateurs, prenez
            soin d’eux, ils vous le rendront !
          </p>
          <Flex>
            <Button bg="black" color="#fff">
              Comparer les offres
            </Button>
            <Button margin="10px">Ouvrir un compte</Button>
          </Flex>
        </div>
        <div>
          <Image src={techPower} />
        </div>
      </Flex>
    </ContainerS>
  );
};

export default TechPower;
