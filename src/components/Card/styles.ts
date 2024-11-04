import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type IColor = {
  bgColor: string;
};

export const Container = styled.View<IColor>`
  align-items: center;
  background-color: ${({ bgColor, theme }) => bgColor || theme.COLORS.WHITE};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 2px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const IconUp = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  align-self: flex-end;
  font-weight: bold;
`;
