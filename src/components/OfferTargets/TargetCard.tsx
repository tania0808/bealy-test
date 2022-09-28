import { CardWrapper } from './OfferTargets.styled';
import { Button } from "../helpers/Button.styled";
import { H5, P } from "../helpers/Utils.styled";
import { CardImage } from "../helpers/CardImage";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function OfferCard({ title, description, icon }: Props) {
  return (
    <CardWrapper>
      <H5 align="center" padding="40px 0 0" top="40px">
        {title}
      </H5>
      <CardImage height="150px" imageWidth="50%" margin="20px 0 0 0">
        <img
          src={icon}
          alt="image"
        />
      </CardImage>
      <P margin="28px 0 0 0" align="center">{description}</P>
      <Button margin="56px 0 21px 0">Trouver mon assurance</Button>
      <a href="#">Échangez avec un conseiller</a>
    </CardWrapper>
  );
}
