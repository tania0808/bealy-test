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
import VirtualClinic from "./components/VirtualClinic";
import HealthAssistance from "./components/HealthAssistanceDesktop/HealthAssistance";
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
      <VirtualClinic/>
      <HealthAssistance/>
    </>
  );
};

export default Home;
