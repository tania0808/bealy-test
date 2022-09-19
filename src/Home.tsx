import * as React from "react";
import NavBar from "./components/Header/Header";
import { ContainerS } from "./components/helpers/Container";
import HealthPartner from './components/HealthPartner'
import Slider from './components/Slider/Slider'
import Offers from "./components/Offers/Offers";
const Home: React.FunctionComponent = (props) => {
  return (
    <>
      <NavBar />
      <ContainerS>
        <HealthPartner/>
      </ContainerS>
      <Slider/>
        <Offers/>
    </>
  );
};

export default Home;
