import { BackButton, BackIcon, Container, Content } from "./styles";
import { PercentageValue } from "@/components/PercentageValue";

export function StatisticsHeader(){
    return <Container>
        <Content>
            <BackButton>
                <BackIcon />
            </BackButton>

            <PercentageValue value={30.21} />
        </Content>
    </Container>;
}