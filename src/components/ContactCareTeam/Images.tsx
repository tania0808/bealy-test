import { IconBox } from "../helpers/CareIcon.styled";

interface Icon {
  id: number;
  image: string;
  topD: string;
  leftD: string;
  topM: string;
  leftM: string;
}

type Data = {
  icons: Icon[];
  width: string;
};

export default function Images({ icons, width }: Data) {
  return (
    <>
      {icons.map((icon: Icon) => {
        return (
          <IconBox
            topD={icon.topD}
            leftD={icon.leftD}
            topM={icon.topM}
            leftM={icon.leftM}
            key={icon.id}
            width={width}
          >
            <img
              src={icon.image}
              alt="image"
            />
          </IconBox>
        );
      })}
    </>
  );
}
