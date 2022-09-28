import StatisticItem from "./StatisticItem";
import { ColoredSpan } from "../helpers/ColoredSpan";
import { GridContainer } from "../helpers/GridContainer";
import { H4 } from "../helpers/Utils.styled";
import statisticsJSON from "../../data/statistics.json";

export default function Offers() {

  return (
    <>
      <H4 padding="230px 0 80px" align="center">
        La santé au travail, <ColoredSpan>l'enjeux RH</ColoredSpan> majeur
        <br /> des années futures
      </H4>
      <GridContainer>
        {statisticsJSON.map((item) => {
          return <StatisticItem key={item.id} {...item} />;
        })}
      </GridContainer>
    </>
  );
}
