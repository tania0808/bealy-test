import styled from "styled-components";
import { Button } from "../helpers/Button.styled";
import { CardImage } from "../helpers/CardImage";

interface Props {
  id: number;
  image: string;
  description: string;
}
export default function StatisticItem({ id, image, description }: Props) {
  return (
    <StatisticItemS>
      <CardImage height="154px" imageWidth="50%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/statistics/${image}.svg`}
          alt="image"
        />
      </CardImage>
      <p>{description}</p>
    </StatisticItemS>
  );
}

const StatisticItemS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  & > p {
    color: ${({ theme }) => theme.colors.black_600};
  }
`;
