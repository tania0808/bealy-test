import * as React from "react";
import NavBar from "./components/Header/Header";
import { Container } from "./components/helpers/Container.styled";
import HealthPartner from './components/HealthPartner'
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <NavBar />
      <Container>
        <HealthPartner/>
      </Container>
    </>
  );
};

export default Home;
