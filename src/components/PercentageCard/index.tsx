import { TouchableOpacityProps } from "react-native";
import { Container, CurrentPorcentageStyleProps, Icon } from "./styles";
import { PercentageValue } from "../PercentageValue";

type Props = TouchableOpacityProps & {
  currentPorcentage: CurrentPorcentageStyleProps;
  subtitle: string;
};

export function PorcentageCard({
  currentPorcentage,
  subtitle,
  ...rest
}: Props) {
  return (
    <Container currentPorcentage={currentPorcentage} {...rest}>
      <Icon currentPorcentage={currentPorcentage} />
      <PercentageValue percentage={91} />
    </Container>
  );
}
