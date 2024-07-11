import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 4px;
  padding: 16px 20px;
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
