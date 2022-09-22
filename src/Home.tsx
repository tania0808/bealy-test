import * as React from "react";
import NavBar from "./components/Header/Header";
import { ContainerS } from "./components/helpers/Container";
import HealthPartner from "./components/HealthPartner";
import Slider from "./components/PartnersSlider/PartnersSlider";
import Offers from "./components/Offers/Offers";
import ProSection from "./components/ProAdvantages/ProSection";
import EmployeeEquipment from "./components/EmployeeEquipment/EmployeeEquipment";
import OfferTargets from "./components/OfferTargets/OfferTargets";
import TechPower from "./components/TechPower";
import VirtualClinic from "./components/VirtualClinic/VirtualClinic";
import HealthAssistanceDesktop from "./components/HealthAssistance/HealthAssistance";
import InscriptionStepsDesktop from "./components/InscriptionSteps/InscriptionSteps";
import Statistics from "./components/Statistics/Statistics";
import ContactCareTeam from "./components/ContactCareTeam/ContactCareTeam";
import BealyUpdates from "./components/BealyUpdates/BealyUpdates";
import BealyApp from "./components/BealyApp/BealyApp";
import SimplifyManagement from "./components/SimplifyManagement/SimplifyManagement";
import { PersonalizedSupport } from "./components/PersonalizedSupport/PersonalizedSupport";
import Testimonials from "./components/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <NavBar />
      <ContainerS>
        <HealthPartner />
        <Slider />
        <Offers />
      </ContainerS>

      <ProSection />

      <ContainerS>
        <EmployeeEquipment />
        <OfferTargets />
        <TechPower />
        <VirtualClinic />
        <HealthAssistanceDesktop />
        <InscriptionStepsDesktop />
        <Statistics />
        <ContactCareTeam />
        <BealyUpdates />
        <BealyApp />
      </ContainerS>
      <SimplifyManagement />
      <ContainerS>
        <PersonalizedSupport />
        <Testimonials />
        <Slider />
      </ContainerS>
    </>
  );
};

export default Home;
