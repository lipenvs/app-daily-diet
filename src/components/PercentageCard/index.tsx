import { TouchableOpacityProps } from "react-native";
import {
  Container,
  CurrentPorcentageStyleProps,
  PorcentageValue,
  Subtitle,
} from "./styles";

type Props = TouchableOpacityProps & {
  currentPorcentage: CurrentPorcentageStyleProps;
  subtitle: string;
};

export function PorcentageCard({
  currentPorcentage,
  subtitle,
  ...rest
}: Props) {
  const formattedPorcentage = currentPorcentage.toLocaleString(undefined, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Container currentPorcentage={currentPorcentage} {...rest}>
      {/* <Icon /> */}
      <PorcentageValue>{`${formattedPorcentage}%`}</PorcentageValue>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
