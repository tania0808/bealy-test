import { Wrapper, Section } from "./ProAdvantages.styled";
import ProCard from "./ProCard";
import { H4 } from "../helpers/Utils.styled";
import proJSON from "../../data/pro-advantages.json";
import { proAdvImages } from "../../assets/pro-advantages";

export default function ProSection() {
  return (
    <Wrapper>
      <Section>
        <H4 white align="center" padding="0 0 54px">
          Le compte pro idéal pour gérer <br /> votre santé
        </H4>
        <div>
          {proJSON.map((item) => {
            return <ProCard key={item.id} {...item} icon={proAdvImages[item.image]}/>;
          })}
        </div>
      </Section>
    </Wrapper>
  );
}
