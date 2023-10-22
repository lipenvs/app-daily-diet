import { StatisticsHeader } from "@/components/StatisticsHeader";
import { Container, Content, Row, Title } from "./styles";
import { InfoCard } from "@/components/InfoCard";
import { useState } from "react";

export function Statistics() {
  const [statistics, setStatistics] = useState({
    bestSequence: 0,
    registeredMeals: 0,
    mealsInsideDiet: 0,
    mealsOutsideDiet: 0,
    percentageInDiet: 0,
  });

  return (
    <Container>
      <StatisticsHeader percentage={statistics.percentageInDiet} />

      <Content>
        <Title>Estatísticas gerais</Title>

        <Row>
          <InfoCard
            value={statistics.bestSequence}
            description="melhor sequência de pratos dentro da dieta"
            color={"GRAY_600"}
          />
        </Row>

        <Row>
          <InfoCard
            value={statistics.registeredMeals}
            description="refeições registradas"
            color={"GRAY_600"}
          />
        </Row>

        <Row>
          <InfoCard
            value={statistics.mealsInsideDiet}
            description="refeições dentro da dieta"
            color={"GREEN_LIGHT"}
          />

          <InfoCard
            value={statistics.mealsOutsideDiet}
            description="refeições fora da dieta"
            color={"RED_LIGHT"}
          />
        </Row>
      </Content>
    </Container>
  );
}
