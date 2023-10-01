import { Container, Icon, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ label, iconName }: Props) {
  return (
    <Container>
      {iconName && <Icon name={iconName} />}
      <Label>{label}</Label>
    </Container>
  );
}
