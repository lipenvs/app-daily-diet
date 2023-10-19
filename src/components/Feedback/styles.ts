import { myTheme } from "@/theme";
import styled from "styled-components/native";

export type ThemeColorType = keyof typeof myTheme.COLORS;

type Props = {
  color: ThemeColorType;
};

export const Container = styled.View`
  align-items: center;
  width: 80%;
  gap: 40px;
`;

export const Header = styled.View`
  gap: 8px;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, color }) => theme.COLORS[color]};
  text-align: center;
`;

export const Subtitle = styled.Text`
  text-align: center;
`;

export const Illustration = styled.Image``;

export const BackButton = styled.Button``;
