import { useState } from "react";
import { AccordionHeader, Image } from "./Accordion.styled";
import { H6, P } from "../helpers/Utils.styled";
import arrowRight from "../../assets/arrow-simple-right.svg";
import arrowDown from "../../assets/arrow-simple-down.svg";

interface AccordionItem {
  title: string;
  image: string;
  description: string;
  folder: string;
}

export default function AccordionItem({
  title,
  image,
  description,
  folder,
}: AccordionItem) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AccordionHeader>
        <div>
          <H6>{title}</H6>
          <P onClick={toggleButton}>
            {isOpen ? (
              <img src={arrowDown} alt="arrow down" />
            ) : (
              <img src={arrowRight} alt="arrow right" />
            )}
          </P>
        </div>
        <p>{description}</p>
      </AccordionHeader>
      {isOpen && (
        <Image>
          <img
            src={`${
              import.meta.env.VITE_BASE_URL
            }assets/${folder}/${image}.svg`}
            alt=""
          />
        </Image>
      )}
    </>
  );
}
