import { Button } from "../helpers/Button.styled";
import { H5, P } from "../helpers/Utils.styled";
import { CardImage } from "../helpers/CardImage";
import { CardWrapper } from './OfferTargets.styled';

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function OfferCard({ title, image, description }: Props) {
  return (
    <CardWrapper>
      <H5 align="center" padding="40px 0 0" top="40px">
        {title}
      </H5>
      <CardImage height="150px" imageWidth="50%" margin="20px 0 0 0">
        <img
          src={`${
            import.meta.env.VITE_BASE_URL
          }assets/offer-targets/${image}.svg`}
          alt="image"
        />
      </CardImage>
      <P margin="28px 0 0 0" align="center">{description}</P>
      <Button margin="56px 0 21px 0">Trouver mon assurance</Button>
      <a href="#">Échangez avec un conseiller</a>
    </CardWrapper>
  );
}
