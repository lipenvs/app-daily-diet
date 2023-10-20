import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  gap: 24px;
`;

export const Content = styled(ScrollView)`
  flex: 1;
  gap: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 24px;
`;
