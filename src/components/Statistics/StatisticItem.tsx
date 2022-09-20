import styled from "styled-components";
import { Button } from "../helpers/Button.styled";

interface Props {
  id: number;
  image: string;
  description: string;
}
export default function StatisticItem({ id, image, description }: Props) {
  return (
    <StatisticItemS>
      <Image>
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/statistics/${image}.svg`}
          alt="image"
        />
      </Image>
      <p>{description}</p>
    </StatisticItemS>
  );
}

const Image = styled.div`
  display: flex;
  height: 154px;
  & > img {
    width: 50%;
    margin: 0 auto;
  }
`;

const StatisticItemS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  & > p {
    color: ${({ theme }) => theme.colors.black_600};
  }
`;
