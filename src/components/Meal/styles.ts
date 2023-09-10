import { css, styled } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Circle } from "phosphor-react-native";

export type Props = {
  isOk: boolean;
};

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px 12px 14px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const MealName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const CircleIcon = styled(Circle).attrs<Props>(({ theme, isOk }) => ({
  weight: "fill",
  size: 14,
  color: isOk ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
}))``;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 100%;
  margin: 0 12px;
`;
