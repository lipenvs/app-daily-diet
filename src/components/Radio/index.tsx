import { myTheme } from "@/theme";
import { CircleIcon, Container, Label, Option, Row } from "./styles";
import { useState } from "react";

export function Radio() {
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  function handleOptionClick(value: boolean) {
    setIsOptionSelected(value);
  }

  return (
    <Container>
      <Label>Está dentro da dieta?</Label>

      <Row>
        <Option
          isActive={isOptionSelected}
          onPress={() => handleOptionClick(true)}
        >
          <CircleIcon color={myTheme.COLORS.GREEN_DARK} />
          <Label>Sim</Label>
        </Option>

        <Option
          isActive={!isOptionSelected}
          isDanger
          onPress={() => handleOptionClick(false)}
        >
          <CircleIcon color={myTheme.COLORS.RED_DARK} />
          <Label>Não</Label>
        </Option>
      </Row>
    </Container>
  );
}
