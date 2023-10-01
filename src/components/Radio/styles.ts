import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";
import { myTheme } from "@/theme";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Option = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  gap: 8px;
  margin-top: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const CircleIcon = styled(Circle).attrs(({ color }) => ({
  color: color,
  weight: "fill",
  size: 8,
}))``;
