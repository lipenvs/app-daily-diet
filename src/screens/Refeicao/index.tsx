import { Tag } from "@/components/Tag";
import { Container } from "../Home/styles";
import { Subtitle, Description, Title, Group, Content } from "./styles";
import { Button } from "@/components/Button";

export function Refeicao() {
  return (
    <Container>
      <Content>
        <Group>
          <Title>Sanduíche</Title>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </Group>

        <Group>
          <Subtitle>Data e hora</Subtitle>
          <Description>12/08/2022 às 16:00</Description>
        </Group>

        <Tag />
      </Content>

      <Button label="Editar refeição" style={{ marginBottom: 8 }} />
      <Button label="Excluir refeição" />
    </Container>
  );
}
