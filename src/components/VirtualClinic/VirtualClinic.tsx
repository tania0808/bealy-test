import bealyHealth from "../../assets/bealy-health.svg";
import { H4, P } from "../helpers/Utils.styled";
import { Wrapper } from "./VirtualClinic.styled";

const VirtualClinic = () => {
  return (
    <Wrapper>
      <img src={bealyHealth} alt="" />
      <>
        <H4 align="center">La clinique virtuelle Bealy 360°</H4>
        <P margin="16px 0 0 0" align="center">
          Une assurance santé, c’est bien mais ce n’est pas suffisant. Prendre
          soin de la santé de ses collaborateurs c’est encore mieux.
        </P>
        <P margin="26px 0 0 0" align="center">
          Pour des individus et des équipes en bonne santé, plus engagées et
          plus productives, seuls des collaborateurs épanouis peuvent contribuer
          à une activité florissante.
        </P>
      </>
    </Wrapper>
  );
};

export default VirtualClinic;
