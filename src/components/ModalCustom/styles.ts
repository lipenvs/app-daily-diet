import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 8px;
  gap: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
