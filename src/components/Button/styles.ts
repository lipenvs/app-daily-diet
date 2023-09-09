import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18,
}))``;
