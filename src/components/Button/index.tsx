import { Container, Icon, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ label, iconName, ...rest }: Props) {
  return (
    <Container {...rest}>
      {iconName && <Icon name={iconName} />}
      <Label>{label}</Label>
    </Container>
  );
}
