import { H2 } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import styled from "styled-components";
import { P } from "../helpers/Utils.styled";
import Images from "./Images";
import { device } from "../../theme/device";
import contactCareteamJSON from "../../data/contact-careteam.json";
import {useState} from 'react'

export default function ContactCareTeam() {
  const [icons] = useState(contactCareteamJSON);
  return (
    <ContactCareTeamS>
      <div>
        <H2 align="center" padding="0 30px">
          Des questions ? Nos équipes vous répondent
        </H2>
        <P align="center" color="#3580F1" padding="24px 0 40px">
          Que ce soit pour faire le point sur vos besoins ou vous présenter nos
          fonctionnalités.
        </P>
        <Button bg="black" color="#fff" margin="0 auto">
          Prendre rendez-vous<p> &nbsp; avec l’équipe Careteam </p>
        </Button>
        <Images icons={icons} width="80px" />
      </div>
    </ContactCareTeamS>
  );
}

const ContactCareTeamS = styled.div`
  max-height: 620px;
  max-width: 930px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 228px auto;

  & > div {
    padding: 50px 0;
    position: relative;
    text-align: center;
    width: 70%;

    & > h2 {
      padding: 0 !important;
    }

    & > button {
      margin: 0 auto;
      width: 70%;
    }
  }
  @media ${device.phone} {
    max-height: 300px;
    width: 100%;
    margin: 228px auto;

    & > div {
      padding: 0;
      width: 100%;
      height: 381px;

      &:nth-child(7) {
        display: none;
      }

      & > button {
        margin: 0;
        width: 100%;

      & > p {
        display: none;
      }
      }
    }
  }
`;
