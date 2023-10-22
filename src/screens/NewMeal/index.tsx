import { Input } from "@/components/Input";
import { Container, Content, Row } from "./styles";
import { Button } from "@/components/Button";
import { Radio, RadioOptions } from "@/components/Radio";
import { useState } from "react";

export function NewMeal() {
  const [selectedOption, setSelectedOption] = useState<RadioOptions>("Não");

  function handleOptionClick(value: RadioOptions) {
    setSelectedOption(value);
  }

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
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

        <Radio
          optionSelected={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      </Content>

      <Button label="Cadastrar refeição" />
    </Container>
  );
}
