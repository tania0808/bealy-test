import styled from "styled-components";
import { Button } from '../Button.styled'
interface Props {
    id: number,
  image: string;
  title: string;
  description: string;
  slogan: string
}
export default function OfferCard({ id,title, image, description, slogan }: Props) {
  return (
    <OfferCardS>
      <Image>
        <img
          src={`${import.meta.env.VITE_BASE_URL}assets/offers/${image}.svg`}
          alt="image"
        />
      </Image>
      <span></span>
      <h4>{title}</h4>
      <p>{description}</p>
      <Button margin='56px 0' bg={id % 2 === 0 ? '#f0004c' : 'black'} border={id % 2 === 0 ? '#f0004c' : 'black'} color='#fff'>{slogan}</Button>
    </OfferCardS>
  );
}

const Image = styled.div`
text-align: center;
height: 230px;
& > img {
    padding: 56px 0;
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

  padding: 0 24px;

  & > img {
    width: 50%;
    margin: 0 auto;
    padding: 56px 0;
  }

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

  & 
`;
