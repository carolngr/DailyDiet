import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 6px;
  border-width: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  flex-direction: row;

  padding: 10px 0;
  padding-left: 12px;
  padding-right: 16px;

  align-items: center;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-weight: bold;
  padding-right: 10px;
`;

export const Separator = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_4};
  padding-right: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  flex-grow: 1;
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;

  border-radius: 14px;
  border-width: 1px solid;
  border-color: #f3babd;
  background-color: #f3babd;
`;
