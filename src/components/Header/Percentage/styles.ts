import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  padding-left: 24px;
  padding-right: 24px;
`;

export const HeaderText = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 34px;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 10px;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  padding-bottom: 12px;
`;

export const SubtitleText = styled.Text`
  font-size: 16px;
  color: #666;
`;
