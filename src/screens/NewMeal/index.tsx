import { Input } from "@/components/Input";
import { Container, Content, Row } from "./styles";
import { Button } from "@/components/Button";
import { Radio } from "@/components/Radio";

export function NewMeal() {
  return (
    <Container>
      <Content>
        <Row>
          <Input label="Nome" />
        </Row>

        <Row>
          <Input
            label="Descrição"
            multiline
            numberOfLines={4}
            style={{ textAlignVertical: "top" }}
          />
        </Row>

        <Row>
          <Input label="Data" />

          <Input label="Hora" />
        </Row>

        <Radio />
      </Content>

      <Button label="Cadastrar refeição" />
    </Container>
  );
}
