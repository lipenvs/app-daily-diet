import { Container, Icon, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  secondary?: boolean;
};

export function Button({ label, iconName, secondary = false, ...rest }: Props) {
  return (
    <Container secondary={secondary} {...rest}>
      {iconName && <Icon secondary={secondary} name={iconName} />}
      <Label secondary={secondary}>{label}</Label>
    </Container>
  );
}
