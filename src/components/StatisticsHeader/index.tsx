import { Container, BackButton, BackIcon } from "./styles";
import { PercentageValue } from "../PercentageValue";

type Props = {
  percentage: number;
};

export function StatisticsHeader({ percentage }: Props) {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>

      <PercentageValue percentage={percentage} />
    </Container>
  );
}
