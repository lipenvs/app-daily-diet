import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  height: 170px;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
  text-align: center
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center
`;

export const BackButton = styled(TouchableOpacity)``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.RED_DARK,
}))``;
