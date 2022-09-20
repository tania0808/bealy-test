import { H3 } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import styled from "styled-components";
export default function ContactCareTeam() {
  return (
    <ContactCareTeamS>
      <H3 align="center">Des questions ? Nos équipes vous répondent</H3>
      <p>
        Que ce soit pour faire le point sur vos besoins ou vous présenter nos
        fonctionnalités.
      </p>
      <Button bg="black" color="#fff">
        Prendre rendez-vous avec l’équipe Careteam
      </Button>
    </ContactCareTeamS>
  );
}

const ContactCareTeamS = styled.div`
  width: 70%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  margin-top: 228px;
  
  & > button {
    margin: 0 100px;
  }
`;
