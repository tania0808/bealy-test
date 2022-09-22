import ProCard from "./ProCard";
import { H4 } from "../helpers/Utils.styled";
import proJSON from "../../data/pro-advantages.json";
import { Wrapper } from "./ProAdvantages.styled";

export default function ProSection() {
  return (
    <Wrapper>
      <H4 white align="center" padding="0 0 54px">
        Le compte pro idéal pour gérer <br /> votre santé
      </H4>
      <div>
        {proJSON.map((item) => {
          return <ProCard key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
}
