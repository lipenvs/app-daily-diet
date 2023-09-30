import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { CRITICAL_PERCENTAGE_VALUE } from "@/constants";

export type CurrentPorcentageStyleProps = number;

type Props = {
  currentPorcentage: CurrentPorcentageStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, currentPorcentage }) =>
    currentPorcentage > CRITICAL_PERCENTAGE_VALUE
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  height: 170px;
  justify-content: center;
  padding: 24px;
  margin-bottom: 10px;
`;

export const BackButton = styled(TouchableOpacity)``;

export const BackIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, currentPorcentage }) => ({
    color:
      currentPorcentage < CRITICAL_PERCENTAGE_VALUE
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GREEN_DARK,
  })
)``;
