import styled from "styled-components";
import { Button } from "../helpers/Button.styled";
import {H5} from '../helpers/Utils.styled'

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
}
export default function OfferCard({ title, image, description }: Props) {
  return (
    <OfferCardS>
      <H5 align="center" padding="40px 0 0">{title}</H5>
      <Image>
        <img
          src={`${
            import.meta.env.VITE_BASE_URL
          }assets/offer-targets/${image}.svg`}
          alt="image"
        />
      </Image>
      <p>{description}</p>
      <Button margin="56px 0 21px 0">
        Trouver mon assurance
      </Button>
      <a href="#">Échangez avec un conseiller</a>
    </OfferCardS>
  );
}

const Image = styled.div`
  display: flex;
  height: 150px;
  margin-top: 20px;
  & > img {
    width: 50%;
    margin: 0 auto;
  }
`;

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
  text-align: center;
  padding: 0 24px;

  & > span {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light_grey};
    margin: 0 35px;
  }

  & > h5 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.black_700};
  }

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 400;
    margin-bottom: 52px;
  }
`;
