import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";

export const Container = styled.View``;

type Props = {
  isActive: boolean;
  isDanger?: boolean;
};

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Option = styled(TouchableOpacity)<Props>`
  ${({ theme, isActive, isDanger = false }) => css`
    background-color: ${isActive
      ? isDanger
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_600};

    border: ${isActive
      ? isDanger
        ? `1px solid ${theme.COLORS.RED_DARK}`
        : `1px solid ${theme.COLORS.GREEN_DARK}`
      : "none"};
  `}
  flex: 1;
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

export const CircleIcon = styled(Circle).attrs({
  weight: "fill",
  size: 8,
})``;
