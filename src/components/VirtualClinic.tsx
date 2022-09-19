import { ContainerS } from "./helpers/Container";
import bealyHealth from "../assets/bealy-health.svg";
import { Heading } from "./Heading";
import styled from "styled-components";

const VirtualClinic = () => {
  return (
    <ContainerS margin="220px auto">
      <Box>
        <img src={bealyHealth} alt="" />
        <>
          <Heading align="center">
            <h3>La clinique virtuelle Bealy 360°</h3>
          </Heading>
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
    </ContainerS>
  );
};

const Box = styled.div`
  max-width: 610px;
  margin: 0 auto;

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
