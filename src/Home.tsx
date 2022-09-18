import * as React from "react";
import NavBar from "./components/Header/Header";
import { Container } from "./components/helpers/Container.styled";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>hello</h1>
      </Container>
    </>
  );
};

export default Home;
