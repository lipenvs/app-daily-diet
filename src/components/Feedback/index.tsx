import { Image, ImageSourcePropType } from "react-native";
import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

export function Feedback({ title, subtitle, image }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Image source={image} />
    </Container>
  );
}
