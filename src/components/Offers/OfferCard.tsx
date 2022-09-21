import styled from "styled-components";
import { Button, ButtonPink } from "../helpers/Button.styled";
import { H4 } from "../helpers/Utils.styled";
import { CardImage } from "../helpers/CardImage";

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
    <OfferCardS>
      <CardImage height="230px" imageWidth="50%">
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/offers/${image}.svg`}
          alt="image"
        />
      </CardImage>
      <span></span>
      <H4 padding="40px 0 8px">{title}</H4>
      <p>{description}</p>
      {id % 2 === 0 ? (
        <ButtonPink margin="20px 0">{slogan}</ButtonPink>
      ) : (
        <Button margin="20px 0">{slogan}</Button>
      )}
    </OfferCardS>
  );
}

const OfferCardS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.bright_grey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  box-sizing: border-box;

  padding: 0 24px;

  & > span {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light_grey};
    margin: 0 35px;
  }

  & > h4 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.black_700};
  }
`;
