import { Container, Icon, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  text: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ text }: Props) {
  return (
    <Container>
      <Icon name="add" />
      <Label>{text}</Label>
    </Container>
  );
}
