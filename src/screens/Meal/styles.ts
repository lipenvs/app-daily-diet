import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  flex: 1;
`;

export const Group = styled.View`
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
