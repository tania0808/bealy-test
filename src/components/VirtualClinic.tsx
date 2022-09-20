import bealyHealth from "../assets/bealy-health.svg";
import styled from "styled-components";
import { H4 } from "./helpers/Utils.styled";
const VirtualClinic = () => {
  return (
      <Box>
        <img src={bealyHealth} alt="" />
        <>
            <H4 align="center">La clinique virtuelle Bealy 360°</H4>
          <p>
            Une assurance santé, c’est bien mais ce n’est pas suffisant. Prendre
            soin de la santé de ses collaborateurs c’est encore mieux.
          </p>
          <p>
            Pour des individus et des équipes en bonne santé, plus engagées et
            plus productives, seuls des collaborateurs épanouis peuvent
            contribuer à une activité florissante.
          </p>
        </>
      </Box>
  );
};

const Box = styled.div`
  max-width: 610px;
  margin: 222px auto 180px;

  & > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
  }
  
  & > p {
    margin-top: 16px;
    padding-right: 29px;
    color: ${({ theme }) => theme.colors.black_700};
    text-align: center;
  }
`;

export default VirtualClinic;
