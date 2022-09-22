import { CardImage } from "../helpers/CardImage";
import { FlexColumn } from "../helpers/Flex.styled";
import { P } from "../helpers/Utils.styled";

interface Props {
  id: number;
  image: string;
  description: string;
}

export default function StatisticItem({ id, image, description }: Props) {
  return (
    <FlexColumn padding="0 24px">
      <CardImage height="154px" imageWidth="50%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/statistics/${image}.svg`}
          alt="image"
        />
      </CardImage>
      <P>{description}</P>
    </FlexColumn>
  );
}
