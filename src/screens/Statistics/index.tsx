import { StatisticsHeader } from "@/components/StatisticsHeader";
import { Container, Content, Row, Title } from "./styles";
import { InfoCard } from "@/components/InfoCard";

export function Statistics() {
  return (
    <Container>
      <StatisticsHeader percentage={90.21} />

      <Content>
        <Title>Estatísticas gerais</Title>

        <Row>
          <InfoCard
            value={4}
            description="melhor sequência de pratos dentro da dieta"
            color={"GRAY_600"}
          />
        </Row>

        <Row>
          <InfoCard
            value={109}
            description="refeições registradas"
            color={"GRAY_600"}
          />
        </Row>

        <Row>
          <InfoCard
            value={32}
            description="refeições dentro da dieta"
            color={"GREEN_LIGHT"}
          />

          <InfoCard
            value={77}
            description="refeições fora da dieta"
            color={"RED_LIGHT"}
          />
        </Row>
      </Content>
    </Container>
  );
}
