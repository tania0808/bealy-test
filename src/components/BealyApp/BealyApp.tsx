import { App, MoreInfo } from "./BealyApp.styled";
import { Flex } from "../helpers/Flex.styled";
import { H3, H2 } from "../helpers/Utils.styled";
import { ButtonTransparent } from "../helpers/Button.styled";
import * as app from "../../assets/bealy-app/index";

export default function BealyApp() {
  return (
    <>
      <Flex gap="61px">
        <App>
          <img src={app.attention} alt="" />
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
              <img src={app.playstoreBlack} alt="" />
              <img src={app.playstoreWhite} alt="" />
            </Flex>
            <img src={app.phones} alt="phones" />
          </Flex>
        </App>
        <MoreInfo>
          <ButtonTransparent justify="end" margin="10px 0">
            {" "}
            En savoir plus <img src={app.arrowRightWhite} alt="" />
          </ButtonTransparent>
          <H2 white padding="516px 60px 24px 40px">
            Bealy l'assurance santé qui fait simple
          </H2>
        </MoreInfo>
      </Flex>
    </>
  );
}
