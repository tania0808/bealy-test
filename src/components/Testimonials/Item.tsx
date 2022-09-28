import { H6, P } from "../helpers/Utils.styled";
import { Flex } from "../helpers/Flex.styled";
import { ButtonTransparent } from "../helpers/Button.styled";
import arrowRight from "../../assets/arrow-right-black.svg";
import {Article, Header, Logo, ButtonWrapper, } from './Testimonials.styled';

interface TestimonialProp {
  logo: string;
  text: string;
  date: string;
  company: string;
  margin?: string | number;
}
export default function Item({
  logo,
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
              src={logo}
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

