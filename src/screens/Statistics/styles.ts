import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  margin: 23px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
`;
