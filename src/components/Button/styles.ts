import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-top: 20px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
  text-align: center;
  padding: 16px 24px;
`;
