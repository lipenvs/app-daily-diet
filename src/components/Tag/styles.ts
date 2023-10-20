import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 8px 16px;
  border-radius: 100px;
  align-self: flex-start;
`;

export const Label = styled.Text``;

export const CircleIcon = styled(Circle).attrs({
  weight: "fill",
  size: 8,
})`
  margin-right: 8px;
`;
