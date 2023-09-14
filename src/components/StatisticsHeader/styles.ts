import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native"

export const Container = styled.View`
    height: 180px;
    background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
    justify-content: center;
`;

export const Content = styled(SafeAreaView)`
    padding: 24px;
`;

export const BackButton = styled(TouchableOpacity)`
`;

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
    color: theme.COLORS.RED_DARK
}))`
  `;
  