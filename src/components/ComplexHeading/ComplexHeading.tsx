import { H4, H5 } from "../helpers/Utils.styled";
import { FlexItem } from "../helpers/Flex.styled"; 
import { PreHeader } from './ComplexHeading.styled';

type Props = {
  image: string;
  secondaryTitle: string;
  mainTitle: string;
  mobileWidth: string;
  mobile?: boolean;
};

export default function ComplexHeading({
  image,
  secondaryTitle,
  mainTitle,
  mobile,
  mobileWidth
}: Props) {
  return (
    <FlexItem direction="column" width={mobileWidth}>
      <PreHeader>
        <img src={image} alt="" />
        <p>{secondaryTitle}</p>
      </PreHeader>
      {mobile ? (
        <H5 as="h5" padding="20px 0">{mainTitle}</H5>
      ) : (
        <H4 padding="20px 0">{mainTitle}</H4>
      )}
    </FlexItem>
  );
}