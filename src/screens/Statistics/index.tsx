import { StatisticsHeader } from "@/components/StatisticsHeader";
import { Container, Title } from "./styles";

export function Statistics() {
  return (
    <Container>
      <StatisticsHeader percentage={32} />
    </Container>
  );
}
