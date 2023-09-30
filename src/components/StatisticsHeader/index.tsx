import { Container, BackButton, BackIcon } from "./styles";
import { PercentageValue } from "../PercentageValue";

type Props = {
  percentage: number;
};

export function StatisticsHeader({ percentage }: Props) {
  return (
    <Container currentPorcentage={percentage}>
      <BackButton>
        <BackIcon currentPorcentage={percentage} />
      </BackButton>

      <PercentageValue percentage={percentage} />
    </Container>
  );
}
