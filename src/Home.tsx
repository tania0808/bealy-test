import * as React from "react";
import NavBar from "./components/Header/Header";
import { Container } from "./components/helpers/Container.styled";
import HealthPartner from './components/HealthPartner'
import Slider from './components/Slider/Slider'
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <NavBar />
      <Container>
        <HealthPartner/>
      </Container>
      <Slider/>
    </>
  );
};

export default Home;
