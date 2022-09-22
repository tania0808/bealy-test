import { H2, P } from "../helpers/Utils.styled";
import { Button } from "../helpers/Button.styled";
import Images from "./Images";
import contactCareteamJSON from "../../data/contact-careteam.json";
import { Wrapper } from './ContactCareTeam.styled';

export default function ContactCareTeam() {
  return (
    <Wrapper>
      <div>
        <H2 align="center" padding="0 30px">
          Des questions ? Nos équipes vous répondent
        </H2>
        <P align="center" color="#3580F1" padding="24px 0 40px">
          Que ce soit pour faire le point sur vos besoins ou vous présenter nos
          fonctionnalités.
        </P>
        <Button margin="0 auto" width="70%">
          Prendre rendez-vous<p> &nbsp; avec l’équipe Careteam </p>
        </Button>
        <Images icons={contactCareteamJSON} width="80px" />
      </div>
    </Wrapper>
  );
}

