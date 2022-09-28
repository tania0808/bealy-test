import styled from "styled-components";
import { device } from "../../theme/device";
import { H6, P } from "../helpers/Utils.styled";
import { Flex } from "../helpers/Flex.styled";
import { ButtonTransparent } from "../helpers/Button.styled";
import arrowRight from "../../assets/arrow-right-black.svg";

interface TestimonialProp {
  icon: string;
  text: string;
  date: string;
  company: string;
  margin?: string | number;
}
export default function Item({
  icon,
  text,
  date,
  company,
  margin,
}: TestimonialProp) {
  return (
    <Article margin={margin}>
      <Flex direction="column" justify="space-evently" margin="0">
        <Header gap="10px" margin="15px" direction="row">
          <Logo>
            <img
              src={icon}
              alt="image"
            />
          </Logo>
          <Flex direction="column" align="start" margin="0" justify="center">
            <H6>{company}</H6>
            <P>{date}</P>
          </Flex>
        </Header>
        <P margin="25px 0 ">{text}</P>
        <ButtonWrapper align="center">
          <ButtonTransparent
            colorBlack
            padding="0 0 15px 0"
            justify="flex-end"
            align="center"
            margin="0 0 15px 0"
          >
            {" "}
            Voir l'article <img src={arrowRight} alt="" />
          </ButtonTransparent>
        </ButtonWrapper>
      </Flex>
    </Article>
  );
}

const ButtonWrapper = styled(Flex)`
  justify-content: end;
`;

const Header = styled(Flex)`
  flex-direction: row !important;
`;

interface ArticleI {
  margin?: string | number;
}

const Article = styled.article<ArticleI>`
  width: 284px;
  padding: 0 25px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: ${({ margin }) => margin || 0};
  min-height: 365px;
  max-height: 365px;
  & > div {
    flex: 1;
    height: 100%;
    & > p {
      line-height: 27px;
    }
  }
  @media ${device.phone} {
    width: 99vw;
  }
`;

const Logo = styled.div`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    object-fit: contain;
  }
`;
