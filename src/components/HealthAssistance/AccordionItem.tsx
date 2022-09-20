import React, { useState } from "react";
import arrowRight from "../../assets/arrow-simple-right.svg";
import arrowDown from "../../assets/arrow-simple-down.svg";
import { Flex } from "../helpers/Flex.styled";
import styled from "styled-components";

interface AccordionItem {
  title: string;
  image: string;
  description: string;
  folder: string
}

export default function AccordionItem({
  title,
  image,
  description,
  folder
}: AccordionItem) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AccordionHeader>
        <div>
          <h5>{title}</h5>
          <p onClick={toggleButton}>
            {isOpen ? (
              <img src={arrowDown} alt="arrow down" />
            ) : (
              <img src={arrowRight} alt="arrow right" />
            )}
          </p>
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
const Image = styled.div`
max-width: 100%;
margin: 40px 0 64px;

& > img {
    width: 100%;
    margin: 0 auto;
}
`

const AccordionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  & > p {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.black_600};
  }
  & > p {
    margin: 0;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    & > h5 {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.black_800};
    }
  }
`;
