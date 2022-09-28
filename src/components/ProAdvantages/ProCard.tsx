import { CardImage } from "../helpers/CardImage";
import { ProCardWrapper } from './ProAdvantages.styled';

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function ProCard({ title, image, description }: Props) {
  return (
    <ProCardWrapper>
      <CardImage>
        <img
          src={image}
          alt="image"
        />
      </CardImage>
      <h5>{title}</h5>
      <p>{description}</p>
    </ProCardWrapper>
  );
}
