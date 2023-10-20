import { myTheme } from "@/theme";
import { CircleIcon, Container, Label } from "./styles";

export function Tag() {
  return (
    <Container>
      <CircleIcon color={myTheme.COLORS.GREEN_DARK} />
      <Label>dentro da dieta</Label>
    </Container>
  );
}
