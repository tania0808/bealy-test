import styled from "styled-components";
import { device } from "../../theme/device";

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function ProCard({ title, image, description }: Props) {
  return (
    <ProCardS>
      <Image>
        <img
          src={`${
            import.meta.env.VITE_BASE_URL
          }assets/pro-advantages/${image}.svg`}
          alt="image"
        />
      </Image>
      <h5>{title}</h5>
      <p>{description}</p>
    </ProCardS>
  );
}

const ProCardS = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 191px;

  & > h5 {
    margin-top: 40px;
  }

  & > p {
    margin-top: 16px;
  }

  @media ${device.phone} {
    grid-template-columns: auto;
    grid-row-gap: 24px;
    padding: 0;
    min-width: 193px;
    max-width: 193px;
  }
`;

const Image = styled.div`
  text-align: center;
  height: 64px;
  width: 100%;

  & > img {
    width: 30%;
    margin: 0 auto;
    height: 100%;
  }
`;
