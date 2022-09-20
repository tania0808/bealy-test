import contactCareteamJSON from "../../data/contact-careteam.json";
import { useState } from "react";
import styled from "styled-components";
import { FlexItem } from "../helpers/Utils.styled";
import { device } from "../../theme/device";

interface Icon {
  id: number;
  image: string;
  topD: string;
  leftD: string;
  topM: string;
  leftM: string;
}

export default function Images() {
  const [icons] = useState(contactCareteamJSON);

  return (
    <>
      {icons.map((icon, index: number) => {
        return (
          <IconBox
            topD={icon.topD}
            leftD={icon.leftD}
            topM={icon.topM}
            leftM={icon.leftM}
            key={index}
            device={device.phone}
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/contact-careteam/${
                icon.image
              }.svg`}
              alt="image"
            />
          </IconBox>
        );
      })}
    </>
  );
}

interface IconBoxI {
  topD: string;
  leftD: string;
  device?: string;
  topM: string;
  leftM: string
}

const IconBox = styled(FlexItem)<IconBoxI>`
  position: absolute;
  width: 80px;
  max-width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ topD }) => topD};
  left: ${({ leftD }) => leftD};
  border: 1px solid #ececec;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);

  & > img {
    max-width: 100%;
  }
  
  @media ${device.phone} {
    max-width: 35px;
    height: 35px;
    padding: 5px;
    top: ${({ topM }) => topM};
    left: ${({ leftM }) => leftM};
  }
`;
