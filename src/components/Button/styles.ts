import styled from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
  text-align: center;
  padding: 16px 24px;
`;

export const IconButton = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``;
