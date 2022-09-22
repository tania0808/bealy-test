import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import { H4, H5, P } from "../helpers/Utils.styled";
import Images from "../ContactCareTeam/Images";
import personalizedSupportJSON from "../../data/personalized-support.json";
import cardAssurance from "../../assets/card-assurance.svg";
import { Wrapper, MoreInfoContainer, TwoItemsContainer, Icons, GradientContainer } from './PersonalizedSupport.styled'
export function PersonalizedSupport() {
  return (
    <Wrapper>
        <MoreInfoContainer>
          <H5 white padding="0 25px 40px" align="center">
            Accompagnement personnalisé
          </H5>
        </MoreInfoContainer>
        <TwoItemsContainer>
          <Icons>
            <H4 align="center" padding="0 20px">
              Prêts ? Partez !
            </H4>
            <P align="center">
              Découvrez notre solution santé et prévention 360° pour améliorer
              la santé de vos collaborateurs.
            </P>
            <Button margin="0 auto" padding="7px 20px">
              Ouvrir un compte
            </Button>
            <Images icons={personalizedSupportJSON} width="35px" />
          </Icons>
          <GradientContainer>
            <img src={cardAssurance} alt="cardAssurance" />
            <H4 white>Besoin de conseil pour la santé de vos salariés ?</H4>
            <Button bgWhite colorBlack padding="7px 2px" margin="20px 0">
              Prendre rendez-vous
            </Button>
          </GradientContainer>
        </TwoItemsContainer>
    </Wrapper>
  );
}
