import { Button, ButtonPink } from "../helpers/Button.styled";
import { H4, P, HorizontalBar } from "../helpers/Utils.styled";
import { CardImage } from "../helpers/CardImage";
import { Wrapper } from './Offers.styled'
interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  slogan: string;
}

export default function OfferCard({
  id,
  title,
  image,
  description,
  slogan,
}: Props) {
  return (
    <Wrapper>
      <CardImage height="230px" imageWidth="50%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/offers/${image}.svg`}
          alt="image"
        />
      </CardImage>
      <HorizontalBar></HorizontalBar>
      <H4 padding="40px 0 8px">{title}</H4>
      <P margin="8px 0 0 0">{description}</P>
      
      {id % 2 === 0 ? (
        <ButtonPink margin="20px 0">{slogan}</ButtonPink>
      ) : (
        <Button margin="20px 0">{slogan}</Button>
      )}
    </Wrapper>
  );
}
