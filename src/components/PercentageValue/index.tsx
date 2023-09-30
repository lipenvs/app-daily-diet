import { Formatter } from "@/utils/Formatter";
import { Container, Subtitle, Value } from "./styles";

type Props = {
  percentage: number;
};

export function PercentageValue({ percentage }: Props) {
  return (
    <Container>
      <Value>{`${Formatter.NumberWithDecimal(percentage, 2)}%`}</Value>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
