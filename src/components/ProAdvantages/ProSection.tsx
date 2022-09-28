import { Wrapper, Section } from "./ProAdvantages.styled";
import ProCard from "./ProCard";
import { H4 } from "../helpers/Utils.styled";
import proAdvantages from "../../data/pro-advantages";

export default function ProSection() {
  return (
    <Wrapper>
      <Section>
        <H4 white align="center" padding="0 0 54px">
          Le compte pro idéal pour gérer <br /> votre santé
        </H4>
        <div>
          {proAdvantages.map((item) => {
            return <ProCard key={item.id} {...item}/>;
          })}
        </div>
      </Section>
    </Wrapper>
  );
}
