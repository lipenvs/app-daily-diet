import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-right: 32px;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  flex: 1;
  text-align: center;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 0;
  z-index: 1;
`;
