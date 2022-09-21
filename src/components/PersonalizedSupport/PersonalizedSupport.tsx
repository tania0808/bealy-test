import React, { useState } from "react";
import { Flex } from "../helpers/Flex.styled";
import { Button } from "../helpers/Button.styled";
import { H2, H4, H5, P } from "../helpers/Utils.styled";
import styled from "styled-components";
import personalizedSupport from "../../assets/personalized-support.svg";
import Images from "../ContactCareTeam/Images";
import personalizedSupportJSON from "../../data/personalized-support.json";
import cardAssurance from "../../assets/card-assurance.svg";


export function PersonalizedSupport() {
  const [data] = useState(personalizedSupportJSON);
  return (
    <Container>
      <Flex>
        <MoreInfo>
          <H5 color="#fff" padding="0 25px 40px" align="center">
            Accompagnement personnalisé
          </H5>
        </MoreInfo>
        <Doubled>
          <ContWithIma>
            <H4 align="center" padding="0 30px">
              Prêts ? Partez !
            </H4>
            <P align="center">
              Découvrez notre solution santé et prévention 360° pour améliorer
              la santé de vos collaborateurs.
            </P>
            <Button bg="black" color="#fff" margin="0 auto" padding="7px 20px">
              Ouvrir un compte
            </Button>
            <Images icons={data} width="35px" />
          </ContWithIma>
          <Gradient>
            <img src={cardAssurance} alt="cardAssurance" />
            <H4 color="#fff">
              Besoin de conseil pour la santé de vos salariés ?
            </H4>
            <Button border="transparent" padding="7px" margin="29px 0">
              Prendre rendez-vous
            </Button>
          </Gradient>
        </Doubled>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  max-height: 570px;
  margin-bottom: 200px;
  position: relative;
  @media (max-width: 950px) {
    min-height: calc(570px * 2);
  }
`;

const Doubled = styled.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;

  & > div {
    flex: 1;
    @media (max-width: 950px) {
      min-height: 285px;
      max-height: 285px;
    }
  }
`;
const ContWithIma = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  max-width: 470px;
  height: 50%;
  border-radius: 20px;
  padding: 0 60px;
  margin: 0 auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.21);

  & > button {
    width: 70%;
  }
`;

const Item = styled.div`
  height: 778px;
  border-radius: 32px;
  max-width: 475px;
  box-sizing: border-box;
  @media (max-width: 950px) {
    max-width: 375px;
  }
`;
const MoreInfo = styled(Item)`
  background: url(${personalizedSupport}) no-repeat;
  position: relative;
  background-size: cover;
  width: 373px;
  max-width: 473px;
  min-height: 570px;
  max-height: 570px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Gradient = styled.div`
  background: linear-gradient(to right, #f43963, #c7c2ff);
  height: 100%;
  border-radius: 20px;
  padding: 23px 43% 0 24px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.21);
  position: relative;

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 950px) {
      width: 40%;
    }
  }
`;
