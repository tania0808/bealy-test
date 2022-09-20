import { Flex } from "./helpers/Flex.styled";
import { H3, H2, P, H6 } from "./helpers/Utils.styled";
import styled from "styled-components";
import { Button } from "./helpers/Button.styled";
import arrowRightWhite from "./../assets/arrow-right.svg";

import phones from "../assets/bealy-app/phones.svg";
import attentionIcon from "../assets/bealy-app/attention-icon.svg";
import influencer from "../assets/bealy-app/influencer.svg";
import playstoreBlack from "../assets/bealy-app/playstore-black.svg";
import playstoreWhite from "../assets/bealy-app/playstore-white.svg";

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
            <Flex gap="30px" align="center" mobileDirection="row">
              <img src={playstoreBlack} alt="" />
              <img src={playstoreWhite} alt="" />
            </Flex>
            <img src={phones} alt="phones" />
          </Flex>
        </App>
        <MoreInfo>
          <Button
            bg="transparent"
            border="transparent"
            color="#fff"
            justify="end"
          >
            <P color="#fff"> En savoir plus</P>{" "}
            <img src={arrowRightWhite} alt="" />
          </Button>
          <H2 color="#fff" padding="516px 60px 24px 40px">
            Bealy l'assurance santé qui fait simple
          </H2>
        </MoreInfo>
      </Flex>
    </>
  );
}
const Item = styled.div`
  height: 778px;
  border-radius: 32px;
  max-width: 475px;
  box-sizing: border-box;
  @media (max-width: 950px) {
    max-width: 375px;
  }
`;

const App = styled(Item)`
  background-color: #ecf0f1;
  display: flex;
  position: relative;

  & > div {
    display: flex;

    & > img {
      width: 100%;
      padding: 20px;
    }
  }

  & > img {
    width: 78px;
    display: block;
    position: absolute;
    top: 140px;
    right: 20px;
  }
`;

const MoreInfo = styled(Item)`
  background: url(${influencer}) no-repeat;
  position: relative;

  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
