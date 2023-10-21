import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type Props = {
  secondary: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};

  border-width: 1px;
  border-color: ${({ theme, secondary }) =>
    secondary ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  border-radius: 6px;

  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.Text<Props>`
  text-align: center;
  ${({ theme, secondary }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${secondary ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, secondary }) => ({
    color: secondary ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE,
    size: 18,
  })
)``;
