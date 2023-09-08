import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import { styled, css } from "styled-components/native";

import { CRITICAL_PERCENTAGE_VALUE } from "@/constants";

export type CurrentPorcentageStyleProps = number;

type Props = {
  currentPorcentage: CurrentPorcentageStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, currentPorcentage }) =>
    currentPorcentage > CRITICAL_PERCENTAGE_VALUE
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 20px 12px;
`;

export const PorcentageValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

// export const Icon = styled(ArrowUpRight)``;
