import { TouchableOpacityProps } from "react-native";
import { Container, CurrentPorcentageStyleProps, Icon } from "./styles";
import { PercentageValue } from "../PercentageValue";

type Props = TouchableOpacityProps & {
  currentPercentage: CurrentPorcentageStyleProps;
  subtitle: string;
};

export function PorcentageCard({
  currentPercentage,
  subtitle,
  ...rest
}: Props) {
  return (
    <Container currentPorcentage={currentPercentage} {...rest}>
      <Icon currentPorcentage={currentPercentage} />
      <PercentageValue percentage={currentPercentage} />
    </Container>
  );
}
