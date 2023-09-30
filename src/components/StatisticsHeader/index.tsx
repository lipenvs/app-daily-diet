import { Formatter } from "@/utils/Formatter";
import { Container, Title, Subtitle, BackButton, BackIcon } from "./styles";

type Props = {
  percentage: number;
};

export function StatisticsHeader({ percentage }: Props) {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>

      <Title>{`${Formatter.NumberWithDecimal(percentage, 2)}%`}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
