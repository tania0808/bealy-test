import { App, MoreInfo } from "./BealyApp.styled";
import { Flex } from "../helpers/Flex.styled";
import { H3, H2 } from "../helpers/Utils.styled";
import { ButtonTransparent } from "../helpers/Button.styled";
import attentionIcon from "../../assets/bealy-app/attention-icon.svg";
import playstoreBlack from "../../assets/bealy-app/playstore-black.svg";
import playstoreWhite from "../../assets/bealy-app/playstore-white.svg";
import arrowRightWhite from "../../assets/arrow-right.svg";
import phones from "../../assets/bealy-app/phones.svg";

export default function BealyApp() {
  return (
    <>
      <Flex gap="61px">
        <App>
          <img src={attentionIcon} alt="" />
          <Flex direction="column" align="space-around">
            <H3 padding="16px 20px 24px 40px">
              Votre app santé maintenant <br /> dans votre <br /> poche
            </H3>
            <Flex
              gap="30px"
              align="center"
              mobileDirection="row"
              justify="space-around"
            >
              <img src={playstoreBlack} alt="" />
              <img src={playstoreWhite} alt="" />
            </Flex>
            <img src={phones} alt="phones" />
          </Flex>
        </App>
        <MoreInfo>
          <ButtonTransparent justify="end" margin="10px 0">
            {" "}
            En savoir plus <img src={arrowRightWhite} alt="" />
          </ButtonTransparent>
          <H2 white padding="516px 60px 24px 40px">
            Bealy l'assurance santé qui fait simple
          </H2>
        </MoreInfo>
      </Flex>
    </>
  );
}
