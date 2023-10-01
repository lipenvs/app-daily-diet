import { myTheme } from "@/theme";
import { CircleIcon, Container, Label, Option, Row } from "./styles";

export function Radio() {
  return (
    <Container>
      <Label>Está dentro da dieta?</Label>

      <Row>
        <Option>
          <CircleIcon color={myTheme.COLORS.GREEN_DARK} />
          <Label>Sim</Label>
        </Option>
        <Option>
          <CircleIcon color={myTheme.COLORS.RED_DARK} />
          <Label>Não</Label>
        </Option>
      </Row>
    </Container>
  );
}
