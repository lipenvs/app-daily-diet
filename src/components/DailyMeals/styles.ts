import { css, styled } from "styled-components/native";

export const Container = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-bottom: 8px;
`;
