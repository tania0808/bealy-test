import * as React from "react";
import NavBar from "./components/Header/Header";
import { ContainerS } from "./components/helpers/Container";
import HealthPartner from "./components/HealthPartner";
import Slider from "./components/Slider/Slider";
import Offers from "./components/Offers/Offers";
import ProSection from "./components/ProAdvantages/ProSection";
import EmployeeEquipment from "./components/EmployeeEquipment";
import OfferTargets from "./components/OfferTargets/OfferTargets";
import TechPower from "./components/TechPower";
const Home: React.FunctionComponent = (props) => {
  return (
    <>
      <NavBar />
      <ContainerS>
        <HealthPartner />
      </ContainerS>
      <Slider />
      <Offers />
      <ProSection/>
      <EmployeeEquipment/>
      <OfferTargets/>
      <TechPower/>
    </>
  );
};

export default Home;
