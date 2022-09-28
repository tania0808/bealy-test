import { CardImage } from "../helpers/CardImage";
import { FlexColumn } from "../helpers/Flex.styled";
import { P } from "../helpers/Utils.styled";

interface Props {
  image: string;
  description: string;
}

export default function StatisticItem({ image, description }: Props) {
  return (
    <FlexColumn padding="0 24px">
      <CardImage height="154px" imageWidth="50%">
        <img
          src={image}
          alt="image"
        />
      </CardImage>
      <P>{description}</P>
    </FlexColumn>
  );
}
