import * as React from "react";
import NavBar from "./components/Header/Header";
import { ContainerS } from "./components/helpers/Container";
import HealthPartner from "./components/HealthPartner";
import Slider from "./components/PartnersSlider/PartnersSlider";
import Offers from "./components/Offers/Offers";
import ProSection from "./components/ProAdvantages/ProSection";
import EmployeeEquipment from "./components/EmployeeEquipment";
import OfferTargets from "./components/OfferTargets/OfferTargets";
import TechPower from "./components/TechPower";
import VirtualClinic from "./components/VirtualClinic";
import HealthAssistanceDesktop from "./components/HealthAssistance/HealthAssistanceDesktop";
import HealthAssistanceMobile from "./components/HealthAssistance/HealthAssistanceMobile";
import InscriptionStepsDesktop from "./components/InscriptionSteps/InscriptionStepsDesktop";
import InscriptionStepsMobile from "./components/InscriptionSteps/InscriptionStepsMobile";
import Statistics from "./components/Statistics/Statistics";
import ContactCareTeam from "./components/ContactCareTeam/ContactCareTeam";
import BealyUpdates from "./components/BealyUpdates";
import BealyApp from "./components/BealyApp";
import SimplifyManagement from "./components/SimplifyManagement";
import { PersonalizedSupport } from "./components/PersonalizedSupport/PersonalizedSupport";

const Home = () => {
  return (
    <>
      <NavBar />
      {/*<ContainerS>
        <HealthPartner />
        <Slider/>
        <Offers />
        <ProSection />
        <EmployeeEquipment />
        <OfferTargets />
        <TechPower />
        <VirtualClinic />
        <HealthAssistanceDesktop />
        <HealthAssistanceMobile />
        <InscriptionStepsDesktop />
        <InscriptionStepsMobile />
        <Statistics />
        <ContactCareTeam />
      </ContainerS>
      <ContainerS>
        <BealyUpdates />
        <BealyApp />
      </ContainerS>
      <SimplifyManagement /> */}
      <ContainerS>
        <PersonalizedSupport />
      </ContainerS>
    </>
  );
};

export default Home;
