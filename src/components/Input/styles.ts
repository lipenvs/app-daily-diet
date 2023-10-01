import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 4px;
`;

export const InputBox = styled(TextInput)`
  border-radius: 8px;
  padding: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
