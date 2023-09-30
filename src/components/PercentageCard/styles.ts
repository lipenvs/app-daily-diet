import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import { styled } from "styled-components/native";

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

export const Icon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, currentPorcentage }) => ({
    color:
      currentPorcentage > CRITICAL_PERCENTAGE_VALUE
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
  })
)`
  position: absolute;
  margin: 16px;
  right: 0;
`;
