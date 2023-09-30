import { myTheme } from "@/theme";
import styled, { css } from "styled-components/native";

export type ThemeColorType = keyof typeof myTheme.COLORS;

type Props = {
  color: ThemeColorType;
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, color }) => theme.COLORS[color]};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  flex: 1;
  justify-content: center;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
`;
