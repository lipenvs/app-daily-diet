import { Container, Description, ThemeColorType, Value } from "./styles";

type Props = {
  color: ThemeColorType;
  value: number;
  description: string;
};

export function InfoCard({ color, value, description }: Props) {
  return (
    <Container color={color}>
      <Value>{value}</Value>
      <Description>{description}</Description>
    </Container>
  );
}
