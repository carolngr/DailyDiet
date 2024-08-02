import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Meals = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin: 40px 0 8px;
`;

export const DataNow = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin: 32px 0 8px;
`;
