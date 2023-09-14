import { Container, Subtitle, Value } from "./styles";

type Props = {
    value: number;
}



export function PercentageValue({value}: Props){


    const formattedPercentage = value.toLocaleString(undefined, {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

return <Container>
        <Value>{formattedPercentage}%</Value>
        <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>;
}