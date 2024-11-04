import { SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fce4ec;
  padding: 20px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 20px;
  padding-top: 33px;
  padding-horizontal: 24px;
`;

export const BodyTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #1b1d1e;
  margin-bottom: 23px;
  text-align: center;
`;

export const Card = styled.View`
  background-color: #eff0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  align-items: center;
`;

export const CardNumber = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const CardLabel = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 8xpx;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
