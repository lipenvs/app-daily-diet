import { Container, BackButton, BackIcon } from "./styles";
import { PercentageValue } from "../PercentageValue";
import { useNavigation } from "@react-navigation/native";

type Props = {
  percentage: number;
};

export function StatisticsHeader({ percentage }: Props) {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container currentPorcentage={percentage}>
      <BackButton onPress={handleHome}>
        <BackIcon currentPorcentage={percentage} />
      </BackButton>

      <PercentageValue percentage={percentage} />
    </Container>
  );
}
