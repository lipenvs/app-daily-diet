import { Image, ImageSourcePropType } from "react-native";
import { Container, Header, Subtitle, Title } from "./styles";
import { myTheme } from "@/theme";

export type ThemeColorType = keyof typeof myTheme.COLORS;

type Props = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  color: ThemeColorType;
};

export function Feedback({ title, subtitle, image, color }: Props) {
  return (
    <Container>
      <Header>
        <Title color={color}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Image source={image} />
    </Container>
  );
}
